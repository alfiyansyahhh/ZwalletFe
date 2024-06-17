import React from 'react';
import Sections from './components/Sections';
import { svg } from 'assets';

const Card = ({ index, name, text }) => {
  return (
    <div className="bg-white shadow-xl p-4 px-7 rounded-lg">
      <div className="font-bold">
        <b className="text-[#6379F4]">{index}.</b> {name}
      </div>
      <p>{text}</p>
    </div>
  );
};

const Component: React.FC = () => {
  return (
    <Sections backgroundColor="#473ad10f">
      <div className="hidden lg:block">
        <img src={svg.phone1} alt="" />
        <img src={svg.phone2} alt="" />
      </div>
      <div className="flex flex-col py-12 lg:py-0 px-12 gap-5 lg:w-[60%] justify-center">
        <div className="text-center lg:text-left text-[30px] lg:text-[60px] font-bold lg:w-[80%]">
          All The <b className="text-[#6379F4]">Great</b> Zwallet Features.
        </div>
        <Card
          index={1}
          name="Small Fee"
          text="We only charge 5% of every success transaction done in Zwallet app."
        />
        <Card
          index={2}
          name="Data Secured"
          text="All your data is secured properly in our system and it’s encrypted."
        />
        <Card
          index={3}
          name="User Friendly"
          text="Zwallet come up with modern and sleek design and not complicated."
        />
      </div>
    </Sections>
  );
};

export default Component;
