import type {FC, ReactNode} from 'react';

import clsx from 'clsx';

interface ListItemIconProps {
  children?: ReactNode;
  className?: string;
}

export const ListItemIcon: FC<ListItemIconProps> = ({children, className}) => {
  return <div className={clsx(className, 'pr-6')}>{children}</div>;
};
