import React, { FC } from 'react';
import Image from 'next/image';

interface Props {
  width: number;
  height: number;
}

// TODO: Design a logo. The current one is a placeholder.

export const Logo: FC<Props> = ({ width, height }) => {
  return (
    <div className='logo'>
      <Image src="/logo.svg" alt="Logo" width={width} height={height} />
    </div>
  );
};

export default Logo;