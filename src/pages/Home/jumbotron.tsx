import React from 'react';
import Sections from './components/Sections';
import { BasicButton } from 'components/button';

import { svg } from 'assets';
import { useNavigate } from 'react-router-dom';

const Component: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Sections
        style={{
          backgroundImage: `url(${svg.bg})`,
          backgroundSize: 'cover',
          height: '800px',
          backgroundAttachment: 'fixed',
          '@media (max-width: 1300px)': {
            height: '600px',
          },
        }}
        classNames="bg-fixed"
      >
        <div className="flex flex-col items-center justify-center text-white text-center space-y-7">
          <div className="font-bold text-[30px] lg:text-[68px] w-[70%] lg:w-[55%] lg:leading-[82px]">
            Awesome App For Saving Time.
          </div>
          <div className="lg:w-[40%] text-center">
            We bring you a mobile app for banking problems that often waste much
            of your time.
          </div>
          <BasicButton
            variant="contained"
            color="secondary"
            onClick={() => navigate('/register')}
          >
            Try It Free
          </BasicButton>
        </div>
      </Sections>
    </div>
  );
};

export default Component;
