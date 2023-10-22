import React from 'react';
import Sections from './components/Sections';
import { ads } from 'assets';

const Component: React.FC = () => {
  return (
    <Sections backgroundColor="#473ad10f" height="100%">
      <div className="flex justify-around lg:w-4/5 overflow-auto">
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
    </Sections>
  );
};

export default Component;
