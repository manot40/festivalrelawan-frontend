import React, { useState, useMemo } from 'react';

import clsx from 'clsx';
import { motion } from 'framer-motion';

type TDropdown = {
  trigger: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Dropdown: React.FC<TDropdown> = ({ children, trigger }) => {
  const [open, setOpen] = useState(false);

  const parsedChildren = useMemo(() => {
    const newChildren = [] as React.ReactNode[];

    React.Children.map(children, (child, key) => {
      let childElement = child as React.ReactElement;
      if (React.isValidElement(child)) {
        // eslint-disable-next-line react/no-children-prop
        childElement = React.createElement('li', {
          className:
            'flex hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white',
          onClick: (e: any) => {
            setOpen(false);
            child.props.onClick?.(e);
          },
          children: child,
          key,
        });
      }
      newChildren.push(childElement);
    });

    return newChildren;
  }, [children]);

  return (
    <div className="relative">
      {open && (
        <div
          className="fixed top-0 left-0 w-screen h-screen z-[998]"
          onClick={() => setOpen(!open)}
        />
      )}
      <div onClick={() => setOpen(!open)}>{trigger}</div>
      <motion.div
        animate={open ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, y: 0 },
          closed: { opacity: 0, y: 8 },
        }}
        transition={{ duration: 0.2 }}
        className={clsx(
          open ? 'block' : 'hidden',
          'absolute top-8 -left-full z-[999] w-44 font-normal bg-white rounded divide-y divide-gray-100 shadow'
        )}>
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-400"
          aria-labelledby="dropdownLargeButton">
          {parsedChildren}
        </ul>
      </motion.div>
    </div>
  );
};

export default React.memo(Dropdown);
