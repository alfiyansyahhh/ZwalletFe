import React from 'react';

interface ISectionsAuth {
  children: React.ReactNode;
  judul: string;
  keterangan: string;
}

const Component: React.FC<ISectionsAuth> = ({
  children,
  judul,
  keterangan,
}) => {
  return (
    <div className="grid gap-4 w-full lg:w-[510px] mx-auto">
      <b className="text-[24px]">{judul}</b>
      <div className="text-[16px]">{keterangan}</div>
      <div className="my-10">{children}</div>
    </div>
  );
};

export default Component;
