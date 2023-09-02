import type {
  FC,
  ReactNode,
  MutableRefObject,
  MouseEvent,
  MouseEventHandler,
  CSSProperties,
} from 'react';
import type {ButtonColors} from '@/utils/buttonColors';

import {useRef} from 'react';
import clsx from 'clsx';
import {WrapperTag} from '@/components/primitives/Button/WrapperTag';
import {ProgressCircular} from '@/components/primitives';

import {
  buttonColors,
  buttonBackgroundColors,
  buttonDiasabledColors,
  buttonHovers,
  buttonOutlinedHovers,
  buttonIconHovers,
  buttonBorders,
} from '@/utils/buttonColors';

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  type?: 'button' | 'submit' | 'reset';
  color?: keyof ButtonColors;
  text?: boolean;
  outlined?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  loading?: boolean;
  loaderSize?: string | number;
  loaderWidth?: string | number;
  large?: boolean;
  xLarge?: boolean;
  block?: boolean;
  icon?: boolean;
  to?: string;
  href?: string;
  dark?: boolean;
  raised?: boolean;
  width?: string | number;
  height?: string | number;
  justify?: 'left' | 'center';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  style,
  type,
  color = 'default',
  text,
  outlined,
  rounded,
  disabled,
  loading,
  loaderSize = 23,
  loaderWidth = 3,
  large,
  xLarge,
  block,
  icon,
  to,
  href,
  dark,
  raised,
  width,
  height,
  justify,
  onClick,
}) => {
  const buttonEl: MutableRefObject<HTMLButtonElement | null> = useRef(null);

  const createRipple = (e: MouseEvent<HTMLButtonElement>) => {
    const button = buttonEl.current;

    if (button) {
      const circle = document.createElement('span');
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - (button.offsetLeft + radius)}px`;
      circle.style.top = `${e.clientY - (button.offsetTop + radius)}px`;
      circle.style.transform = 'scale(0)';
      circle.className = `${
        text || outlined || dark ? 'bg-ripple-dark' : 'bg-ripple-light'
      } absolute rounded-[50%] animate-ripple border-2 border-primary`;

      const ripple = button.getElementsByClassName('animate-ripple')[0];

      if (ripple) ripple.remove();

      button.appendChild(circle);
    }
  };

  const handleBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    // createRipple(e);
    onClick && onClick(e);
  };

  return (
    <WrapperTag
      ref={buttonEl}
      type={type}
      className={clsx(
        className,
        'relative no-underline select-none align-middle whitespace-nowrap overflow-hidden',
        'items-center justify-center tracking-[0.0892857143em] uppercase',
        'font-bold transition-all duration-200',
        block
          ? 'flex flex-[1_0_auto] min-w-full max-w-none'
          : 'inline-flex flex-[0_0_auto]',
        !rounded && !icon && 'rounded-lg',
        rounded && !icon && 'rounded-[28px]',
        !text &&
          !outlined &&
          !icon &&
          !disabled &&
          buttonBackgroundColors[color],
        disabled && buttonDiasabledColors[color],
        (text || outlined || icon) && `bg-transparent ${buttonColors[color]}`,
        !disabled && !icon && !text && buttonHovers[color],
        outlined &&
          !disabled &&
          `hover:text-white ${buttonOutlinedHovers[color]}`,
        outlined && buttonBorders[color],
        !outlined && (text || icon) && !disabled && buttonIconHovers[color],
        !large && !xLarge && !icon && 'h-9 px-4',
        !large && !xLarge && icon && 'w-9 h-9',
        !xLarge && 'text-sm',
        !width && !icon && !block && 'min-w-[64px]',
        !width && !icon && !block && large && 'min-w-[78px]',
        !width && !icon && !block && xLarge && 'min-w-[92px]',
        icon && 'rounded-[50%] min-w-0 min-h-0 p-0',
        icon && large && 'w-11 h-11',
        !icon && large && 'h-11 px-5',
        icon && xLarge && 'w-14 h-14',
        !icon && xLarge && 'h-14 px-6 text-base',
        !text && !outlined && dark && 'text-white',
        raised && 'shadow-[0_0_0.25rem_#D9DADB]',
        disabled || loading ? 'cursor-default' : 'cursor-pointer'
      )}
      style={{
        ...style,
        width: width && `${width}px`,
        height: height && `${height}px`,
      }}
      to={to}
      href={href}
      disabled={disabled}
      loading={loading}
      onClick={handleBtnClick}
    >
      <span
        className={clsx(
          'flex flex-[1_0_auto] items-center text-inherit leading-normal',
          justify === 'left' ? 'justify-left' : 'justify-center',
          loading && 'opacity-0'
        )}
      >
        {children}
      </span>
      {loading && (
        <span className="flex justify-center items-center absolute left-0 top-0 h-full w-full">
          <ProgressCircular
            indeterminate
            size={loaderSize}
            width={loaderWidth}
          />
        </span>
      )}
    </WrapperTag>
  );
};
