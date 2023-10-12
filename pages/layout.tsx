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
        <meta property="og:site_name" content="프론트엔드 김아영입니다." />
        <meta property="og:title" content="프론트엔드 김아영입니다." />
        <meta
          property="og:description"
          content="제자리에서 머물지 않고, 항상 성장하고 나아가는 프론트엔드 김아영 입니다 :-D"
        />
        {/* <meta property="og:url" content="" /> */}
        <meta property="og:image" content={'/img/portfolio_og_img.png'} />
        {/* favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/img/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/img/favicon/safari-pinned-tab.svg"
          color="#292929"
        />
        <meta name="msapplication-TileColor" content="#75e1c2" />
        <meta name="theme-color" content="#ffffff" />
        <title>프론트엔드 김아영입니다.</title>
      </Head>
      <Header />
      <main className="pt-16 pb-20 max-w-screen-3xl w-95per mx-auto">
        <div className="">{children}</div>
      </main>
      <Footer />
    </>
  );
}
