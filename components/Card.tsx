import React from 'react';

type TCard = {
  header?: JSX.Element | string;
} & React.HTMLAttributes<HTMLDivElement>;

const Card: React.FC<TCard> = ({ header, ...restProps }) => {
  return (
    <div className="w-full bg-white rounded-lg border shadow-md">
      {header && (
        <div className="p-3 flex flex-wrap bg-gray-50 rounded-t-lg border-b border-gray-200">
          {header}
        </div>
      )}
      <div {...restProps} className={'p-5 ' + restProps.className} />
    </div>
  );
};

export default React.memo(Card);
