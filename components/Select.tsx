import React, { useId } from 'react';

import clsx from 'clsx';
import findChildren from '../utils/findChildren';

type TSelect = {
  danger?: boolean;
  warning?: boolean;
  success?: boolean;
  disabled?: boolean;
  label?: string;
  helper?: string | React.ReactNode;
  formControl?: boolean;
  divClassName?: string;
} & React.HTMLAttributes<HTMLSelectElement>;

const Select = ({
  label,
  helper,
  danger,
  warning,
  success,
  disabled,
  children,
  className,
  divClassName,
  formControl = true,
  ...restProps
}: TSelect) => {
  const id = useId();

  const Options = findChildren(children, 'Option');

  return (
    <Wrapper enable={formControl} className={divClassName}>
      {label && (
        <label
          htmlFor={restProps.id || id}
          className={clsx(
            danger && 'text-red-700',
            success && 'text-green-700',
            warning && 'text-yellow-700',
            !warning && !success && !danger && 'text-gray-900',
            'block mb-2 text-sm font-medium transition-all duration-300'
          )}>
          {label}
        </label>
      )}
      <select
        {...restProps}
        className={clsx(
          className,
          'block w-full p-2 text-sm rounded-lg border transition-all duration-300',
          danger && 'input-danger',
          success && 'input-success',
          warning && 'input-warning',
          !warning && !success && !danger && 'input-default'
        )}
        id={restProps.id || id}>
        {Options?.map((child, i) => (
          <React.Fragment key={i}>{child}</React.Fragment>
        ))}
      </select>
      {helper && (
        <p
          className={clsx(
            danger && 'text-red-700',
            success && 'text-green-700',
            warning && 'text-yellow-700',
            !warning && !success && !danger && 'text-gray-500',
            'mt-2 text-sm transition-all duration-300'
          )}>
          {helper}
        </p>
      )}
    </Wrapper>
  );
};

const Wrapper: React.FC<any> = ({ children, enable, className }) =>
  enable ? (
    <div className={clsx(className, 'text-left')}>{children}</div>
  ) : (
    <React.Fragment>{children}</React.Fragment>
  );

const Option = ({
  children,
  ...restProps
}: React.HTMLAttributes<HTMLOptionElement>) => (
  <option {...restProps}>{children}</option>
);
Option.displayName = 'Option';
Select.Option = Option;

export default Select;
