import React, { useState } from 'react';

import clsx from 'clsx';
import findChildren from 'utils/findChildren';
import { motion, AnimatePresence } from 'framer-motion';

type TPopover = {} & React.HTMLAttributes<HTMLDivElement>;

const Popover = ({ children, className, ...restProps }: TPopover) => {
  const [isOpen, setIsOpen] = useState(false);

  const Body = findChildren(children, 'Body');
  const Trigger = findChildren(children, 'Trigger');

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative">
      <AnimatePresence>
        {isOpen && (
          // @ts-ignore
          <motion.div
            {...restProps}
            role="tooltip"
            exit={{ y: 5, x: '-50%', opacity: 0 }}
            initial={{ y: 5, x: '-50%', opacity: 0 }}
            animate={{ y: -10, x: '-50%', opacity: 1, display: 'inline-block' }}
            className={clsx(
              className,
              'hidden bottom-full left-1/2 absolute z-10 text-sm font-light rounded-lg shadow-sm border text-gray-500 bg-white border-gray-200'
            )}>
            {Body.map((child, i) => (
              <React.Fragment key={i}>{child}</React.Fragment>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <div onMouseEnter={toggle} onMouseLeave={toggle}>
        {Trigger[0]}
      </div>
    </div>
  );
};

const Trigger = ({ children }: { children: React.ReactElement }) => (
  <>{children}</>
);
Trigger.displayName = 'Trigger';
Popover.Trigger = Trigger;

const Body = ({
  children,
  className,
  ...restProps
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...restProps} className={clsx(className || 'py-1 px-2')}>
    {children}
  </div>
);
Body.displayName = 'Body';
Popover.Body = Body;

export default Popover;
