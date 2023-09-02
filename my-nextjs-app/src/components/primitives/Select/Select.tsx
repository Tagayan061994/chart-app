import type {SelectItem} from '@/components/primitives/Select/components/DropdownItem';
import type {Colors} from '@/utils/colors';

import {useState, useEffect, useRef, useMemo} from 'react';
import {Icon} from '@/components/primitives';
import Dropdown from '@/components/primitives/Select/components/Dropdown';

import clsx from 'clsx';
import {uniqBy} from 'lodash';
import {colors, borders} from '@/utils/colors';
import {mdiChevronDown} from '@mdi/js';

interface SelectProps {
  value: string | number;
  items?: SelectItem[];
  itemText?: string;
  itemValue?: string;
  color?: keyof Colors;
  label?: string;
  placeholder?: string;
  dense?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  appendInner?: React.ReactNode;
  error?: boolean;
  errorMessage?: string;
  className?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: (val: string | number) => void;
}

export const Select: React.FC<SelectProps> = ({
  value,
  items,
  itemText = 'text',
  itemValue = 'value',
  color = 'primary',
  label,
  placeholder,
  dense,
  rounded,
  disabled,
  appendInner,
  error,
  errorMessage,
  className,
  onFocus,
  onBlur,
  onChange,
}) => {
  const containerEl: React.MutableRefObject<HTMLDivElement | null> =
    useRef(null);
  const inputRef: React.MutableRefObject<HTMLInputElement | null> =
    useRef(null);
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const [selected, setSelected] = useState<string | number>('');
  const [inputValue, setInputValue] = useState('');
  const hasError = error || errorMessage;
  const uniqItems = useMemo(
    () => uniqBy(items, `${itemText}`),
    [items, itemText]
  );

  const handleFocus = () => {
    setFocused(true);
    onFocus && onFocus();
  };

  const handleBlur = () => {
    setFocused(false);
    setOpen(false);
    onBlur && onBlur();
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const handleDropdownItemClick = (val: string | number) => {
    val !== value && onChange && onChange(val);
    setOpen(false);
  };

  useEffect(() => {
    setSelected(value);
  }, [value]);

  useEffect(() => {
    const selectedItem = uniqItems?.find(
      (item) => item[itemValue] === selected
    );
    if (selectedItem) setInputValue((selectedItem[itemText] as string) || '');
    else setInputValue('');
  }, [selected, uniqItems, itemText, itemValue]);

  return (
    <div
      ref={containerEl}
      className={clsx(
        'bg-white flex flex-col relative  gap-y-4 outline-none',
        rounded ? 'rounded-[28px]' : 'rounded-lg'
      )}
    >
      <div
        className={clsx(
          'flex items-center border shadow-[0_0_10px_#0000001a] cursor-pointer',
          dense ? 'h-11' : 'h-14',
          !hasError && !focused && 'border-transparent hover:border-gray',
          !hasError && focused && `outline-none ${borders[color]}`,
          rounded ? 'rounded-[28px] pl-6 pr-4' : 'rounded-lg pl-6 pr-4',
          hasError && 'border-error'
        )}
        tabIndex={0}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={handleClick}
      >
        {appendInner && <div className="inline-flex mr-2">{appendInner}</div>}

        <div className={clsx('relative flex grow text-gray h-full pr-4')}>
          <input
            ref={inputRef}
            value={inputValue}
            placeholder={placeholder}
            disabled={disabled}
            readOnly
            className={clsx(
              className,
              'bg-transparent appearance-none pointer-events-none w-full',
              'placeholder:text-light-blue placeholder:text-sm',
              'outline-0 text-ellipsis',
              hasError && 'placeholder:text-error'
            )}
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

        <Icon
          name={mdiChevronDown}
          color={hasError ? 'error' : focused ? color : 'gray'}
          className={clsx(
            'cursor-pointer',
            'transition-all ease-in duration-200',
            open && 'rotate-180'
          )}
        />

        {open && (
          <Dropdown
            items={uniqItems}
            itemText={itemText}
            itemValue={itemValue}
            selected={selected}
            dense={dense}
            onClick={handleDropdownItemClick}
          />
        )}
      </div>

      {errorMessage && (
        <div className="text-error text-xs">
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
};
