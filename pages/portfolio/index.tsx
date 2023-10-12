import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { postData } from '@/lib/patchData';
import { IresultData, Iresults } from '@/interface/portfolioInterface';

// props에 대한 타입 지정
interface Iprops {
  resultData: IresultData;
}

const Frontend: NextPage<Iprops> = ({ resultData }) => {
  // 노션 api의 results만 사용함
  const results = resultData?.results;
  // console.log(`1. 노션 api의 results만 사용함 ${results}`);
  return (
    <div className="mx-auto max-w-5xl">
      <h3 className="about-section-title text-3xl font-bold mt-8 mb-2.5 text-center">
        <i className="block text-[0.7em] leading-none">🖥️</i>Portfolio
      </h3>
      <section className="portfolio-section">
        <ul>
          {results.map((item: Iresults) => (
            <li key={item.id}>
              <Link href={item.properties.url.url} target="_blank">
                <div className="img-box">
                  <Image
                    src={item.properties.thum.files[0].file.url}
                    alt={item.properties.이름.title[0].plain_text}
                    width={300}
                    height={200}
                  />
                </div>
                <div className="txt-box">
                  <ol>
                    <li className="title">
                      {item.properties.이름.title[0].plain_text}
                    </li>
                    <li className="date">
                      {item.properties.date.date.start.slice(2)}
                      &nbsp;~&nbsp;
                      {item.properties.date.date.end.slice(2)}
                    </li>
                    <li className="tag">
                      <p className={item.properties.tag.multi_select[0].color}>
                        {item.properties.tag.multi_select[0].name}
                      </p>
                    </li>
                  </ol>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Frontend;

export const getStaticProps: GetStaticProps<Iprops> = async () => {
  // 전달받은 데이터
  const resultData = await postData();
  return {
    props: {
      resultData,
    },
    // 5초 대기 후 다시 HTML 생성
    revalidate: 5,
  };
};
