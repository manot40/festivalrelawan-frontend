import React, { useState } from 'react';

import { Card, Modal } from '..';
import UserCard, { UserAvatar, type TSubject } from './UserCard';

type TNomination = {
  volunteers: TSubject[];
  organizations: TSubject[];
};

const Nomination: React.FC<TNomination> = ({ volunteers, organizations }) => {
  const [subject, setSubject] = useState({} as TSubject);

  const closeModal = () => setSubject({} as TSubject);

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
            <h3>{subject.name}</h3>
            <p>{subject.story}</p>
          </div>
        </Modal.Body>
      </Modal>
      <div className="grid grid-rows-3 md:grid-cols-3 gap-4">
        <Card className="max-h-96 overflow-y-auto space-y-4">
          <Card.Header>
            <label className="font-bold w-full">Pilih Relawan</label>
          </Card.Header>
          <Card.Body>
            {volunteers.length > 0
              ? volunteers.map((volunteer) => (
                  <UserCard
                    key={volunteer._id}
                    onStory={setSubject}
                    {...volunteer}
                  />
                ))
              : Array(2)
                  .fill(0)
                  .map((_, i) => <UserCard key={i} onStory={setSubject} />)}
          </Card.Body>
        </Card>
        <Card className="max-h-96 overflow-y-auto space-y-4">
          <Card.Header>
            <label className="font-bold w-full">Pilih Organisasi Yayasan</label>
          </Card.Header>
          <Card.Body>
            {organizations.length > 0
              ? organizations
                  .filter(({ category }) => category === 'yayasan')
                  .map((community) => (
                    <UserCard
                      key={community._id}
                      onStory={setSubject}
                      {...community}
                    />
                  ))
              : Array(2)
                  .fill(0)
                  .map((_, i) => <UserCard key={i} onStory={setSubject} />)}
          </Card.Body>
        </Card>
        <Card className="max-h-96 overflow-y-auto space-y-4">
          <Card.Header>
            <label className="font-bold w-full">
              Pilih Organisasi Komunitas
            </label>
          </Card.Header>
          <Card.Body>
            {organizations.length > 0
              ? organizations
                  .filter(({ category }) => category === 'komunitas')
                  .map((community) => (
                    <UserCard
                      key={community._id}
                      onStory={setSubject}
                      {...community}
                    />
                  ))
              : Array(2)
                  .fill(0)
                  .map((_, i) => <UserCard key={i} onStory={setSubject} />)}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Nomination;
