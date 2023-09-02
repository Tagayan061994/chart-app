import clsx from 'clsx';
import type {FC} from 'react';

interface DividerProps {
  dark?: boolean;
}

export const Divider: FC<DividerProps> = ({dark}) => {
  return (
    <div
      className={clsx(
        'border-b-[1px]',
        dark ? 'border-light-blue' : 'border-light-blue opacity-20'
      )}
    ></div>
  );
};
