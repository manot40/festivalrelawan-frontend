import clsx from 'clsx';
import React from 'react';

import { useBreakpoints } from 'hooks';

type TRundown = {
  name: string;
  start: string;
  end: string;
};

const Rundown: React.FC<{ data: TRundown[] }> = ({ data }) => {
  const tablePadd = 'py-3 px-2';
  const tableStyle = 'border border-white border-collapse';

  const { md } = useBreakpoints();

  return (
    <table className={clsx('w-full', tableStyle)}>
      <thead>
        <tr className="text-left text-white">
          {md && <th className={clsx(tablePadd, tableStyle)}>Waktu</th>}
          <th className={clsx(tablePadd, tableStyle)}>Acara</th>
        </tr>
      </thead>
      <tbody>
        {data.map((value, i) =>
          md ? (
            <tr
              key={i}
              className="text-left text-white hover:text-black cursor-default">
              <td className={clsx(tablePadd, tableStyle)}>
                <p>
                  {value.start} - {value.end}
                </p>
              </td>
              <td className={clsx(tablePadd, tableStyle)}>
                <b>{value.name}</b>
              </td>
            </tr>
          ) : (
            <tr
              key={i}
              className="text-left text-white hover:text-black cursor-default">
              <td className={clsx(tablePadd, tableStyle)}>
                <b>{value.name}</b>
                <p>
                  {value.start} - {value.end}
                </p>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default React.memo(Rundown);
