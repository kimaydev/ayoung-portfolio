import React from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="footer fixed bottom-0 left-0 z-999 w-full">
      <div className="max-w-screen-3xl w-95per mx-auto py-3.5">
        <ul className="flex items-center justify-between text-sm">
          <li>
            <p>Copyright 2023. AYOUNG-KIM. All rights reserved.</p>
          </li>
          <li>
            <ol className="flex items-center justify-between gap-x-2.5">
              <li>
                <Link href="https://github.com/kimaydev" target="_blank">
                  <i className="text-xl leading-none">
                    <FaGithub />
                  </i>
                </Link>
              </li>
              <li>
                <Link
                  href="https://kimaydev.notion.site/FE-7a53f9f631f146c88c39413cd175a9d0?pvs=4"
                  target="_blank"
                >
                  <i className="text-xl leading-none">
                    <SiNotion />
                  </i>
                </Link>
              </li>
              <li>
                <Link href="mailto:kimaydev@gmail.com">
                  <i className="text-xl leading-none">
                    <MdEmail />
                  </i>
                </Link>
              </li>
            </ol>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
