import React, { useState } from 'react';

import { Card, Modal } from '..';
import UserCard, { UserAvatar, type TSubject } from './UserCard';

type TNomination = {
  firstLoad: boolean;
  volunteers: TSubject[];
  organizations: TSubject[];
};

const Nomination: React.FC<TNomination> = ({
  volunteers,
  organizations,
  firstLoad,
}) => {
  const [subject, setSubject] = useState({} as TSubject);

  const closeModal = () => setSubject({} as TSubject);

  const renderCard = (subject: TSubject[], filter = '') => {
    if (firstLoad)
      return Array(2)
        .fill(0)
        .map((_, i) => <UserCard key={i} onStory={setSubject} />);

    if (!subject.length)
      return (
        <div className="h-80 grid content-center">
          Tidak ada Relawan yang dinominasikan saat ini.
        </div>
      );

    return subject
      .filter(({ category = '' }) => category.includes(filter))
      .map((data) => (
        <UserCard key={data._id} onStory={setSubject} {...data} />
      ));
  };

  return (
    <div className="md:max-h-[27.5rem] overflow-hidden">
      <Modal isOpen={!!subject.story} onClose={closeModal}>
        <Modal.Header>
          <h3 className="text-lg font-medium text-neutral-900">
            Cerita {subject.category || 'Relawan'}
          </h3>
        </Modal.Header>
        <Modal.Body>
          <div className="mx-auto space-y-4 py-2">
            <UserAvatar {...subject} />
            <h1 className="text-2xl text-blue-900">{subject.name}</h1>
            <p className="md:text-lg">{subject.story}</p>
          </div>
        </Modal.Body>
      </Modal>
      <div className="grid grid-rows-3 md:grid-cols-3 gap-4">
        <Card>
          <Card.Header>
            <label className="font-bold w-full">Pilih Relawan</label>
          </Card.Header>
          <Card.Body className="max-h-96 overflow-y-auto space-y-4">
            {renderCard(volunteers)}
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <label className="font-bold w-full">Pilih Organisasi Yayasan</label>
          </Card.Header>
          <Card.Body className="max-h-96 overflow-y-auto space-y-4">
            {renderCard(organizations, 'yayasan')}
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <label className="font-bold w-full">
              Pilih Organisasi Komunitas
            </label>
          </Card.Header>
          <Card.Body className="max-h-96 overflow-y-auto space-y-4">
            {renderCard(organizations, 'komunitas')}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Nomination;
