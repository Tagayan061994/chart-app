import type {FC, ReactNode} from 'react';
import type {BackgroundColors} from '@/utils/colors';

import clsx from 'clsx';

import {backgroundColors} from '@/utils/colors';

interface ChipProps {
  children?: ReactNode;
  className?: string;
  color?: keyof BackgroundColors;
  small?: boolean;
  rounded?: boolean;
  width?: string | number;
  dark?: boolean;
}

export const Chip: FC<ChipProps> = ({
  children,
  className,
  color = 'chip-default-background',
  small,
  rounded,
  width,
  dark,
}) => {
  return (
    <span
      className={clsx(
        className,
        'inline-flex items-center justify-center max-w-full  cursor-default',
        'outline-0 overflow-hidden align-middle whitespace-nowrap',
        dark && color === 'chip-default-background'
          ? backgroundColors['secondary']
          : backgroundColors[color],
        dark ? 'text-white' : 'text-secondary',
        small ? 'h-[30px] text-xs px-4' : 'h-[42px] text-base font-bold px-6',
        rounded ? 'rounded-[28px]' : 'rounded-xl'
      )}
      style={{
        width: width && `${width}px`,
      }}
    >
      {children}
    </span>
  );
};
