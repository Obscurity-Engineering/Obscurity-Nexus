import React, { FC } from 'react';
import { NavButton } from '../NavButton/NavButton';


interface Props {
  navLinks: Record<string, {
    text: string,
    href: string,
  }>
}

export const Navigator: FC<Props> = ({ navLinks }) => {


  return (
    <nav className="navigator">
      <ul className="navigator__list">
        {Object.values(navLinks).map((navLink, index) => (
          <li key={index}>
            <NavButton key={index} text={navLink.text} href={navLink.href} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

