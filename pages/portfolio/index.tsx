import React from 'react';
import { postData } from '@/lib/patchData';
import ListItem from '@/components/portfolio/ListItem';

const Frontend = ({ resultId }: any) => {
  // console.log(resultId);
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
  const resultData = await postData();
  const resultId = resultData.results.map((item: any) => item.id);

  return { props: { resultId } };
};
