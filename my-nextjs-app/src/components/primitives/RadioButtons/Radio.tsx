import type { FC } from 'react';

import { Icon } from '@/components/primitives';
import { mdiRadioboxMarked, mdiRadioboxBlank } from '@mdi/js';

interface RadioProps {
  value?: string;
  option: { label: string; value: string | boolean | number };
  onClick?: (option: {
    label: string;
    value: string | boolean | number;
  }) => void;
}
export const Radio: FC<RadioProps> = ({ value, onClick, option }) => {
  const { label, value: optioValue } = option;
  const isChecked = value === optioValue;

  return (
    <div
      className="relative inline-flex cursor-pointer"
      onClick={() => onClick && onClick(option)}
    >
      <input
        type="checkbox"
        aria-checked={isChecked}
        defaultChecked={isChecked}
        className="absolute left-0 top-0 opacity-0 w-6 h-6 pointer-events-none"
      />
      <Icon
        name={isChecked ? mdiRadioboxMarked : mdiRadioboxBlank}
        color="primary"
      />
      <label className="ml-2 block text-light-blue">{label}</label>
    </div>
  );
};
