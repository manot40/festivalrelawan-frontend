import React from 'react';

import findChildren from '../utils/findChildren';

type TCard = {} & React.HTMLAttributes<HTMLDivElement>;

const Card = ({ children, ...restProps }: TCard) => {
  const Header = findChildren(children, 'Header');
  const Body = findChildren(children, 'Body');
  const Footer = findChildren(children, 'Footer');

  return (
    <div className="w-full bg-white rounded-lg border shadow-md">
      {Header.length > 0 && (
        <div className="p-3 flex flex-wrap bg-gray-50 rounded-t-lg border-b border-gray-200">
          {Header.map((child, i) => (
            <React.Fragment key={i}>{child}</React.Fragment>
          ))}
        </div>
      )}
      {Body.length > 0 && (
        <div className={'p-5 ' + restProps.className}>
          {Body.map((child, i) => (
            <React.Fragment key={i}>{child}</React.Fragment>
          ))}
        </div>
      )}
      {Footer.length > 0 && (
        <div className="p-3 flex flex-wrap bg-gray-50 rounded-b-lg border-t border-gray-200">
          {Footer.map((child, i) => (
            <React.Fragment key={i}>{child}</React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

const Header = ({ children }: React.HTMLAttributes<any>) =>
  children as React.ReactElement;
Header.displayName = 'Header';
Card.Header = Header;

const Body = ({ children }: React.HTMLAttributes<any>) =>
  children as React.ReactElement;
Body.displayName = 'Body';
Card.Body = Body;

const Footer = ({ children }: React.HTMLAttributes<any>) =>
  children as React.ReactElement;
Footer.displayName = 'Footer';
Card.Footer = Footer;

export default Card;
