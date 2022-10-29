import type { NextPage } from 'next';
import type { TSubject } from 'components/awards/UserCard';

import { useEffect, useState } from 'react';

import toast from 'react-hot-toast';
import { Container } from 'components';
import { Vote, Nomination } from 'components/awards';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export type TSelection = {
  relawan: TSubject;
  yayasan: TSubject;
  komunitas: TSubject;
};

const Awards: NextPage = () => {
  const [firstLoad, setFirstLoad] = useState(true);
  const [selection, setSelection] = useState({} as TSelection);
  const [volunteers, setVolunteers] = useState([] as TSubject[]);
  const [organizations, setOrganizations] = useState([] as TSubject[]);

  useEffect(() => {
    // Fetch all necessary API data
    (async () => {
      try {
        const [volunteers, organizations] = await Promise.all([
          // fetch(`${apiUrl}/external/api/province`).then((res) =>
          //   res.json().then(({ results }) => results)
          // ),
          fetch(`${apiUrl}/external/festivalrelawan/nominate/volunteer`).then(
            (res) => res.json().then(({ results }) => results)
          ),
          fetch(
            `${apiUrl}/external/festivalrelawan/nominate/organization`
          ).then((res) => res.json().then(({ results }) => results)),
        ]);

        setVolunteers(
          volunteers.map((volunteer: any) => ({
            _id: volunteer._id,
            category: 'relawan',
            story: volunteer.story,
            avatar: volunteer.user.avatar.replace(/(?<=)\?.*/, ''),
            name: volunteer.user.name.first.concat(
              ` ${volunteer.user.name.last}`
            ),
          }))
        );

        setOrganizations(
          organizations.map((org: any) => ({
            _id: org._id,
            story: org.story,
            avatar: org.organization.logo.replace(/(?<=)\?.*/, ''),
            name: org.organization.name,
            category: org.category,
          }))
        );
      } catch (err: any) {
        toast.error('Gagal memuat data. Silakan coba lagi nanti');
      } finally {
        setFirstLoad(false);
      }
    })();
  }, []);

  const nominationProps = { firstLoad, selection, volunteers, organizations };

  return (
    <Container
      lg
      flex
      base
      className="py-24 space-y-24 justify-center items-center">
      <div className="text-center space-y-6">
        <h1>Indorelawan Awards 2022</h1>
        <div
          className="px-4 md:px-24 py-4 mb-4 md:text-xl text-green-700 bg-green-100 rounded-lg"
          role="alert">
          Voting untuk Organisasi dan Relawan terpilih Indorelawan Awards 2022
          telah ditutup. Nantikan hasil akhir Relawan dan Organisasi terpilih
          pada Festival Relawan 2022
        </div>
        <Nomination {...nominationProps} mutateSelection={setSelection} />
      </div>
      <Vote selection={selection} />
    </Container>
  );
};

export default Awards;
