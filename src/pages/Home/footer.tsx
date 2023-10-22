import React from 'react';
import Sections from './components/Sections';

const Component: React.FC = () => {
  return (
    <Sections
      backgroundColor="#6379F4"
      classNames="text-[#ffffff] flex-col gap-2 py-7 px-9"
    >
      <b className="text-[36px]">Zwallet</b>
      <div className="lg:w-[23%]">
        Simplify financial needs and saving much time in banking needs with one
        single app.
      </div>
      <div className="lg:flex justify-between border-t-2 mt-3 py-3">
        <div>2020 Zwallet. All right reserved.</div>
        <div className="lg:flex gap-3">
          <div>+62 5637 8882 9901</div>
          <div>contact@zwallet.com</div>
        </div>
      </div>
    </Sections>
  );
};

export default Component;
