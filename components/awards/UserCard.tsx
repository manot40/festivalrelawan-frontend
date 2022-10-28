/* eslint-disable @next/next/no-img-element */
import React from 'react';

import Link from 'next/link';
import { Card } from '..';
import { UserIcon, InformationCircleIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';

export type TSubject = {
  _id: string;
  name: string;
  story: string;
  avatar: string;
  category?: string;
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const UserCard: React.FC<
  Partial<TSubject> & { onStory: (story: TSubject) => void }
> = (props) => {
  return (
    <Card className="flex flex-col space-y-2 justify-center items-center">
      <Card.Body>
        <UserAvatar {...props} />
        {props?.name ? (
          <p>{props.name}</p>
        ) : (
          <div className="animate-pulse w-36 h-6 bg-neutral-300" />
        )}
        <div className="flex space-x-6 text-neutral-600">
          {props?._id ? (
            <>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={`${apiUrl}/o/user/${props._id}`}>
                <UserIcon
                  className={clsx('w-5 h-5', props?._id || 'animate-pulse')}
                />
              </Link>
              <button onClick={() => props.onStory(props as TSubject)}>
                <InformationCircleIcon className="w-5 h-5" />
              </button>
            </>
          ) : (
            <>
              <div className="w-5 h-5 animate-pulse bg-neutral-300" />
              <div className="w-5 h-5 animate-pulse bg-neutral-300" />
            </>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export const UserAvatar: React.FC<
  Pick<Partial<TSubject>, 'name' | 'avatar'>
> = (props) => {
  const style = 'w-20 h-20 rounded-full mx-auto';

  if (!props?.name)
    return <div className={style.concat(' animate-pulse bg-neutral-300')} />;

  return (
    <img alt={props.name} src={`${apiUrl}/${props.avatar}`} className={style} />
  );
};

export default React.memo(UserCard);
