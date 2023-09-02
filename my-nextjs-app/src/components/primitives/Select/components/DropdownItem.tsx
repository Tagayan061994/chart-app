import type {FC} from 'react';

import clsx from 'clsx';
import {Icon} from '@/components/primitives';
import Image from 'next/image';

export interface SelectItem {
  [key: string]: string | number;
}

interface DropdownItemProps {
  item: SelectItem;
  itemText: string;
  itemValue: keyof SelectItem;
  selected: boolean;
  onClick: (val: string | number) => void;
}

const DropdownItem: FC<DropdownItemProps> = ({
  item,
  itemText,
  itemValue,
  selected,
  onClick,
}) => {
  return (
    <div
      className={clsx(
        'flex items-center cursor-pointer py-4',
        'border-b border-select-divider',
        'hover:font-bold transition-all ease-in',
        selected && 'font-bold'
      )}
      onClick={() => item[itemValue] && onClick(item[itemValue])}
    >
      {item.icon && typeof item.icon === 'string' && (
        <Icon name={item.icon} className="mr-4" />
      )}
      {item.image && typeof item.image === 'string' && (
        <Image
          src={item.image}
          alt=""
          width={24}
          height={24}
          className="mr-4"
        />
      )}
      <div>{item[itemText]}</div>
    </div>
  );
};
export default DropdownItem;
