import React from 'react';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Head from 'next/head';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <meta name="format-detection" content="telephone=no" />
        <meta
          name="description"
          content="제자리에서 머물지 않고, 항상 성장하고 나아가는 프론트엔드 김아영 입니다 :-D"
        />
        <meta
          name="keywords"
          content="웹 퍼블리셔, 프론트엔드, 웹 개발자, 웹 퍼블리셔 포트폴리오, 프론트엔드 포트폴리오, 웹 개발자 포트폴리오, "
        />
        {/* <link rel="canonical" href="" /> */}
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="프론트엔드 김아영" />
        <meta property="og:title" content="프론트엔드 김아영" />
        <meta
          property="og:description"
          content="제자리에서 머물지 않고, 항상 성장하고 나아가는 프론트엔드 김아영 입니다 :-D"
        />
        {/* <meta property="og:url" content="" /> */}
        {/* <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/images/og_img.jpg`}
        /> */}
        <title>프론트엔드 김아영</title>
      </Head>
      <Header />
      <main className="bg-white max-w-screen-3xl w-95per h-5/6 rounded-3xl p-5">
        <div className="w-full h-full overflow-y-auto">{children}</div>
      </main>
      <Footer />
    </>
  );
}
