import React from 'react';
import Radium from 'radium';

interface ISections {
  backgroundColor?: string;
  height?: string;
  children: React.ReactNode;
  style?: object;
  classNames?: string;
}

const Component: React.FC<ISections> = ({
  backgroundColor,
  height,
  children,
  style,
  classNames,
}) => {
  console.log(backgroundColor);
  return (
    <Radium.StyleRoot>
      <div
        className={`flex justify-center w-full bg-[${backgroundColor}] `}
        style={style}
      >
        <div
          className={`p-2 w-[1200px] h-[${height}] flex justify-center ${classNames}`}
        >
          {children}
        </div>
      </div>
    </Radium.StyleRoot>
  );
};

export default Component;
