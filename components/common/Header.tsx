import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="header fixed top-0 left-0 z-999 w-full h-16">
      <div className="flex items-center justify-between max-w-screen-3xl w-95per h-full mx-auto">
        <h1>
          <Link href="/">
            <Image
              src="https://via.placeholder.com/150x50"
              alt="로고"
              width={150}
              height={50}
            />
          </Link>
        </h1>
        <nav className="nav">
          <ul className="flex items-center gap-x-2.5">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/portfolio/frontend">Portfolio</Link>
            </li>
            {/* <li>
              <Link href="/portfolio/publishing">Publishing Portfolio</Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
