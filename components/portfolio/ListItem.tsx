import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ListItem = () => {
  return (
    <ul>
      {/* <li>테스트 : {result}</li> */}
      {/* {Array(14)
        .fill(0)
        .map((item, index) => (
          <li key={index}>
            <Link href="/">
              <div className="img-box">
                <Image
                  src="https://via.placeholder.com/300x200"
                  alt="포트폴리오썸네일"
                  width={300}
                  height={200}
                />
              </div>
              <div className="txt-box">
                <ol>
                  <li>포트폴리오 타이틀 들어가는 영역</li>
                  <li>날짜</li>
                  <li>했던 일</li>
                </ol>
              </div>
            </Link>
          </li>
        ))} */}
    </ul>
  );
};

export default ListItem;
