import React, { FC } from 'react';
import Link from "next/link";

interface Props {
    text: string,
    href: string,
}

const NavItem: FC<Props> = ({ text, href }) => {
    return (
        <Link href={href}>
                {text}
        </Link>
    );
};

NavItem.defaultProps = {
    text: 'Link',
    href: 'http://localhost:3000/',
}

export default NavItem;

