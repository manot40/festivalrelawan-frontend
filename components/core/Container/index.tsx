import React from 'react';

import clsx from 'clsx';

type TContainer = {
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  base?: boolean;
  flex?: boolean;
} & React.BaseHTMLAttributes<HTMLDivElement>;

const Container: React.FC<TContainer> = ({
  children,
  sm,
  md,
  lg,
  xl,
  base,
  flex,
  className,
  ...restProps
}) => {
  return (
    <div
      {...restProps}
      className={clsx(
        className,
        flex && 'flex',
        sm && 'max-w-screen-sm',
        md && 'max-w-screen-md',
        lg && 'max-w-screen-lg',
        xl && 'max-w-screen-xl',
        base && 'min-h-[calc(100vh-80px)]',
        'w-screen px-6 md:px-4 mx-auto'
      )}>
      {children}
    </div>
  );
};

export default React.memo(Container);
