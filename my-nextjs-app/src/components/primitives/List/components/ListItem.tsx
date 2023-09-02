import type {FC, ReactNode} from 'react';

import clsx from 'clsx';
import Link from 'next/link';

interface ListItemProps {
  children?: ReactNode;
  className?: string;
  dense?: boolean;
  to?: string;
  onClick?: () => void;
}

export const ListItem: FC<ListItemProps> = ({
  children,
  className,
  dense,
  to,
  onClick,
}) => {
  const clickable = !!(to || onClick);

  return (
    <li
      className={clsx(
        className,
        'flex flex-nowrap items-center text-secondary',
        'transition-all ease-in duration-100',
        dense ? 'text-sm' : 'text-base',
        !to && !dense && 'py-6',
        !to && dense && 'py-4',
        clickable && 'cursor-pointer hover:font-bold'
      )}
      onClick={onClick}
    >
      {to ? (
        <Link
          className={clsx(dense ? 'py-4' : 'py-6', 'grow text-center')}
          href={to}
        >
          {children}
        </Link>
      ) : (
        children
      )}
    </li>
  );
};
