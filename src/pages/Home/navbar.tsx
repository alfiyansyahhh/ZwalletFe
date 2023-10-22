import React from 'react';
import Sections from './components/Sections';
import { BasicButton } from 'components/button';
import { useNavigate } from 'react-router-dom';

const Component: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Sections
      backgroundColor="#6379F4"
      classNames="justify-between item-center py-7 px-12"
    >
      <div className="font-bold text-white text-[29px]">Zwallet</div>

      <div className="flex gap-4">
        <BasicButton
          variant="outlined"
          color="secondary"
          onClick={() => navigate('/login')}
        >
          Login
        </BasicButton>
        <BasicButton color="secondary" onClick={() => navigate('/register')}>
          Sign Up
        </BasicButton>
      </div>
    </Sections>
  );
};

export default Component;
