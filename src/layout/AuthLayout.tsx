import React, { ReactNode } from 'react';
import Radium from 'radium';
import { svg } from 'assets';
import { useNavigate } from 'react-router-dom';

interface IAuthLayout {
  children: ReactNode;
}

const styl = {
  backgroundImage: `url(${svg.bg})`,
  backgroundSize: 'cover',
};

const Component: React.FC<IAuthLayout> = ({ children }) => {
  let navigate = useNavigate();
  return (
    <Radium.StyleRoot>
      <div className="flex h-[100vh]">
        <div
          style={styl}
          className="w-[50%] items-center  justify-center text-white hidden lg:grid"
        >
          <b
            className="text-[29px] w-[70%] mx-auto cursor-pointer"
            onClick={() => navigate('/')}
          >
            Zwallet
          </b>
          <img src={svg.phoneAuth} alt="" className="w-[50%] mx-auto" />
          <div className="w-[70%] mx-auto ">
            <b className="text-[24px]">App that Covering Banking Needs.</b>
            <p>
              Zwallet is an application that focussing in banking needs for all
              users in the world. Always updated and always following world
              trends. 5000+ users registered in Zwallet everyday with worldwide
              users coverage.
            </p>
          </div>
        </div>
        <div className=" lg:w-[50%] mx-auto p-14 grid items-center overflow-auto">
          {children}
        </div>
      </div>
    </Radium.StyleRoot>
  );
};

export default Component;
