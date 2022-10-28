/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import type { NextPage } from 'next';
import { Card } from '../components';

import { UserIcon, InformationCircleIcon } from '@heroicons/react/20/solid';

const Awards: NextPage = () => {
  return (
    <div
      style={{ minHeight: 'calc(100vh - 80px)' }}
      className="flex justify-center items-center p-8 lg:px-0">
      <div className="text-center space-y-6 max-w-screen-lg">
        <h1>Indorelawan Awards 2022</h1>
        <div
          className="px-4 md:px-24 py-4 mb-4 md:text-xl text-green-700 bg-green-100 rounded-lg"
          role="alert">
          Voting untuk Organisasi dan Relawan terpilih Indorelawan Awards 2022
          telah ditutup. Nantikan hasil akhir Relawan dan Organisasi terpilih
          pada Festival Relawan 2022
        </div>
        <div className="grid grid-rows-3 md:grid-cols-3 gap-4">
          <Card
            className="max-h-96 overflow-y-auto"
            header={
              <label className="font-bold w-full">Pilih Relawan</label>
            }></Card>
          <Card
            className="max-h-96 overflow-y-auto"
            header={
              <label className="font-bold w-full">
                Pilih Organisasi Yayasan
              </label>
            }></Card>
          <Card
            className="max-h-96 overflow-y-auto"
            header={
              <label className="font-bold w-full">
                Pilih Organisasi Komunitas
              </label>
            }></Card>
        </div>
      </div>
    </div>
  );
};

const UserCard: React.FC<{
  user: { _id: string; name: string; about: string; avatar: string };
}> = ({ user }) => {
  return (
    <Card className="flex flex-col space-y-2 justify-center items-center">
      <img
        alt={user.name}
        src={user.avatar}
        className="w-20 h-20 rounded-full"
      />
      <p>{user.name}</p>
      <div className="flex space-x-6 text-neutral-600">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.indorelawan.org/o/user/${user._id}`}>
          <UserIcon className="w-5 h-5" />
        </Link>
        <button>
          <InformationCircleIcon className="w-5 h-5" />
        </button>
      </div>
    </Card>
  );
};

export default Awards;
