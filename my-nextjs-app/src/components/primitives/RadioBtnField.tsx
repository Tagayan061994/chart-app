import type {FC, ChangeEvent} from 'react';
import clsx from 'clsx';

interface RadioBtnProps {
  name?: string;
  label?: string;
  value: boolean;
  dark?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const RadioBtn: FC<RadioBtnProps> = ({
  dark,
  label,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="flex">
      <label className="flex items-center cursor-pointer">
        <input
          name={name}
          checked={value}
          type="checkbox"
          className="hidden"
          onChange={onChange}
        />
        <span
          className={clsx(
            'rounded-full border-2',
            dark ? 'border-light-blue' : 'border-light-green',
            'w-4 h-4 flex items-center justify-center mr-2'
          )}
        >
          <span className="rounded-full bg-transparent w-3 h-3"></span>
        </span>
        <span className="text-light-blue text-sm font-normal">{label}</span>
      </label>
    </div>
  );
};
