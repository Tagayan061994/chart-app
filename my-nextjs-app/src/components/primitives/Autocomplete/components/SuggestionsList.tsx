import {FC, MouseEvent} from 'react';

import Image from 'next/image';
import {clsx} from 'clsx';

import {Row} from '@/components/primitives';

interface SuggestionsListProps {
  suggestions: string[];
  onClick: (e: MouseEvent<HTMLLIElement>) => void;
}

export const SuggestionsList: FC<SuggestionsListProps> = ({
  onClick,
  suggestions,
}) => {
  if (!suggestions.length) {
    return null;
  }

  const isHeightLess = suggestions.length < 4;

  return (
    <ul
      className={clsx(
        !isHeightLess ? 'h-[224px]' : 'h-auto',
        'rounded-[8px] pl-6 pr-6 pb-[17px] mt-2 flex flex-col overflow-y-auto scrollbar px-4 bg-white'
      )}
    >
      {suggestions.map((suggestion, index) => {
        return (
          <li key={index} className="flex flex-col mt-[17px]" onClick={onClick}>
            <Row className="cursor-pointer">
              <Image src={''} alt="" width={24} height={17} />
              <span className="ml-4 text-light-blue text-sm font-sans">
                {suggestion}
              </span>
            </Row>
            {index !== suggestions.length - 1 && (
              <div className="mt-4 border-[1px] border-light-blue opacity-10" />
            )}
          </li>
        );
      })}
    </ul>
  );
};
