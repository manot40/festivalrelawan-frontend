/* eslint-disable @next/next/no-img-element */
import React from 'react';

import Link from 'next/link';
import { Card } from '..';
import { UserIcon, InformationCircleIcon } from '@heroicons/react/20/solid';

export type TSubject = {
  _id: string;
  name: string;
  story: string;
  avatar: string;
  category?: string;
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const UserCard: React.FC<TSubject & { onStory: (story: TSubject) => void }> = (
  props
) => {
  return (
    <Card className="flex flex-col space-y-2 justify-center items-center">
      <UserAvatar {...props} />
      <p>{props.name}</p>
      <div className="flex space-x-6 text-neutral-600">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={`${apiUrl}/o/user/${props._id}`}>
          <UserIcon className="w-5 h-5" />
        </Link>
        <button onClick={() => props.onStory(props)}>
          <InformationCircleIcon className="w-5 h-5" />
        </button>
      </div>
    </Card>
  );
};

export const UserAvatar: React.FC<Pick<TSubject, 'name' | 'avatar'>> = ({
  name,
  avatar,
}) => {
  return (
    <img
      alt={name}
      src={`${apiUrl}/${avatar}`}
      className="w-20 h-20 rounded-full mx-auto"
    />
  );
};

export default React.memo(UserCard);
