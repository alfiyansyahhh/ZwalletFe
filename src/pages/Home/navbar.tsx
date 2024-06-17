import React, { useEffect, useState } from 'react';
import Sections from './components/Sections';
import { BasicButton } from 'components/button';
import { useNavigate } from 'react-router-dom';

const Component: React.FC = () => {
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // CSS untuk membuat komponen tetap di atas
  const sectionStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: 'full',
    backgroundColor: isScrolled ? '#6379F4' : 'transparent',
    padding: '15px',
    zIndex: 999,
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <Sections style={sectionStyle} classNames="justify-between">
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
