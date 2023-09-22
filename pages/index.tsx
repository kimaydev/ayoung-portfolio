import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';

export default function Home() {
  return (
    <>
      {/* 메인 */}
      <div className="main-section-wrap flex items-center w-full h-full">
        <section className="flex items-center justify-between w-full">
          <div className="left">
            <div>
              <h2 className="text-4xl mb-5 font-black">
                반갑습니다!
                <br />
                프론트엔드 개발자 김아영입니다.
              </h2>
              <p>
                유연한 사고방식과 공정함으로 <br />
                팀원들과 어우러지는 사람이 되겠습니다.
              </p>
            </div>
            <Link href="/">Portfolio</Link>
          </div>
          <div className="right">
            <Image
              src="https://via.placeholder.com/400x500"
              alt="메인이미지"
              width={400}
              height={500}
            />
          </div>
        </section>
      </div>
      {/* about */}
      <div className="about-section-wrap max-w-screen-lg mx-auto">
        <section className="">
          <ul className="flex items-center justify-between max-w-3xl w-full mx-auto">
            <li>
              <Image
                src="https://via.placeholder.com/300"
                alt="김아영"
                width={300}
                height={300}
              />
            </li>
            <li className="w-[400px]">
              <ol>
                <li className="mb-4">
                  <span className="block text-2xl font-bold">
                    Name<b className="text-sub-colorA">.</b>
                  </span>
                  <p>김아영</p>
                </li>
                <li className="mb-4">
                  <span className="block text-2xl font-bold">
                    Tel<b className="text-sub-colorA">.</b>
                  </span>
                  <p>
                    <Link href="tel:010-5479-2193" className="hover:underline">
                      010.5479.2193
                    </Link>
                  </p>
                </li>
                <li className="mb-4">
                  <span className="block text-2xl font-bold">
                    Email<b className="text-sub-colorA">.</b>
                  </span>
                  <Link
                    href="mailto:kimaydev@gmail.com"
                    className="hover:underline"
                  >
                    kimaydev@gmail.com
                  </Link>
                </li>
                <li className="flex items-center gap-x-2.5">
                  <Link href="https://github.com/kimaydev" target="_blank">
                    <i className="text-2xl leading-none">
                      <FaGithub />
                    </i>
                  </Link>
                  <Link
                    href="https://kimaydev.notion.site/FE-7a53f9f631f146c88c39413cd175a9d0?pvs=4"
                    target="_blank"
                  >
                    <i className="text-2xl leading-none">
                      <SiNotion />
                    </i>
                  </Link>
                </li>
              </ol>
            </li>
          </ul>
        </section>
        <section className="text-center">
          <h3 className="about-section-title text-3xl font-bold mb-2.5">
            <i className="block text-[0.7em] leading-none">💼</i>
            Career
          </h3>
          <ul className="text-lg">
            <li className="font-bold">
              주식회사 11마리의낭만고양이 (2020. 08 ~ 2022. 12)
            </li>
            <li>
              <ol>
                <li>웹 사업부 매니저</li>
                <li className="text-base">웹 UI/UX 기획 및 디자인</li>
                <li className="text-base">웹 퍼블리싱</li>
              </ol>
            </li>
          </ul>
          <ul className="text-lg">
            <li className="font-bold">대륙산업 (2019. 04 ~ 2020. 01)</li>
            <li>
              <ol>
                <li>디자인 부서 주임</li>
                <li className="text-base">상세페이지 제작</li>
                <li className="text-base">디자인 시안 교정</li>
              </ol>
            </li>
          </ul>
        </section>
        <section className="">
          <h3 className="about-section-title text-3xl font-bold mb-2.5 text-center">
            <i className="block text-[0.7em] leading-none">👩‍👩‍👦‍👦</i>
            Collaborative Project
          </h3>
          <ul>
            <li>1차 백엔드(Spring 기반) 협업 React 팀 프로젝트</li>
            <li>2차 백엔드(Spring 기반) 협업 React 팀 프로젝트</li>
            <li>2차 백엔드(Spring 기반) 협업 React 팀 프로젝트</li>
          </ul>
        </section>
        <section className="flex items-start justify-between gap-x-8">
          <div className="w-1/2">
            <h3 className="text-3xl font-bold mb-1.5">
              <i className="text-[0.7em] leading-none align-[3px]">💳</i>
              License<b className="text-sub-colorA">.</b>
            </h3>
            <ul className="about-section-list">
              <li>웹디자인 기능사 (2020. 09)</li>
              <li>GTQ 인디자인 1급 (2019. 02)</li>
              <li>GTQ 일러스트 1급 (2019. 01)</li>
              <li>GTQ그래픽기술자격 1급 (2018. 12)</li>
              <li>2종보통운전면허 (2023. 03)</li>
            </ul>
          </div>
          <div className="w-1/2">
            <h3 className="text-3xl font-bold mb-1.5">
              <i className="text-[0.7em] leading-none align-[3px]">📝</i>
              Profile<b className="text-sub-colorA">.</b>
            </h3>
            <ul className="about-section-list">
              <li>공주대학교 만화애니메이션 학부 졸업</li>
              <li>울산 대송고등학교 졸업</li>
              <li>1992. 05. 19 출생</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
