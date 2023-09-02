import type {FC, ReactNode} from 'react';

import clsx from 'clsx';

interface ListItemTitleProps {
  children?: ReactNode;
  className?: string;
}

export const ListItemTitle: FC<ListItemTitleProps> = ({
  children,
  className,
}) => {
  return (
    <div className={clsx(className, 'flex flex-wrap grow justify-between')}>
      {children}
    </div>
  );
};
