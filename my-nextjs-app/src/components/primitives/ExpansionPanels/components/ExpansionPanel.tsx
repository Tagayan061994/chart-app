import type {FC, ReactNode} from 'react';

import clsx from 'clsx';

interface ExpansionPanelProps {
  children?: ReactNode;
  className?: string;
}

export const ExpansionPanel: FC<ExpansionPanelProps> = ({
  children,
  className,
}) => {
  return (
    <div
      aria-expanded="false"
      className={clsx(
        className,
        'relative flex-[1_0_100%] max-w-full h-[70px] bg-white',
        'cursor-auto rounded-lg shadow-[0_0_10px_#54658e1a]',
        'transition-all duration-300'
      )}
    >
      {children}
    </div>
  );
};
