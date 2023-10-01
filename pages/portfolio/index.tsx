import React from 'react';
import { postData } from '@/lib/patchData';
import ListItem from '@/components/portfolio/ListItem';

export interface resultType {
  resultId: string;
  resultThum: string;
}

const Frontend = ({ resultId, resultThum }: resultType) => {
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
  // 전달받은 데이터
  const resultData = await postData();
  // id
  const resultId = resultData.results.map((item: any) => item.id);
  // 노션 상세페이지 주소
  const resultUrl = resultData.results.map((item: any) => item.public_url);
  // properties (화면에 출력할 값)
  const properties = resultData.results.map((item: any) => item.properties);
  // 썸네일 이미지
  const resultThum = properties.map((item: any) => item.thum.files[0].file.url);
  // 프로젝트 기간
  const resultDate = properties.map((item: any) => item.date);
  // 타이틀
  const resultTitle = properties.map(
    (item: any) => item.이름.title[0].plain_text,
  );

  // console.log(`결과 출력 ${resultUrl}`);

  return { props: { resultId } };
};
