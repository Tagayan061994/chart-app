import type { FC } from "react";

import clsx from "clsx";

interface ProgressCircularProps {
  indeterminate?: boolean;
  size?: string | number;
  width?: string | number;
}

export const ProgressCircular: FC<ProgressCircularProps> = ({
  indeterminate,
  size = 32,
  width = 4,
}) => {
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      className={clsx(
        "relative inline-flex align-middle justify-center items-center"
      )}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="22.857142857142858 22.857142857142858 45.714285714285715 45.714285714285715"
        style={{ transform: "rotate(0deg)" }}
        className={clsx(
          "w-full h-full m-auto absolute top-0 left-0 right-0 bottom-0 z-0",
          indeterminate && "transition-all ease-in-out duration-200",
          indeterminate && "origin-center animate-progress-circular-rotate"
        )}
      >
        <circle
          fill="transparent"
          cx="45.714285714285715"
          cy="45.714285714285715"
          r="20"
          strokeWidth={+width * 1.3}
          strokeDasharray={indeterminate ? "80, 200" : "125.664"}
          strokeDashoffset={indeterminate ? 0 : "125.66370614359172px"}
          strokeLinecap={indeterminate ? "round" : undefined}
          className={clsx(
            "stroke-current z-[2] transition-all duration-[0.6s] ease-in-out",
            indeterminate && "animate-progress-circular-dash"
          )}
        ></circle>
      </svg>
    </div>
  );
};
