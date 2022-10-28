import React, { useEffect } from 'react';

import { XMarkIcon } from '@heroicons/react/20/solid';
import { motion, AnimatePresence } from 'framer-motion';
import findChildren from '../utils/findChildren';

interface IProps extends React.BaseHTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  onProceed?: () => void;
}

const Modal = ({ children, isOpen, onClose, onProceed }: IProps) => {
  const Header = findChildren(children, 'Header');
  const Body = findChildren(children, 'Body');
  const Footer = findChildren(children, 'Footer');

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      if (isOpen) body.style.overflow = 'hidden';
      else body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="1"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ duration: 0.3 }}
          className="bg-neutral-600 top-0 left-0 fixed w-full h-full z-[998]"
        />
      )}
      {isOpen && (
        <motion.div
          key="2"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="flex overflow-y-auto overflow-x-hidden fixed top-0 left-0 z-[999] inset-0 mb-4 w-full md:inset-0 h-modal md:h-full justify-center items-center">
          <div className="relative p-4 w-full max-w-2xl h-full md:h-auto max-h-screen">
            <div
              onClick={onClose}
              className="top-0 left-0 fixed w-full h-full z-40"
            />
            <div className="relative z-50 border-neutral-800 bg-white rounded-lg shadow">
              {Header.length > 0 && (
                <div className="flex justify-between items-center p-4 rounded-t border-b border-gray-200">
                  {Header.map((child, i) => (
                    <React.Fragment key={i}>{child}</React.Fragment>
                  ))}
                  <button type="button">
                    <XMarkIcon
                      onClick={onClose}
                      className="w-8 h-8 text-neutral-600"
                    />
                  </button>
                </div>
              )}
              {Body.length > 0 && (
                <div className="p-6 space-y-6">
                  {Body.map((child, i) => (
                    <React.Fragment key={i}>{child}</React.Fragment>
                  ))}
                </div>
              )}
              {Footer.length > 0 && (
                <div className="flex justify-end items-center p-4 space-x-2 rounded-b border-t border-gray-200">
                  {Footer.map((child, i) => (
                    <React.Fragment key={i}>{child}</React.Fragment>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Header = ({ children }: React.HTMLAttributes<any>) =>
  children as React.ReactElement;
Header.displayName = 'Header';
Modal.Header = Header;

const Body = ({ children }: React.HTMLAttributes<any>) =>
  children as React.ReactElement;
Body.displayName = 'Body';
Modal.Body = Body;

const Footer = ({ children }: React.HTMLAttributes<any>) =>
  children as React.ReactElement;
Footer.displayName = 'Footer';
Modal.Footer = Footer;

export default Modal;
