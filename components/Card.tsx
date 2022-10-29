import React from 'react';

import clsx from 'clsx';
import findChildren from '../utils/findChildren';

type TCard = {} & React.HTMLAttributes<HTMLDivElement>;

const Card = ({ children, className, ...restProps }: TCard) => {
  const Header = findChildren(children, 'Header');
  const Body = findChildren(children, 'Body');
  const Footer = findChildren(children, 'Footer');

  return (
    <div
      {...restProps}
      className={clsx(
        className,
        'w-full bg-white rounded-lg border shadow-md'
      )}>
      {Header.map((child, i) => (
        <React.Fragment key={i}>{child}</React.Fragment>
      ))}
      {Body.map((child, i) => (
        <React.Fragment key={i}>{child}</React.Fragment>
      ))}
      {Footer.map((child, i) => (
        <React.Fragment key={i}>{child}</React.Fragment>
      ))}
    </div>
  );
};

const Header = ({
  children,
  className,
  ...restProps
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    {...restProps}
    className={clsx(
      className,
      'p-3 flex flex-wrap bg-gray-50 rounded-t-lg border-b border-gray-200'
    )}>
    {children}
  </div>
);
Header.displayName = 'Header';
Card.Header = Header;

const Body = ({
  children,
  className,
  ...restProps
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...restProps} className={clsx(className, 'p-5')}>
    {children}
  </div>
);
Body.displayName = 'Body';
Card.Body = Body;

const Footer = ({
  children,
  className,
  ...restProps
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    {...restProps}
    className={clsx(
      className,
      'p-3 flex flex-wrap bg-gray-50 rounded-b-lg border-t border-gray-200'
    )}>
    {children}
  </div>
);
Footer.displayName = 'Footer';
Card.Footer = Footer;

export default Card;
