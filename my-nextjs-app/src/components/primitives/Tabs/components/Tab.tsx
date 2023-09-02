import type {FC, ReactNode} from 'react';
import clsx from 'clsx';

interface TabProps {
  children?: ReactNode;
  className?: string;
  value?: string | number;
  onClick?: () => void;
}

export const Tab: FC<TabProps> = ({children, className, value, onClick}) => {
  return (
    <button
      value={value}
      role="tab"
      aria-selected="false"
      tabIndex={0}
      className={clsx(
        className,
        'tab',
        'grow cursor-pointer pb-4',
        'border-b-[1px] border-b-[#b2dfdb66]'
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
