import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUnderlineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}
    height={props.height || 24}
    fill="none"
    {...props}>
    <path
      fill={props.color || `#2C3641`}
      d="M12 16.2c1.547 0 3.03-.632 4.125-1.757a6.1 6.1 0 0 0 1.708-4.243v-6c0-.318-.123-.623-.341-.849A1.15 1.15 0 0 0 16.667 3c-.31 0-.607.126-.825.351-.22.226-.342.53-.342.849v6c0 .955-.369 1.87-1.025 2.546A3.45 3.45 0 0 1 12 13.8c-.928 0-1.819-.38-2.475-1.054A3.65 3.65 0 0 1 8.5 10.2v-6c0-.318-.123-.623-.342-.849A1.15 1.15 0 0 0 7.333 3c-.31 0-.606.126-.825.351-.218.226-.341.53-.341.849v6c0 1.591.614 3.117 1.708 4.243A5.75 5.75 0 0 0 12 16.2m5.833 2.4H6.167c-.31 0-.606.126-.825.351-.22.226-.342.53-.342.849s.123.624.342.848c.219.226.515.352.825.352h11.666c.31 0 .607-.126.825-.352.22-.224.342-.53.342-.848s-.123-.623-.342-.849a1.15 1.15 0 0 0-.825-.351"
    />
  </svg>
);
export default SvgUnderlineIcon;
