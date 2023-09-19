import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex items-center w-full h-full">
      <div className="flex items-center justify-between w-full">
        <div className="left">
          <div>
            <h2 className="text-4xl mb-5 font-black">
              반갑습니다!
              <br />
              성장하는 프론트엔드 김아영입니다.
            </h2>
            <p>
              제자리에서 머물지 않고, <br />
              항상 성장하고 나아가는 개발자가 되고자 합니다.
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
      </div>
    </div>
  );
}
