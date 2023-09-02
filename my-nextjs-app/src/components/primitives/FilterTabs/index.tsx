import type {FC} from 'react';

import {useCallback, useState} from 'react';
import clsx from 'clsx';

import Tab from '@/components/primitives/FilterTabs/Tab';

interface Item {
  text: string;
  icon: string;
  value: string;
}

interface FilterTabsProps {
  items: Item[];
  value?: string;
  className?: string;
  onClick: (item: Item) => void;
}

export const FilterTabs: FC<FilterTabsProps> = ({
  items,
  value,
  onClick,
  className,
}) => {
  const [selected, setSelected] = useState<string | null>(value || null);

  const handleClick = useCallback(
    (item: Item) => {
      setSelected(item.value);
      onClick(item);
    },
    [onClick]
  );

  return (
    <div
      className={clsx(
        className,
        'flex h-[44px]',
        'shadow-card-shadow rounded-md',
        'divide-x divide-light-green'
      )}
    >
      {items.map((item, index) => (
        <Tab
          item={item}
          key={index}
          onClick={handleClick}
          selected={selected}
        />
      ))}
    </div>
  );
};
