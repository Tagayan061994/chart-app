import {FC, ReactNode, MouseEvent} from 'react';
import {useRouter} from 'next/router';

interface NavLinkProps {
  children?: ReactNode;
  to: string;
  width?: number;
}

const NavLink: FC<NavLinkProps> = ({children, to, width}) => {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(to);
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className="inline-flex text-light-green text-base"
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
