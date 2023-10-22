import React from 'react';
import Sections from './components/Sections';
import { svg } from 'assets';

const Card = ({ icon, name, keterangan }) => {
  return (
    <div
      className="min-w-[250px] lg:w-[367px] h-[344px] rounded-[20px] items-center justify-center flex flex-col gap-3 p-5 lg:p-10 mx-auto"
      style={{ boxShadow: '0px 1px 25px rgba(197, 195, 195, 0.664)' }}
    >
      <img src={icon} alt="iconcard" />
      <b>{name}</b>
      <div className="text-[14px]">{keterangan}</div>
    </div>
  );
};

const Component: React.FC = () => {
  return (
    <Sections classNames="flex justify-center text-center flex-col py-[70px]">
      <div className="text-[30px] lg:text-[60px] font-bold">
        <b className="text-[#6379F4]">About</b> The Application.
      </div>
      <div className="w-[80%] lg:w-[40%] mx-auto">
        We have some great features from the application and it’s totally free
        to use by all users around the world.
      </div>
      {/* <div className="overflow-scroll w-[400px] bg-red-900 flex"> */}
      <div className="mt-14 flex overflow-x-auto">
        <div className="w-[300px] lg:w-full flex items-center space-x-4 p-4">
          <Card
            icon={svg.call}
            name="24/7 Support"
            keterangan="We have 24/7 contact support so you can contact us whenever you want and we will respond it."
          />
          <Card
            icon={svg.lock}
            name="Data Privacy"
            keterangan="We make sure your data is safe in our database and we will encrypt any data you submitted to us."
          />
          <Card
            icon={svg.download}
            name="Easy Download"
            keterangan="Zwallet is 100% totally free to use it’s now available on Google Play Store and App Store."
          />
        </div>
      </div>

      {/* </div> */}
    </Sections>
  );
};

export default Component;
