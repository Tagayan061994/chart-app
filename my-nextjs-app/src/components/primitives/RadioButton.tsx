import type {FC} from 'react';
import {useState} from 'react';
import clsx from 'clsx';

type RadioButtonProps = {
  id: string;
  name: string;
  label?: string;
  value: string;
  checked: boolean;
  onChange: (value: boolean) => void;
};

//Component Call Exmple
//I will remove it later
{
  /* <RadioButton
        id="option1"
        name="options"
        label="Option 1"
        value="option1"
        checked={selectedOption === "option1"}
        onChange={handleOptionChange}
      /> */
}

export const RadioButton: FC<RadioButtonProps> = ({
  id,
  name,
  label,
  value,
  checked,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleOnChange = (): void => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

  return (
    <div className="flex items-center">
      <div className="relative" onClick={handleOnChange}>
        <input
          id={id}
          type="radio"
          name={name}
          value={value}
          checked={isChecked}
          onChange={console.log}
          className="sr-only"
        />
        <div
          className={clsx(
            'w-4 h-4 mr-2 rounded-full',
            'cursor-pointer flex items-center justify-center',
            'border border-primary transition-colors duration-150'
          )}
        >
          <div
            className={`w-2 h-2 rounded-full ${
              isChecked ? 'bg-primary' : 'bg-transparent'
            }`}
          />
        </div>
      </div>
      {label && (
        <label htmlFor={id} className="cursor-pointer">
          {label}
        </label>
      )}
    </div>
  );
};
