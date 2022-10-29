import React from 'react';

type THero = {
  overlay?: boolean | JSX.Element;
  overlayColor?: string;
  overlayOpacity?: number;
} & React.HTMLAttributes<HTMLDivElement>;

const Hero: React.FC<THero> = ({
  overlay = true,
  overlayColor,
  overlayOpacity = 0.95,
  children,
  ...restProps
}) => {
  return (
    <div
      {...restProps}
      className={
        'relative bg-no-repeat bg-center bg-cover ' + restProps.className || ''
      }
      style={{
        backgroundImage: 'url("/images/hands.svg")',
        ...restProps.style,
      }}>
      {typeof overlay === 'boolean' && overlay ? (
        <div
          style={{
            backgroundColor: overlayColor || 'white',
            opacity: overlayOpacity,
          }}>
          {children}
        </div>
      ) : (
        overlay || children
      )}
    </div>
  );
};

export default React.memo(Hero);
