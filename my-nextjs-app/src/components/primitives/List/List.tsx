import type {FC, ReactNode} from 'react';

import clsx from 'clsx';

interface ListProps {
  children?: ReactNode;
  className?: string;
}

export const List: FC<ListProps> = ({children, className}) => {
  return <ul className={clsx(className)}>{children}</ul>;
};
