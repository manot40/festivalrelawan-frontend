/* eslint-disable @next/next/no-img-element */
import React from 'react';

import clsx from 'clsx';
import Link from 'next/link';

import { Card } from '..';
import { UserIcon, InformationCircleIcon } from '@heroicons/react/20/solid';

export type TSubject = {
  _id: string;
  name: string;
  story: string;
  avatar: string;
  category: string;
};

type TUserCard = {
  selected?: string;
  onSelect?: (id: string, category: string) => void;
  onStory?: (story: TSubject) => void;
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const UserCard: React.FC<Partial<TSubject> & TUserCard> = (props) => {
  return (
    <Card
      onClick={() =>
        props._id && props.onSelect?.(props._id, props.category || 'relawan')
      }
      className="cursor-pointer">
      <Card.Body
        className={clsx(
          props._id && props.selected == props._id
            ? 'bg-green-600 rounded-lg text-white'
            : 'text-neutral-700',
          'flex flex-col space-y-2 justify-center items-center transition-colors'
        )}>
        <UserAvatar {...props} />
        {props?.name ? (
          <p>{props.name}</p>
        ) : (
          <div className="animate-pulse w-36 h-6 bg-neutral-300" />
        )}
        <div className="flex space-x-6">
          {props?._id ? (
            <>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                href={`${apiUrl}/o/user/${props._id}`}>
                <UserIcon
                  className={clsx('w-5 h-5', props?._id || 'animate-pulse')}
                />
              </Link>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  props.onStory?.(props as TSubject);
                }}>
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
