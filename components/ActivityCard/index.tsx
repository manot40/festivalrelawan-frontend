/* eslint-disable @next/next/no-img-element */
import React from 'react';

import Link from 'next/link';

import { Card, Popover } from 'components';
import { CalendarIcon, MapPinIcon } from '@heroicons/react/20/solid';

type TActivityCard = {
  data: Activity;
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const ActivityCard: React.FC<TActivityCard> = ({ data }) => {
  console.log(data);
  return (
    <Card className="max-w-[18rem]">
      <Card.Body className="font-typo text-left">
        <div className="h-32 overflow-hidden rounded-t">
          <Link href={`${apiUrl}/o/activity/${data._id}`}>
            <img
              alt={data.title}
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_STORAGE_URL}${data.media[0].access_path}`}
            />
          </Link>
        </div>
        <div className="flex flex-col p-4 space-y-6">
          <div className="space-y-1">
            <Link
              href={`${apiUrl}/o/activity/${data._id}`}
              className="font-semibold text-gray-800 text-lg leading-6 hover:text-sky-500">
              {data.title}
            </Link>
            <p className="text-sm text-gray-600">{data.organization.name}</p>
          </div>
          <div className="space-y-2 select-none">
            <div className="flex items-center space-x-2">
              <Popover className="bg-sky-100 text-sky-500">
                <Popover.Trigger>
                  <div className="p-1.5 bg-sky-100 text-sky-500 rounded-md">
                    <CalendarIcon className="w-4 h-4" />
                  </div>
                </Popover.Trigger>
                <Popover.Body className="font-medium py-1 px-2">
                  Deadline Pendaftaran
                </Popover.Body>
              </Popover>
              <p className="text-sm font-medium">
                {Intl.DateTimeFormat('id', {
                  dateStyle: 'long',
                }).format(new Date(data.registration_deadline))}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Popover className="bg-sky-100 text-sky-500">
                <Popover.Trigger>
                  <div className="p-1.5 bg-sky-100 text-sky-500 rounded-md">
                    <MapPinIcon className="w-4 h-4" />
                  </div>
                </Popover.Trigger>
                <Popover.Body className="font-medium py-1 px-2">
                  Lokasi Event
                </Popover.Body>
              </Popover>
              <p className="text-sm font-medium">{data.regency_city.name}</p>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default React.memo(ActivityCard);
