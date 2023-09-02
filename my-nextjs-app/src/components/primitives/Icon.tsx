import type {FC, MouseEventHandler} from 'react';
import type {Colors} from '@/utils/colors';

import clsx from 'clsx';
import {colors} from '@/utils/colors';

interface IconProps {
  className?: string;
  name: string;
  color?: keyof Colors;
  size?: string | number;
  small?: boolean;
  dense?: boolean;
  large?: boolean;
  onClick?: MouseEventHandler<HTMLSpanElement>;
}

export const Icon: FC<IconProps> = ({
  className,
  name,
  color = 'gray',
  size,
  small,
  dense,
  large,
  onClick,
}) => {
  return (
    <span
      aria-hidden="true"
      className={clsx(
        className,
        !(small || dense || large) && 'text-2xl',
        small && 'text-base w-4 h-4',
        dense && 'text-xl w-5 h-5',
        large && 'text-[2rem] w-8 h-8',
        colors[color],
        'notranslate',
        'inline-flex',
        'justify-center',
        'items-center',
        'leading-none',
        'tracking-normal',
        'align-middle',
        'select-none'
      )}
      style={{
        fontFeatureSettings: '"liga"',
        fontSize: size && size + 'px',
        width: size && size + 'px',
        height: size && size + 'px',
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        role="img"
        aria-hidden="true"
        className={clsx(
          'fill-current',
          !(small || dense || large) && 'w-6 h-6',
          small && 'text-base w-4 h-4',
          dense && 'text-xl w-5 h-5',
          large && 'text-[2rem] w-8 h-8'
        )}
        style={{
          fontSize: size && size + 'px',
          width: size && size + 'px',
          height: size && size + 'px',
        }}
      >
        <path d={name}></path>
      </svg>
    </span>
  );
};
