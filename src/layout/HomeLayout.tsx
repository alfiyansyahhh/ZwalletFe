import React from 'react';

interface IHomeLayout {
  children: React.ReactNode;
}

const Component: React.FC<IHomeLayout> = ({ children }) => {
  return <div className="bg-red-900">{children}</div>;
};

export default Component;
