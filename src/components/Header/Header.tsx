import React, { FC } from 'react';
import Logo from '../Logo/Logo';
import { Navigator } from '../Navigator/Navigator';
import { NavLinks } from '../../library/NavLinks';



interface Props {

}

export const Header: FC<Props> = ({ }) => {
  return (
    <div className='header'>
      <div>
        <Logo width={100} height={100} />
      </div>
      <div>
        <Navigator navItems={NavLinks} />
      </div>
    </div>
  );
};

