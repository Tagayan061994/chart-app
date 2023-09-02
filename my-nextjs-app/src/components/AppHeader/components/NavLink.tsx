import type {FC, ReactNode, MouseEvent} from 'react';

import clsx from 'clsx';
import {useRouter} from 'next/router';

interface NavLinkProps {
  children?: ReactNode;
  to: string;
  width?: number;
}

const NavLink: FC<NavLinkProps> = ({children, to, width}) => {
  const {push} = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    push(to);
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={clsx(
        'inline-flex align-middle py-3',
        'text-base text-secondary hover:font-bold',
        'transition-all ease-in duration-100'
      )}
      style={{
        width,
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </a>
  );
};

export default NavLink;
