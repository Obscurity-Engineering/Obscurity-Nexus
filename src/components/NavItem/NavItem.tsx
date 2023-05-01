import React, { FC } from 'react';
import Link from "next/link";

interface Props {
    text: string,
    href: string,
}

export const NavItem: FC<Props> = ({ text, href }) => {
    return (
        <Link className='nav__item' href={href}>
                {text}
        </Link>
    );
};


