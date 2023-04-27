import React, { FC } from 'react';
import Image from 'next/image';

interface Props {
  width: number;
  height: number;
}

// TODO: Design a logo. The current one is a placeholder.

const Logo: FC<Props> = ({ width, height }) => {
  return (
    <div>
      <Image src="/logo.svg" alt="Logo" width={width} height={height} />
    </div>
  );
};

export default Logo;