import React, { FC } from 'react';
import NavItem from '../NavItem/NavItem';


interface Props {
  navItems: { text: string, href: string }[],
}

const Navigator: FC<Props> = ({ navItems }) => {
  return (
    <nav className="navigator">
      <ul className="nav__list">
        {navItems.map((navItem, index) => (
          <NavItem key={index} text={navItem.text} href={navItem.href} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigator;