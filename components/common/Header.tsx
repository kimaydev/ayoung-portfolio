import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Link href="/">
          <Image
            src="https://via.placeholder.com/100x30"
            alt="로고"
            width={100}
            height={30}
          />
        </Link>
      </h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/portfolio/frontend">Front-end Portfolio</Link>
        </li>
        <li>
          <Link href="/portfolio/publishing">Publishing Portfolio</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
