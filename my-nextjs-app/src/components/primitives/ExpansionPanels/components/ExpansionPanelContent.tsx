import type {FC, ReactNode} from 'react';

import clsx from 'clsx';

interface ExpansionPanelContentProps {
  children?: ReactNode;
  className?: string;
}

export const ExpansionPanelContent: FC<ExpansionPanelContentProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clsx(className, 'expansion-panel-content bg-white')}
      style={{display: 'none'}}
    >
      <div className="max-w-full flex-auto pt-4 px-8 pb-10">{children}</div>
    </div>
  );
};
