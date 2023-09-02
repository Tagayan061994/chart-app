import type {FC} from 'react';
import clsx from 'clsx';

import {Icon} from '@/components/primitives';

interface Item {
  text: string;
  icon: string;
  value: string;
}

interface TabProps {
  item: Item;
  onClick: Function;
  selected?: string | null;
}

const Tab: FC<TabProps> = ({item, selected, onClick}) => {
  const {text, icon, value} = item;

  return (
    <button
      type="button"
      className={clsx(
        value === selected
          ? 'bg-secondary text-white text-sm font-bold'
          : 'bg-white text-light-blue  text-sm font-normal',
        'py-2 px-4 w-1/4',
        'flex flex-[1_0_auto] justify-center items-center',
        'last:rounded-r-md first:rounded-l-md'
      )}
      onClick={() => onClick(item)}
    >
      <Icon name={icon} color="light-green" />
      <span className="ml-2">{text}</span>
    </button>
  );
};

export default Tab;
