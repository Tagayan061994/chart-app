import {forwardRef, ReactNode} from 'react';
import clsx from 'clsx';

const spacingOptions = {
  none: 'gap-y-0',
  xs: 'gap-y-1',
  sm: 'gap-y-2',
  md: 'gap-y-4',
  lg: 'gap-y-6',
  xl: 'gap-y-8',
  '2xl': 'gap-y-10',
  '3xl': 'gap-y-12',
  '4xl': 'gap-y-14',
  '5xl': 'gap-y-16',
  '6xl': 'gap-y-24',
  '7xl': 'gap-32',
};

type SpacingOption = keyof typeof spacingOptions;

interface StackProps {
  children?: ReactNode;
  className?: string;
  spacing?: SpacingOption;
  width?: string | number;
  maxWidth?: string | number;
  height?: string | number;
  maxHeight?: string | number;
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {children, className, spacing = 'md', width, maxWidth, height, maxHeight},
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(className, 'flex', 'flex-col', spacingOptions[spacing])}
        style={{
          width: width && width + 'px',
          maxWidth: maxWidth && maxWidth + 'px',
          height: height && height + 'px',
          maxHeight: maxHeight && maxHeight + 'px',
        }}
      >
        {children}
      </div>
    );
  }
);

Stack.displayName = 'Stack';
