import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaReact } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';

export default function Home() {
  return (
    <>
      {/* 메인 */}
      <div className="main-section-wrap">
        <section className="main-section">
          <div className="left">
            <div className="mb-[10%]">
              <h2 className="text-4xl mb-5 font-black break-keep">
                반갑습니다!
                <br />
                프론트엔드 개발자 김아영입니다.
              </h2>
              <p className="break-keep">
                유연한 사고방식과 공정함으로 <br />
                팀원들과 어우러지는 사람이 되겠습니다.
              </p>
            </div>
          </div>
          <div className="right">
            <Image
              src="/img/main_img.png"
              alt="메인이미지"
              width={900}
              height={645}
              quality={100}
            />
          </div>
        </section>
      </div>
      {/* about */}
      <div className="about-section-wrap max-w-5xl">
        <section className="">
          <ul className="profile-wrap max-w-3xl">
            <li>
              <Image
                src="/img/notion.png"
                alt="김아영"
                width={250}
                height={250}
                quality={100}
                className="lm:w-[180px]"
              />
            </li>
            <li className="w-[400px] sm:w-full sm:text-center">
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
                <li className="flex items-center gap-x-0.5 sm:justify-center">
                  <Link
                    href="https://github.com/kimaydev"
                    target="_blank"
                    className="link-button"
                  >
                    <i className="text-2xl leading-none">
                      <FaGithub />
                    </i>
                    <span>깃허브 보러가기</span>
                  </Link>
                  <Link
                    href="https://kimaydev.notion.site/FE-7a53f9f631f146c88c39413cd175a9d0?pvs=4"
                    target="_blank"
                    className="link-button"
                  >
                    <i className="text-2xl leading-none">
                      <SiNotion />
                    </i>
                    <span>노션 보러가기</span>
                  </Link>
                </li>
              </ol>
            </li>
          </ul>
        </section>
        {/* 경력사항 */}
        <section className="">
          <h3 className="about-section-title text-3xl font-bold mb-2.5 text-center">
            <i className="block text-[0.7em] leading-none">💼</i>
            Career
          </h3>
          <div className="flex gap-x-8 items-start justify-between lg:flex-wrap lg:gap-y-5">
            <ul className="text-lg w-1/2 lg:w-full">
              <li className="company-name">
                주식회사 11마리의낭만고양이 (2020. 08 ~ 2022. 12)
              </li>
              <li>
                <ol>
                  <li className="mb-1">웹 사업부 매니저</li>
                  <li className="ml-2 mb-0.5 text-base">· 웹 퍼블리싱</li>
                  <li className="ml-2 mb-0.5 text-base">
                    · 웹 UI/UX 기획 및 디자인
                  </li>
                </ol>
              </li>
            </ul>
            <ul className="text-lg w-1/2 lg:w-full">
              <li className="company-name">대륙산업 (2019. 04 ~ 2020. 01)</li>
              <li>
                <ol>
                  <li className="mb-1">디자인 부서 주임</li>
                  <li className="ml-2 mb-0.5 text-base">· 상세페이지 제작</li>
                  <li className="ml-2 mb-0.5 text-base">· 디자인 시안 교정</li>
                </ol>
              </li>
            </ul>
          </div>
        </section>
        {/* 협업 프로젝트 소개 */}
        <section className="">
          <h3 className="about-section-title text-3xl font-bold mb-2.5 text-center">
            <i className="block text-[0.7em] leading-none">👩‍👩‍👦‍👦</i>
            Collaborative Project
          </h3>
          <div>
            <ul>
              <li className="company-name">
                <h4 className="text-lg">
                  [KDT]기업 요구를 반영한 프로젝트 중심 프론트엔드 React(리액트)
                  개발자 양성 - 백엔드(Spring Boot) 협업 리액트 프로젝트
                </h4>
              </li>
              <li>
                {/* 1차 */}
                <ol className="project-list">
                  <li>
                    <h5 className="">
                      1차 백엔드(Spring 기반) 협업 React 팀 프로젝트
                      <span className="block text-lg font-bold">
                        <i className="text-[0.8em] align-[2px]">🌱</i>Grow Green
                      </span>
                    </h5>
                  </li>
                  <li className="flex items-center gap-x-0.5 mb-2.5">
                    <Link
                      href="https://github.com/kimaydev/growgreen"
                      target="_blank"
                      className="link-button"
                    >
                      <i className="text-2xl leading-none">
                        <FaGithub />
                      </i>
                      <span>깃허브 보러가기</span>
                    </Link>
                    <Link
                      href="https://kimaydev.notion.site/1-TodoList-Grow-Green-636f36c85f604fcc9d78693527240fd8?pvs=4"
                      target="_blank"
                      className="link-button"
                    >
                      <i className="text-2xl leading-none">
                        <SiNotion />
                      </i>
                      <span>노션 보러가기</span>
                    </Link>
                    <Link
                      href="https://web-growgreen-eg4e2alkkyf0ef.sel4.cloudtype.app/"
                      target="_blank"
                      className="link-button"
                    >
                      <i className="text-2xl leading-none">
                        <FaReact />
                      </i>
                      <span>사이트 보러가기</span>
                    </Link>
                  </li>
                  <li className="list-wrap">
                    <span>작업기간</span>
                    <p>2023.06.21 ~ 2023.07.13</p>
                  </li>
                  <li className="list-wrap">
                    <span>작업인원</span>
                    <p>
                      프론트엔드 : 2명
                      <br />
                      백엔드 : 3명
                    </p>
                  </li>
                  <li className="list-wrap">
                    <span>작업내용</span>
                    <p className="break-keep">
                      키우고 있는 식물을 업로드 하고 그 식물에 대한 투두 및
                      일기를 작성할 수 있는 어플로 다양한 연령대를 겨냥해
                      누구라도 사용이 쉬운 UI/UX를 지향하며, 나만의 식물
                      관리라는 분명한 목적 의식을 제공
                    </p>
                  </li>
                </ol>
                {/* 2차 */}
                <ol className="project-list">
                  <li>
                    <h5 className="">
                      2차 백엔드(Spring 기반) 협업 React 팀 프로젝트
                      <span className="block text-lg font-bold">
                        <i className="text-[0.8em] align-[2px]">🍷</i>Winey
                      </span>
                    </h5>
                  </li>
                  <li className="flex items-center gap-x-0.5 mb-2.5">
                    <Link
                      href="https://github.com/kimaydev/winey"
                      target="_blank"
                      className="link-button"
                    >
                      <i className="text-2xl leading-none">
                        <FaGithub />
                      </i>
                      <span>깃허브 보러가기</span>
                    </Link>
                    <Link
                      href="https://kimaydev.notion.site/2-3-Winey-120504f34f9447e1986c70406af35c81?pvs=4"
                      target="_blank"
                      className="link-button"
                    >
                      <i className="text-2xl leading-none">
                        <SiNotion />
                      </i>
                      <span>노션 보러가기</span>
                    </Link>
                    <Link
                      href="https://web-winey-react-iciy2almrfaqcz.sel5.cloudtype.app/"
                      target="_blank"
                      className="link-button"
                    >
                      <i className="text-2xl leading-none">
                        <FaReact />
                      </i>
                      <span>사이트 보러가기</span>
                    </Link>
                  </li>
                  <li className="list-wrap">
                    <span>작업기간</span>
                    <p>2023.07.13 ~ 2023.08.18</p>
                  </li>
                  <li className="list-wrap">
                    <span>작업인원</span>
                    <p>
                      프론트엔드 : 3명
                      <br />
                      백엔드 : 5명
                    </p>
                  </li>
                  <li className="list-wrap">
                    <span>작업내용</span>
                    <p className="break-keep">
                      와인 초보자에 포커스를 두고 구매자 취향에 따른 맞춤 추천과
                      페어링 음식 등을 제공하고 와인별 입문 난이도를 표기하여
                      진입장벽을 완화시킨 픽업 서비스 구상
                    </p>
                  </li>
                </ol>
                {/* 3차 */}
                <ol className="project-list">
                  <li>
                    <h5 className="">
                      3차 백엔드(Spring 기반) 협업 React 팀 프로젝트
                      <span className="block text-lg font-bold">
                        <i className="text-[0.8em] align-[2px]">🍷</i>Winey
                        Admin
                      </span>
                    </h5>
                  </li>
                  <li className="flex items-center gap-x-0.5 mb-2.5">
                    <Link
                      href="https://github.com/kimaydev/winey"
                      target="_blank"
                      className="link-button"
                    >
                      <i className="text-2xl leading-none">
                        <FaGithub />
                      </i>
                      <span>깃허브 보러가기</span>
                    </Link>
                    <Link
                      href="https://kimaydev.notion.site/2-3-Winey-120504f34f9447e1986c70406af35c81?pvs=4"
                      target="_blank"
                      className="link-button"
                    >
                      <i className="text-2xl leading-none">
                        <SiNotion />
                      </i>
                      <span>노션 보러가기</span>
                    </Link>
                    <Link
                      href="https://web-winey-react-iciy2almrfaqcz.sel5.cloudtype.app/admin"
                      target="_blank"
                      className="link-button"
                    >
                      <i className="text-2xl leading-none">
                        <FaReact />
                      </i>
                      <span>사이트 보러가기</span>
                    </Link>
                  </li>
                  <li className="list-wrap">
                    <span>작업기간</span>
                    <p>2023.08.21 ~ 2023.09.14</p>
                  </li>
                  <li className="list-wrap">
                    <span>작업인원</span>
                    <p>
                      프론트엔드 : 3명
                      <br />
                      백엔드 : 5명
                    </p>
                  </li>
                  <li className="list-wrap">
                    <span>작업내용</span>
                    <p className="break-keep">
                      타입스크립트를 이용한 관리자 페이지 작업 및 사용자 페이지
                      고도화 작업
                    </p>
                  </li>
                </ol>
              </li>
            </ul>
          </div>
        </section>
        {/* 자격증 및 학력 */}
        <section className="flex items-start justify-between gap-x-8 lm:flex-wrap lm:gap-y-5">
          <div className="w-1/2 lm:w-full">
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
          <div className="w-1/2 lm:w-full">
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
