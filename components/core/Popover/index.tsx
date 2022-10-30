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
            transition={{ duration: 0.2 }}
            exit={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.8, x: '-50%', y: -10, opacity: 0 }}
            className={clsx(
              className,
              'absolute bottom-full left-1/2 z-10 text-sm font-light rounded-lg shadow-sm min-w-max text-white bg-neutral-800'
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
