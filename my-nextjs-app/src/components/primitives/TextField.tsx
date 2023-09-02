import {
  FC,
  ReactNode,
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  MutableRefObject,
} from 'react';
import type {Colors} from '@/utils/colors';

import {useState, useRef} from 'react';
import clsx from 'clsx';

import {colors, borders} from '@/utils/colors';

interface TextFieldProps {
  name?: string;
  type?: string;
  value?: string | number;
  color?: keyof Colors;
  label?: string;
  placeholder?: string;
  dense?: boolean;
  rounded?: boolean;
  shaped?: 'left' | 'right';
  disabled?: boolean;
  appendInner?: ReactNode;
  error?: boolean;
  errorMessage?: string;
  className?: string;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export const TextField: FC<TextFieldProps> = ({
  name,
  type = 'text',
  value,
  color = 'primary',
  label,
  dense,
  rounded,
  shaped,
  disabled,
  appendInner,
  error,
  placeholder,
  errorMessage,
  className,
  onFocus,
  onBlur,
  onChange,
  onKeyDown,
}) => {
  const inputRef: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const [focused, setFocused] = useState(false);
  const hasError = error || errorMessage;

  const handleFocus = () => {
    setFocused(true);
    inputRef.current?.focus();
  };

  const handleBlur = () => {
    setFocused(false);
    inputRef.current?.blur();
  };

  return (
    <div
      className={clsx(
        'bg-white flex flex-col relative gap-y-4',
        rounded ? 'rounded-[28px]' : 'rounded-lg',
        shaped === 'left' && 'rounded-r-none',
        shaped === 'right' && 'rounded-l-none'
      )}
    >
      <div
        className={clsx(
          'flex items-center border shadow-[0_0_10px_#0000001a] cursor-text',
          dense ? 'h-11' : 'h-14',
          !hasError && !focused && 'border-transparent hover:border-gray',
          !hasError && focused && `outline-none ${borders[color]}`,
          rounded ? 'rounded-[28px] px-6' : 'rounded-lg px-6',
          shaped === 'left' && 'rounded-r-none',
          shaped === 'right' && 'rounded-l-none',
          hasError && 'border-error'
        )}
        tabIndex={0}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {appendInner && <div className="inline-flex mr-2">{appendInner}</div>}

        <div className={clsx('relative flex grow bg-white text-gray h-full')}>
          <input
            ref={inputRef}
            value={value}
            type={type}
            name={name}
            placeholder={placeholder}
            disabled={disabled}
            className={clsx(
              className,
              'bg-transparent appearance-none',
              'text-base w-full',
              'placeholder:text-light-blue',
              'placeholder:text-sm',
              'placeholder:opacity-40',
              'outline-0',
              hasError && 'placeholder:text-error'
            )}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />

          <label
            className={clsx(
              'absolute px-1 bg-white max-w-full',
              'whitespace-nowrap text-ellipsis overflow-x-hidden',
              'transition-all ease-in duration-200',
              'pointer-events-none text-base',
              !hasError && !focused && !value && 'text-inherit',
              !hasError && !focused && value && 'text-inherit',
              !(focused || value) && 'top-2/4 -translate-y-2/4',
              (focused || value) && '-top-[9px] text-xs',
              (focused || value) && 'transition-all ease-in duration-200',
              !hasError && focused && colors[color],
              hasError && 'text-error'
            )}
          >
            {label}
          </label>
        </div>
      </div>

      {errorMessage && (
        <div className="text-error text-xs">
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
};
