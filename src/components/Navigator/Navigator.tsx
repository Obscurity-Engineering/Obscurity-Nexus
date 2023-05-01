import React, { FC } from 'react';
import { NavItem } from '../NavItem/NavItem';


interface Props {
  navItems: Record<string, {
    text: string,
    href: string,
    active: boolean
  }>
}

export const Navigator: FC<Props> = ({ navItems }) => {
  return (
    <nav className="navigator">
      <ul className="nav__list">
        {Object.values(navItems).map((navItem, index) => (
          <li key={index}>
            <NavItem key={index} text={navItem.text} href={navItem.href} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

