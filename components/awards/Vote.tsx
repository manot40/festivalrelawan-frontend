/* eslint-disable @next/next/no-img-element */
import type { TSelection } from '../../pages/awards';
import type { TSubject } from './UserCard';

import React from 'react';

import clsx from 'clsx';
import { Button } from '..';

type TVote = {
  selection: TSelection;
} & React.HTMLAttributes<HTMLDivElement>;

const Vote: React.FC<TVote> = ({
  children,
  selection,
  className,
  ...restProps
}) => {
  const votes = Object.keys(selection)
    .filter((key) => selection[key as keyof TSelection])
    .map((key) => selection[key as keyof TSelection] as TSubject);

  const handleVote = () => {};

  return (
    <div
      {...restProps}
      className={clsx(
        className,
        votes.length
          ? 'translate-y-0 bottom-4 md:bottom-8'
          : 'translate-y-full bottom-0',
        'fixed transition-transform duration-300 bg-gray-50 border border-gray-100 shadow-lg rounded-lg'
      )}>
      <div className="flex p-2 justify-between space-x-4 items-center">
        <div className="flex -space-x-4">
          {votes.map((vote) => (
            <img
              key={vote._id}
              className="w-10 h-10 rounded-full border-2 border-white"
              src={`${process.env.NEXT_PUBLIC_API_URL}${vote.avatar}`}
              alt={vote.name}
            />
          ))}
        </div>
        <p className="text-sm md:text-base select-none">
          {votes.length} nominasi terpilih
        </p>
        <Button aria-label="Kirim Voting" onClick={handleVote}>
          Vote!
        </Button>
      </div>
    </div>
  );
};

export default React.memo(Vote);
