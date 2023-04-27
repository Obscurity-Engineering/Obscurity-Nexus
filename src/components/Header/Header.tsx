import React, { FC } from 'react';
import Logo from '../Logo/Logo';
import Navigator from '../Navigator/Navigator';
import nav_links from './nav_links.json'


interface Props {

}

// TODO: Design a logo. The current one is a placeholder.

const Header: FC<Props> = ({}) => {
  return (
    <div>
         <Logo  width={100} height={100} />
         <Navigator navItems = {nav_links}/>
    </div>
  );
};

export default Header;