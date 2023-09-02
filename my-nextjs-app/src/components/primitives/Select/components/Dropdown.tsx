import type {FC} from 'react';
import type {SelectItem} from '@/components/primitives/Select/components/DropdownItem';

import clsx from 'clsx';
import DropdownItem from './DropdownItem';

interface DropdownProps {
  items?: SelectItem[];
  itemText: string;
  itemValue: keyof SelectItem;
  selected: string | number;
  dense?: boolean;
  onClick: (val: string | number) => void;
}

const Dropdown: FC<DropdownProps> = ({
  items = [],
  itemText,
  itemValue,
  selected,
  dense,
  onClick,
}) => {
  return (
    <div
      className={clsx(
        'absolute left-0 right-0 bg-white max-h-[292px] [&>*:last-child]:border-none',
        'py-2 px-6 rounded-lg shadow-[0_0_10px_#0000001a]',
        'text-light-blue text-base z-50 overflow-auto scrollbar',
        dense ? 'top-[52px]' : 'top-[64px]'
      )}
    >
      {!items?.length ? (
        <div className="py-2 font-semibold">No data available</div>
      ) : (
        <>
          {items?.map((item, i) => (
            <DropdownItem
              key={i}
              item={item}
              itemText={itemText}
              itemValue={itemValue}
              selected={selected === item[itemValue]}
              onClick={onClick}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Dropdown;
