import React from 'react';
import { ads } from 'assets';

const Component: React.FC = () => {
  return (
    <div className="flex justify-center w-full bg-gray-100 py-5 overflow-auto">
      <div className="flex w-[70%] justify-around">
        {Object.values(ads).map((logo, index) => (
          <img
            key={index}
            src={logo}
            height={120}
            className="w-[80px] lg:w-[140px]"
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Component;
