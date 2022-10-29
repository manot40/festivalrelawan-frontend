import React from 'react';

// Libraries
import Image from 'next/image';
import { motion } from 'framer-motion';

// Component and Hook
import { Container, Hero } from '..';
import { useBreakpoints } from 'hooks';
// Assets
import Logo from '../../public/images/logo.png';

const SectionOne: React.FC = () => {
  const { md } = useBreakpoints();
  return (
    <section id="hero">
      <Hero>
        <Container lg flex className="h-screen justify-center items-center">
          <motion.div
            className="text-center space-y-5 my-auto"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.2 }}>
            <Image
              priority
              src={Logo}
              width={md ? 340 : 240}
              height={md ? 170 : 120}
              style={{ margin: '0 auto' }}
              alt="Festival Relawan Logo"
            />
            <h1 className="text-blue-900">Bergerak Bersama Berdampak Besar</h1>
            <h3>
              Mengajak kamu mengambil peran bergerak bersama-sama untuk
              Indonesia
            </h3>
            <div />
            <p className="text-xl md:text-2xl">
              Sabtu, 14 Desember 2022, 09.00-21.00 WIB
              <br />
              Kuningan City Ballroom Lantai P7
            </p>
          </motion.div>
        </Container>
      </Hero>
    </section>
  );
};

export default React.memo(SectionOne);
