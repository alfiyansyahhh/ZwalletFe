import React from 'react';
import { Outlet } from 'react-router-dom';

const Component: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Component;
