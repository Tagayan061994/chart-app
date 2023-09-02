import type {
  ReactNode,
  CSSProperties,
  MouseEvent,
  MouseEventHandler,
  ForwardedRef,
} from 'react';

import {forwardRef} from 'react';
import {useRouter} from 'next/router';

interface WrapperTagProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  to?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const WrapperTag = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  WrapperTagProps
>(
  (
    {
      children,
      className,
      style,
      type = 'button',
      disabled,
      loading,
      to,
      href,
      onClick,
    },
    ref
  ) => {
    const router = useRouter();

    const handleAnchorClick = (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      if (!disabled && !loading) {
        if (to) {
          router.push(to);
        } else if (href) {
          location.pathname = href;
        }
      }
    };

    const handleBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
      !loading && onClick && onClick(e);
    };

    if (to || href) {
      return (
        <a
          href={href}
          className={className}
          style={style}
          onClick={handleAnchorClick}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref as ForwardedRef<HTMLButtonElement>}
        type={type}
        className={className}
        style={style}
        disabled={disabled}
        onClick={handleBtnClick}
      >
        {children}
      </button>
    );
  }
);

WrapperTag.displayName = 'Button';
