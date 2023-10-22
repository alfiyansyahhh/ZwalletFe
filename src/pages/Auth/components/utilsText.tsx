import React from 'react';
import { useNavigate } from 'react-router-dom';

interface IUtilsText {
  text: string;
  buttonName: string;
  to: string;
}

const Component: React.FC<IUtilsText> = ({ text, buttonName, to }) => {
  const Navigate = useNavigate();
  return (
    <div className="mt-2 text-center">
      {text}{' '}
      <b className="text-[#6379F4] cursor-pointer" onClick={() => Navigate(to)}>
        {buttonName}
      </b>
    </div>
  );
};

export default Component;
