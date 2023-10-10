import React from 'react';
import { FaRegSadTear } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="notfound-section-wrap">
      <section>
        <div>
          <i>
            <FaRegSadTear />
          </i>
          <h2>404 Not Found...</h2>
          <p>페이지가 존재하지 않습니다.</p>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
