import React from 'react';
import clsx from 'clsx';

type TButton = {} & React.HTMLAttributes<HTMLButtonElement>;

const Button: React.FC<TButton> = ({ children, ...restProps }) => {
  return (
    <button
      {...restProps}
      className={clsx(
        restProps.className,
        'py-2 px-5 text-sm font-medium transition-colors text-sky-500 focus:outline-none bg-white rounded-lg border border-sky-500 hover:bg-sky-500 hover:text-white focus:z-10'
      )}>
      {children}
    </button>
  );
};

export default React.memo(Button);
