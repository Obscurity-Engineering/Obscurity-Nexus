
import React, { FC } from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';

interface Props {
    text: string,
    href: string,
}

export const NavButton: FC<Props> = ({ text, href }) => {
    const router = useRouter();

    return (
        <Link className={`nav__item ${router.asPath === href ? 'nav__item--active' : ''}`} href={href}>
                {text}
        </Link>
    );
};


