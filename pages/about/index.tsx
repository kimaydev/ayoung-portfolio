import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

const About = () => {
  return (
    <>
      {/* 타이틀 */}
      <div className="text-5xl mt-5 mb-10 font-black">
        <p className="text-[0.55em] font-bold mb-2">
          Hello World, I&apos;m{' '}
          <b className="font-bold text-sub-colorA">Ayoung-Kim!</b>
        </p>
        <h2>
          저는 <b className="">이런 사람</b>입니다!
        </h2>
      </div>
      {/* 내용 */}
      <div>
        <section className="mb-10">
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
                  <span className="block text-2xl font-bold">Name</span>
                  <p>김아영</p>
                </li>
                <li className="mb-4">
                  <span className="block text-2xl font-bold">Tel</span>
                  <p>
                    <Link href={'tel:010-5479-2193'}>010.5479.2193</Link>
                  </p>
                </li>
                <li className="mb-4">
                  <span className="block text-2xl font-bold">Email</span>
                  <p>kimaydev@gmail.com</p>
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
                  <Link href="mailto:kimaydev@gmail.com">
                    <i className="text-2xl leading-none">
                      <MdEmail />
                    </i>
                  </Link>
                </li>
              </ol>
            </li>
          </ul>
        </section>
        <section className="mb-10 text-center">
          <h3 className="about-section-title text-4xl font-bold mb-1.5">
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
        <section className="mb-10">
          <h3 className="about-section-title text-4xl font-bold mb-1.5 text-center">
            Collaborative Project
          </h3>
          <ul>
            <li>1차 백엔드(Spring 기반) 협업 React 팀 프로젝트</li>
            <li>2차 백엔드(Spring 기반) 협업 React 팀 프로젝트</li>
            <li>2차 백엔드(Spring 기반) 협업 React 팀 프로젝트</li>
          </ul>
        </section>
        <section className="flex items-start justify-between gap-x-5 mb-10">
          <div className="w-1/2">
            <h3 className="about-section-title text-4xl font-bold mb-1.5">
              License
            </h3>
            <ul>
              <li>웹디자인 기능사 (2020. 09)</li>
              <li>GTQ 인디자인 1급 (2019. 02)</li>
              <li>GTQ 일러스트 1급 (2019. 01)</li>
              <li>GTQ그래픽기술자격 1급 (2018. 12)</li>
              <li>2종보통운전면허 (2023. 03)</li>
            </ul>
          </div>
          <div className="w-1/2">
            <h3 className="about-section-title text-4xl font-bold mb-1.5">
              Profile
            </h3>
            <ul>
              <li>공주대학교 만화애니메이션 학부 졸업</li>
              <li>울산 대송고등학교 졸업</li>
              <li>1992. 05. 19 출생</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
