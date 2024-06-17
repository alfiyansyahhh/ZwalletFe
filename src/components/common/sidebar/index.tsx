import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import appRoutes from 'routes/appRoutes';
import _ from 'lodash';
import DomainAddRoundedIcon from '@mui/icons-material/DomainAddRounded';
import { ListItem } from '@mui/material';

import { Link } from 'react-router-dom';
import { useState } from 'react';
const Sidebar = (props) => {
  let { isMouseOver, setIsMouseOver, sethide, hide, setopen } = props;
  const [isActive, setisActive] = useState('');

  return (
    <div className="relative justify-center px-2 items-center flex flex-col">
      <div
        className={` ${
          isMouseOver ? 'absolute' : 'hidden'
        } bg-white border cursor-pointer border-[#6379F4] text-[#6379F4] rounded-full w-[27px] h-[25px] flex items-center  -right-3 top-24`}
        onClick={() => {
          setIsMouseOver(false);
          sethide(!hide);
          setopen(false);
        }}
      >
        {hide ? <NavigateNextRoundedIcon /> : <NavigateBeforeRoundedIcon />}
      </div>

      <div className="text-white text-[29px] font-bold text-center p-[1.3pc]">
        {!isMouseOver && hide ? 'z' : 'Zwallet'}
      </div>

      {(!hide || isMouseOver) && (
        <div
          className={`bg-[#97a5f1c4] flex justify-between items-center text-[#f7f3f3] ${
            !isMouseOver && hide ? ' p-2' : 'p-4'
          } rounded-lg w-[90%] truncate`}
        >
          <div>
            <p>Total Cash</p>
            <div className=" font-bold text-lg items-center">
              Rp. 10.000.000
            </div>
          </div>
          <DomainAddRoundedIcon fontSize="large" />
        </div>
      )}

      <br />

      {appRoutes.map((e) => {
        return (
          (!hide || isMouseOver) &&
          e?.sidebarProps && (
            <>
              <ListItem
                component={Link}
                to={e.path}
                sx={{ display: 'flex' }}
                onClick={() => setisActive(e.state)}
              >
                <div
                  className={` ${
                    isActive === e.state
                      ? 'text-[#6379F4] bg-[#ffffffc4]'
                      : 'text-white'
                  }  hover:bg-[#ffffffc4] hover:px-5 hover:text-[#6379F4] px-3  text-[18px] cursor-pointer w-full p-2 rounded-md`}
                >
                  <div className="flex gap-3 ">
                    {e?.sidebarProps?.icon}
                    <div className=" w-[100%]">
                      {e?.sidebarProps?.displayText}
                    </div>
                  </div>
                </div>
              </ListItem>
            </>
          )
        );
      })}
    </div>
  );
};

export default Sidebar;
