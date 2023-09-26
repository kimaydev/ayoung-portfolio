import React from 'react';
import ListItem from '@/components/portfolio/ListItem';
import { getNotionData } from '@/api/patchData';
import axios from 'axios';
import { NextPage } from 'next';
import { DATABASE_ID, TOKEN } from '@/config';

const Frontend: NextPage = ({ data }: any) => {
  console.log(data);
  return (
    <div className="max-w-screen-lg mx-auto">
      <h3 className="about-section-title text-3xl font-bold mt-8 mb-2.5 text-center">
        <i className="block text-[0.7em] leading-none">🖥️</i>Portfolio
      </h3>
      <section className="portfolio-section">
        <ListItem />
      </section>
    </div>
  );
};

export default Frontend;

export const getStaticProps = async () => {
  let data;
  const options = {
    method: 'POST',
    url: `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    data: { page_size: 100 },
  };
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      data = response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
  return {
    props: {
      test: data || null,
    },
  };
};
