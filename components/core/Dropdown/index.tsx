import React, { useState, useMemo, useEffect, useRef } from 'react';

import clsx from 'clsx';
import { motion } from 'framer-motion';

type TDropdown = {
  list?: boolean;
  trigger: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Dropdown: React.FC<TDropdown> = ({
  children,
  list,
  className,
  trigger,
  ...restProps
}) => {
  const [open, setOpen] = useState(false);
  const parent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (e.target instanceof Node && !parent.current?.contains(e.target))
        setOpen(false);
    };

    document.addEventListener('click', handleOutsideClick);

    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const parsedChildren = useMemo(() => {
    if (!list) return children;

    return React.Children.map(children, (child, key) => {
      let childElement = child;

      if (React.isValidElement(child)) {
        // eslint-disable-next-line react/no-children-prop
        childElement = React.createElement('li', {
          className: 'flex hover:bg-gray-100',
          onClick: (e: any) => {
            setOpen(false);
            child.props.onClick?.(e);
          },
          children: child,
          key,
        });
      }

      return childElement;
    });
  }, [list, children]);

  const Trigger = useMemo(() => {
    if (!trigger && typeof trigger !== 'object') return trigger;

    return React.cloneElement(trigger as React.ReactElement, {
      onClick: (e: any) => {
        setOpen(!open);
        if (React.isValidElement(trigger)) trigger.props.onClick?.(e);
      },
    });
  }, [trigger, open]);

  return (
    <div className="relative" ref={parent}>
      {/* @ts-ignore */ Trigger}
      <motion.div
        {...restProps}
        animate={open ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, y: 0 },
          closed: { opacity: 0, y: 8 },
        }}
        transition={{ duration: 0.2 }}
        className={clsx(
          className,
          open ? 'block' : 'hidden',
          'absolute top-8 -left-full z-[999] w-44 font-normal bg-white rounded divide-y divide-gray-100 shadow'
        )}>
        {list ? (
          <ul
            className="py-1 text-sm text-gray-700"
            aria-labelledby="dropdownLargeButton">
            {parsedChildren}
          </ul>
        ) : (
          parsedChildren
        )}
      </motion.div>
    </div>
  );
};

export default React.memo(Dropdown);
