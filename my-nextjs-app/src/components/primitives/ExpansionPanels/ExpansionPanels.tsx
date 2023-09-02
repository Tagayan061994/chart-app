import {FC, ReactNode, useEffect} from 'react';

import clsx from 'clsx';

interface ExpansionPanelsProps {
  children?: ReactNode;
  className?: string;
}

export const ExpansionPanels: FC<ExpansionPanelsProps> = ({
  children,
  className,
}) => {
  return (
    <div
      id="exp"
      className={clsx(
        className,
        'relative max-w-full w-full',
        'flex flex-wrap justify-center gap-y-4 content-start'
      )}
    >
      {children}
    </div>
  );
};
