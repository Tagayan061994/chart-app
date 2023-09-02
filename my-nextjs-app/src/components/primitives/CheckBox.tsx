import type {FC} from 'react';
import type {Colors} from '@/utils/colors';

import {Icon, Row} from '@/components/primitives';

import {mdiCheckboxOutline, mdiCheckboxBlankOutline} from '@mdi/js';
import clsx from 'clsx';

interface CheckBoxProps {
  className?: string;
  checked: boolean;
  label?: string;
  color?: keyof Colors;
  dark?: boolean;
  onClick?: (option: boolean) => void;
}
export const CheckBox: FC<CheckBoxProps> = ({
  className,
  checked,
  label,
  color = 'primary',
  dark,
  onClick,
}) => {
  return (
    <Row
      justify="center"
      align="center"
      className={clsx(className, 'gap-x-2 cursor-pointer')}
      onClick={() => onClick && onClick(!checked)}
    >
      <div className="relative inline-flex w-6 h-6">
        <input
          type="checkbox"
          aria-checked={checked}
          defaultChecked={checked}
          className="absolute left-0 top-0 opacity-0 w-6 h-6 pointer-events-none"
        />
        <Icon
          name={checked ? mdiCheckboxOutline : mdiCheckboxBlankOutline}
          color={color}
        />
      </div>

      {label && (
        <label
          className={clsx(
            'text-sm select-none cursor-pointer',
            dark ? 'text-white' : 'text-secondary'
          )}
        >
          {label}
        </label>
      )}
    </Row>
  );
};
