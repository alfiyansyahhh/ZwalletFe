import Sidebar from 'components/common/sidebar';
import TopBar from 'components/common/topbar';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  const [hide, sethide] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [open, setopen] = useState(false);

  return (
    <div className=" h-[100vh]">
      <div className="bg-gray-100 relative flex h-[100vh]">
        <div
          className={`bg-[#6379F4]  ${hide ? 'w-[3pc]' : 'w-[450px]'} ${
            open && 'absolute w-[330px]'
          } h-[100vh]`}
          onMouseEnter={() => {
            setIsMouseOver(true);
            hide && setopen(true);
          }}
          onMouseLeave={() => {
            setIsMouseOver(false);
            hide && setopen(false);
          }}
        >
          <Sidebar
            {...{ isMouseOver, setIsMouseOver, hide, sethide, setopen }}
          />
        </div>
        <div className="w-full">
          <div className="bg-white p-[1.3pc]">
            <TopBar />
          </div>
          <div className="p-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
