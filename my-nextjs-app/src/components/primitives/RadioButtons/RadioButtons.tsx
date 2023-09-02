import type { FC } from 'react';
import { Radio } from '@/components/primitives/RadioButtons/Radio';

interface RadioGroupProps {
  value?: string;
  onChange?: (option: {
    label: string;
    value: string | boolean | number;
  }) => void;
  options: Array<{ label: string; value: string | boolean | number }>;
}

export const RadioButtons: FC<RadioGroupProps> = ({
  value,
  options,
  onChange,
}) => {
  return (
    <div className="flex flex-col space-y-2">
      {options.map((option, index) => (
        <Radio onClick={onChange} option={option} value={value} key={index} />
      ))}
    </div>
  );
};
