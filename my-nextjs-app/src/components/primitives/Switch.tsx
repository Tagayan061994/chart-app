import {FC, useEffect} from 'react';

import clsx from 'clsx';
import {useState, useCallback} from 'react';

import {borders} from '@/utils/colors';

type SwitchProps = {
  className?: string;
  size?: 'lg' | 'sm';
  label?: string;
  outlined?: boolean;
  readonly?: boolean;
  defaultValue: boolean;
  onChange: (event: boolean) => void;
};

export const Switch: FC<SwitchProps> = ({
  className,
  size = 'lg',
  label,
  outlined,
  readonly,
  defaultValue,
  onChange,
}) => {
  const isLarge = size === 'lg';
  const [checked, setChecked] = useState(defaultValue);

  const toggleSwitcher = useCallback(() => setChecked(!checked), [checked]);

  const handleClick = () => {
    if (!readonly) {
      toggleSwitcher();
      onChange(!checked);
    }
  };

  useEffect(() => {
    setChecked(defaultValue);
  }, [defaultValue]);

  return (
    <div
      className={clsx(
        className,
        'flex relative items-center',
        !readonly && 'cursor-pointer'
      )}
    >
      <input
        readOnly
        type="checkbox"
        checked={checked}
        className="sr-only peer"
      />
      <div
        className={clsx(
          isLarge ? 'w-[60px]' : 'w-[46px]',
          isLarge ? 'h-[35px]' : 'h-[24px]',
          'transition delay-350 rounded-full',
          'bg-transparent border border-1',
          !checked && outlined
            ? `${borders['light-blue']}`
            : `${borders['light-green']}`,
          isLarge
            ? 'peer-checked:after:translate-x-6'
            : 'peer-checked:after:translate-x-5',
          'peer-checked:after:border-white',
          "after:content-[''] after:absolute",
          isLarge ? 'after:top-[2.5px]' : 'after:top-[3px]',
          isLarge ? 'after:left-[2.5px]' : 'after:left-[4px]',
          'peer-checked:bg-light-green',
          'after:transition-all ease-in-out delay-350',
          !checked ? 'after:bg-light-green' : 'after:bg-white',
          'after:shadow-[0_0_4px_rgba(0, 0, 0, 0.3)]',
          'after:rounded-full',
          isLarge ? 'after:h-[30px]' : 'after:h-[18px]',
          isLarge ? 'after:w-[30px]' : 'after:w-[18px]'
        )}
        onClick={handleClick}
      />
      {label && (
        <label
          className={clsx(
            'cursor-pointer',
            isLarge ? 'ml-[24px]' : 'ml-[16px]'
          )}
          onClick={handleClick}
        >
          {label}
        </label>
      )}
    </div>
  );
};
