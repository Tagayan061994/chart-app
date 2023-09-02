import type {FC, ReactNode, MouseEventHandler} from 'react';
import clsx from 'clsx';

const colsOptions = {
  cols: {
    '1': `flex-[0_0_8.333333333333332%]`,
    '2': `flex-[0_0_16.666666666666664%]`,
    '3': `flex-[0_0_25%]`,
    '4': `flex-[0_0_33.33333333333333%]`,
    '5': `flex-[0_0_41.66666666666667%]`,
    '6': `flex-[0_0_50%]`,
    '7': `flex-[0_0_58.333333333333336%]`,
    '8': `flex-[0_0_66.66666666666666%]`,
    '9': `flex-[0_0_75%]`,
    '10': `flex-[0_0_83.33333333333334%]`,
    '11': `flex-[0_0_91.66666666666666%]`,
    '12': 'flex-[0_0_100%]',
    auto: 'flex-[0_0_auto]',
  },
  sm: {
    '1': `sm:flex-[0_0_8.333333333333332%]`,
    '2': `sm:flex-[0_0_16.666666666666664%]`,
    '3': `sm:flex-[0_0_25%]`,
    '4': `sm:flex-[0_0_33.33333333333333%]`,
    '5': `sm:flex-[0_0_41.66666666666667%]`,
    '6': `sm:flex-[0_0_50%]`,
    '7': `sm:flex-[0_0_58.333333333333336%]`,
    '8': `sm:flex-[0_0_66.66666666666666%]`,
    '9': `sm:flex-[0_0_75%]`,
    '10': `sm:flex-[0_0_83.33333333333334%]`,
    '11': `sm:flex-[0_0_91.66666666666666%]`,
    '12': 'sm:flex-[0_0_100%]',
    auto: 'sm:flex-[0_0_auto]',
  },
  md: {
    '1': `md:flex-[0_0_8.333333333333332%]`,
    '2': `md:flex-[0_0_16.666666666666664%]`,
    '3': `md:flex-[0_0_25%]`,
    '4': `md:flex-[0_0_33.33333333333333%]`,
    '5': `md:flex-[0_0_41.66666666666667%]`,
    '6': `md:flex-[0_0_50%]`,
    '7': `md:flex-[0_0_58.333333333333336%]`,
    '8': `md:flex-[0_0_66.66666666666666%]`,
    '9': `md:flex-[0_0_75%]`,
    '10': `md:flex-[0_0_83.33333333333334%]`,
    '11': `md:flex-[0_0_91.66666666666666%]`,
    '12': 'md:flex-[0_0_100%]',
    auto: 'md:flex-[0_0_auto]',
  },
  lg: {
    '1': `lg:flex-[0_0_8.333333333333332%]`,
    '2': `lg:flex-[0_0_16.666666666666664%]`,
    '3': `lg:flex-[0_0_25%]`,
    '4': `lg:flex-[0_0_33.33333333333333%]`,
    '5': `lg:flex-[0_0_41.66666666666667%]`,
    '6': `lg:flex-[0_0_50%]`,
    '7': `lg:flex-[0_0_58.333333333333336%]`,
    '8': `lg:flex-[0_0_66.66666666666666%]`,
    '9': `lg:flex-[0_0_75%]`,
    '10': `lg:flex-[0_0_83.33333333333334%]`,
    '11': `lg:flex-[0_0_91.66666666666666%]`,
    '12': 'lg:flex-[0_0_100%]',
    auto: 'lg:flex-[0_0_auto]',
  },
  xl: {
    '1': `xl:flex-[0_0_8.333333333333332%]`,
    '2': `xl:flex-[0_0_16.666666666666664%]`,
    '3': `xl:flex-[0_0_25%]`,
    '4': `xl:flex-[0_0_33.33333333333333%]`,
    '5': `xl:flex-[0_0_41.66666666666667%]`,
    '6': `xl:flex-[0_0_50%]`,
    '7': `xl:flex-[0_0_58.333333333333336%]`,
    '8': `xl:flex-[0_0_66.66666666666666%]`,
    '9': `xl:flex-[0_0_75%]`,
    '10': `xl:flex-[0_0_83.33333333333334%]`,
    '11': `xl:flex-[0_0_91.66666666666666%]`,
    '12': 'xl:flex-[0_0_100%]',
    auto: 'xl:flex-[0_0_auto]',
  },
};

const maxWidthOptions = {
  cols: {
    '1': 'max-w-[8.333333333333332%]',
    '2': 'max-w-[16.666666666666664%]',
    '3': 'max-w-[25%]',
    '4': 'max-w-[33.33333333333333%]',
    '5': 'max-w-[41.66666666666667%]',
    '6': `max-w-[50%]`,
    '7': `max-w-[58.333333333333336%]`,
    '8': `max-w-[66.66666666666666%]`,
    '9': `max-w-[75%]`,
    '10': `max-w-[83.33333333333334%]`,
    '11': `max-w-[91.66666666666666%]`,
    '12': 'max-w-full',
    auto: 'max-w-full',
  },
  sm: {
    '1': 'sm:max-w-[8.333333333333332%]',
    '2': 'sm:max-w-[16.666666666666664%]',
    '3': 'sm:max-w-[25%]',
    '4': 'sm:max-w-[33.33333333333333%]',
    '5': 'sm:max-w-[41.66666666666667%]',
    '6': `sm:max-w-[50%]`,
    '7': `sm:max-w-[58.333333333333336%]`,
    '8': `sm:max-w-[66.66666666666666%]`,
    '9': `sm:max-w-[75%]`,
    '10': `sm:max-w-[83.33333333333334%]`,
    '11': `sm:max-w-[91.66666666666666%]`,
    '12': 'sm:max-w-full',
    auto: 'sm:max-w-full',
  },
  md: {
    '1': 'md:max-w-[8.333333333333332%]',
    '2': 'md:max-w-[16.666666666666664%]',
    '3': 'md:max-w-[25%]',
    '4': 'md:max-w-[33.33333333333333%]',
    '5': 'md:max-w-[41.66666666666667%]',
    '6': `md:max-w-[50%]`,
    '7': `md:max-w-[58.333333333333336%]`,
    '8': `md:max-w-[66.66666666666666%]`,
    '9': `md:max-w-[75%]`,
    '10': `md:max-w-[83.33333333333334%]`,
    '11': `md:max-w-[91.66666666666666%]`,
    '12': 'md:max-w-full',
    auto: 'md:max-w-full',
  },
  lg: {
    '1': 'lg:max-w-[8.333333333333332%]',
    '2': 'lg:max-w-[16.666666666666664%]',
    '3': 'lg:max-w-[25%]',
    '4': 'lg:max-w-[33.33333333333333%]',
    '5': 'lg:max-w-[41.66666666666667%]',
    '6': `lg:max-w-[50%]`,
    '7': `lg:max-w-[58.333333333333336%]`,
    '8': `lg:max-w-[66.66666666666666%]`,
    '9': `lg:max-w-[75%]`,
    '10': `lg:max-w-[83.33333333333334%]`,
    '11': `lg:max-w-[91.66666666666666%]`,
    '12': 'lg:max-w-full',
    auto: 'lg:max-w-full',
  },
  xl: {
    '1': 'xl:max-w-[8.333333333333332%]',
    '2': 'xl:max-w-[16.666666666666664%]',
    '3': 'xl:max-w-[25%]',
    '4': 'xl:max-w-[33.33333333333333%]',
    '5': 'xl:max-w-[41.66666666666667%]',
    '6': `xl:max-w-[50%]`,
    '7': `xl:max-w-[58.333333333333336%]`,
    '8': `xl:max-w-[66.66666666666666%]`,
    '9': `xl:max-w-[75%]`,
    '10': `xl:max-w-[83.33333333333334%]`,
    '11': `xl:max-w-[91.66666666666666%]`,
    '12': 'xl:max-w-full',
    auto: 'xl:max-w-full',
  },
};

type ColsOptions = keyof typeof colsOptions.cols;

interface ColProps {
  children?: ReactNode;
  className?: string;
  cols?: ColsOptions;
  sm?: ColsOptions;
  md?: ColsOptions;
  lg?: ColsOptions;
  xl?: ColsOptions;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export const Col: FC<ColProps> = ({
  children,
  className,
  cols,
  sm,
  md,
  lg,
  xl,
}) => {
  return (
    <div
      className={clsx(
        className,
        !(cols || sm || md || lg || xl) && 'grow basis-[0]',
        cols === 'auto' && 'w-auto',
        sm === 'auto' && 'sm:w-auto',
        md === 'auto' && 'md:w-auto',
        lg === 'auto' && 'lg:w-auto',
        xl === 'auto' && 'xl:w-auto',
        cols && [colsOptions.cols[cols], maxWidthOptions.cols[cols]],
        sm && [colsOptions.sm[sm], maxWidthOptions.sm[sm]],
        md && [colsOptions.md[md], maxWidthOptions.md[md]],
        lg && [colsOptions.lg[lg], maxWidthOptions.lg[lg]],
        xl && [colsOptions.xl[xl], maxWidthOptions.xl[xl]]
      )}
    >
      {children}
    </div>
  );
};
