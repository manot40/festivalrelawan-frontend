import type { NextPage } from 'next';

import Link from 'next/link';

import { Button, Container } from '../components';

const Instagram: NextPage = () => {
  return (
    <Container
      lg
      flex
      base
      className="py-24 space-y-24 justify-center items-center">
      <div className="text-center space-y-12">
        <h1>Instagram</h1>
        <p className="text-lg">Mohon menunggu, data sedang diambil...</p>
        <div />
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/festivalrelawan">
          <Button aria-label="Instagram Festival Relawan">
            Lihat Selengkapnya
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Instagram;
