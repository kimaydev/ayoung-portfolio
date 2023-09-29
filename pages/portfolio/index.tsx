import React from 'react';
import ListItem from '@/components/portfolio/ListItem';
import { NextPage } from 'next';
import { DATABASE_ID, TOKEN } from '@/config';
import { postData } from '@/lib/patchData';

const Frontend: NextPage = ({ props }: any) => {
  // console.log(props);
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
  const post = await postData();
  console.log('들어오는 데이터', post);
  return { props: { post } };
};
