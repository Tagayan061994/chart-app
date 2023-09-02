import type {FC, ReactNode, MouseEvent} from 'react';

import {useState} from 'react';
import clsx from 'clsx';

interface ExpansionPanelHeaderProps {
  children?: ReactNode;
  className?: string;
  readonly?: boolean;
}

export const ExpansionPanelHeader: FC<ExpansionPanelHeaderProps> = ({
  children,
  className,
  readonly,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const elem = e.currentTarget.parentElement;

    if (elem) {
      const content: HTMLDivElement | null = elem.querySelector(
        '.expansion-panel-content'
      );

      if (content) {
        content.style.display = expanded ? 'none' : '';
      }

      elem.style.height = expanded ? '69px' : `${elem.scrollHeight}px`;
      elem.ariaExpanded = expanded ? 'false' : 'true';

      setExpanded(!expanded);
    }
  };

  return (
    <button
      type="button"
      className={clsx(
        className,
        'relative flex items-center w-full',
        'rounded-t-[inherit] leading-none outline-0 py-6 px-8',
        readonly ? 'cursor-default' : 'cursor-pointer'
      )}
      onClick={readonly ? undefined : handleClick}
    >
      {children}
    </button>
  );
};
