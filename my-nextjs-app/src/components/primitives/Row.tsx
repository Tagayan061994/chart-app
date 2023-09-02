import type {
  PropsWithChildren,
  FocusEvent,
  MouseEventHandler,
  CSSProperties,
} from 'react';

import {forwardRef} from 'react';
import clsx from 'clsx';

const justifyOptions = {
  justify: {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    around: 'justify-around',
    between: 'justify-between',
    evenly: 'justify-evenly',
  },
  sm: {
    start: 'sm:justify-start',
    center: 'sm:justify-center',
    end: 'sm:justify-end',
    around: 'sm:justify-around',
    between: 'sm:justify-between',
    evenly: 'sm:justify-evenly',
  },
  md: {
    start: 'md:justify-start',
    center: 'md:justify-center',
    end: 'md:justify-end',
    around: 'md:justify-around',
    between: 'md:justify-between',
    evenly: 'md:justify-evenly',
  },
  lg: {
    start: 'lg:justify-start',
    center: 'lg:justify-center',
    end: 'lg:justify-end',
    around: 'lg:justify-around',
    between: 'lg:justify-between',
    evenly: 'lg:justify-evenly',
  },
  xl: {
    start: 'xl:justify-start',
    center: 'xl:justify-center',
    end: 'xl:justify-end',
    around: 'xl:justify-around',
    between: 'xl:justify-between',
    evenly: 'xl:justify-evenly',
  },
};

type JustifyOption = keyof typeof justifyOptions.justify;

const alignOptions = {
  align: {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    baseline: 'items-baseline',
    stretch: 'items-stretch',
  },
  sm: {
    start: 'sm:items-start',
    center: 'sm:items-center',
    end: 'sm:items-end',
    baseline: 'sm:items-baseline',
    stretch: 'sm:items-stretch',
  },
  md: {
    start: 'md:items-start',
    center: 'md:items-center',
    end: 'md:items-end',
    baseline: 'md:items-baseline',
    stretch: 'md:items-stretch',
  },
  lg: {
    start: 'lg:items-start',
    center: 'lg:items-center',
    end: 'lg:items-end',
    baseline: 'lg:items-baseline',
    stretch: 'lg:items-stretch',
  },
  xl: {
    start: 'xl:items-start',
    center: 'xl:items-center',
    end: 'xl:items-end',
    baseline: 'xl:items-baseline',
    stretch: 'xl:items-stretch',
  },
};

type AlignOption = keyof typeof alignOptions.align;

const alignContentOptions = {
  alignContent: {
    start: 'content-start',
    center: 'content-center',
    end: 'content-end',
    around: 'content-around',
    between: 'content-between',
    evenly: 'content-evenly',
    baseline: 'content-baseline',
  },
  sm: {
    start: 'sm:content-start',
    center: 'sm:content-center',
    end: 'sm:content-end',
    around: 'sm:content-around',
    between: 'sm:content-between',
    evenly: 'sm:content-evenly',
    baseline: 'sm:content-baseline',
  },
  md: {
    start: 'md:content-start',
    center: 'md:content-center',
    end: 'md:content-end',
    around: 'md:content-around',
    between: 'md:content-between',
    evenly: 'md:content-evenly',
    baseline: 'md:content-baseline',
  },
  lg: {
    start: 'lg:content-start',
    center: 'lg:content-center',
    end: 'lg:content-end',
    around: 'lg:content-around',
    between: 'lg:content-between',
    evenly: 'lg:content-evenly',
    baseline: 'lg:content-baseline',
  },
  xl: {
    start: 'xl:content-start',
    center: 'xl:content-center',
    end: 'xl:content-end',
    around: 'xl:content-around',
    between: 'xl:content-between',
    evenly: 'xl:content-evenly',
    baseline: 'xl:content-baseline',
  },
};

type AlignContentOption = keyof typeof alignContentOptions.alignContent;

interface RowProps extends PropsWithChildren {
  className?: string;
  style?: CSSProperties;
  nowrap?: boolean;
  justify?: JustifyOption;
  justifySm?: JustifyOption;
  justifyMd?: JustifyOption;
  justifyLg?: JustifyOption;
  justifyXl?: JustifyOption;
  align?: AlignOption;
  alignSm?: AlignOption;
  alignMd?: AlignOption;
  alignLg?: AlignOption;
  alignXl?: AlignOption;
  alignContent?: AlignContentOption;
  alignContentSm?: AlignContentOption;
  alignContentMd?: AlignContentOption;
  alignContentLg?: AlignContentOption;
  alignContentXl?: AlignContentOption;
  tabIndex?: -1 | 0;
  onFocus?: (e: FocusEvent<HTMLDivElement>) => void;
  onBlur?: (e: FocusEvent<HTMLDivElement>) => void;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export const Row = forwardRef<HTMLDivElement, RowProps>(
  (
    {
      children,
      className,
      style,
      nowrap,
      justify,
      justifySm,
      justifyMd,
      justifyLg,
      justifyXl,
      align,
      alignSm,
      alignMd,
      alignLg,
      alignXl,
      alignContent,
      alignContentSm,
      alignContentMd,
      alignContentLg,
      alignContentXl,
      tabIndex,
      onFocus,
      onBlur,
      onClick,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(
          className,
          'flex',
          nowrap ? 'flex-nowrap' : 'flex-wrap',
          justify && justifyOptions.justify[justify],
          justifySm && justifyOptions.sm[justifySm],
          justifyMd && justifyOptions.md[justifyMd],
          justifyLg && justifyOptions.lg[justifyLg],
          justifyXl && justifyOptions.xl[justifyXl],
          align && alignOptions.align[align],
          alignSm && alignOptions.sm[alignSm],
          alignMd && alignOptions.md[alignMd],
          alignLg && alignOptions.lg[alignLg],
          alignXl && alignOptions.xl[alignXl],
          alignContent && alignContentOptions.alignContent[alignContent],
          alignContentSm && alignContentOptions.sm[alignContentSm],
          alignContentMd && alignContentOptions.md[alignContentMd],
          alignContentLg && alignContentOptions.lg[alignContentLg],
          alignContentXl && alignContentOptions.xl[alignContentXl]
        )}
        style={style}
        tabIndex={tabIndex}
        onFocus={onFocus}
        onBlur={onBlur}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
);

Row.displayName = 'Row';
