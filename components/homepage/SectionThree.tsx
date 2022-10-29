/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

// Libraries
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Components
import { Button, Slide, Container } from '..';

// Assets
import * as Sponsor from './SponsorImages';
import MapImg from 'assets/images/map.png';

const SectionThree: React.FC = () => {
  const logoSize = 200;
  const imgWrap = 'flex justify-center';
  const style = { maxHeight: 115, userDrag: 'none' };

  return (
    <section className="w-screen py-28">
      <Container lg flex className="h-full justify-center items-center">
        <motion.div
          className="text-center space-y-14 md:space-y-20 my-auto max-w-screen"
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          initial={{ opacity: 0 }}>
          <div className="space-y-8">
            <h2 className="text-sky-500">Lokasi</h2>
            <div className="block md:flex space-y-4 md:space-x-8 md:space-y-0">
              <Link
                href="https://goo.gl/maps/PkPy6u2xK9qhizms8"
                rel="noopener noreferrer"
                target="_blank">
                <Image
                  src={MapImg}
                  width={500}
                  height={300}
                  alt="Lokasi Festival Relawan"
                />
              </Link>
              <div className="text-2xl space-y-8 md:text-left">
                <p>Kuningan City Ballroom Lantai P7</p>
                <p>
                  Jl. Prof. DR. Satrio No.18, RT.14/RW.4
                  <br /> Kuningan, Karet Kuningan, Setia Budi Kota
                  <br /> Jakarta Selatan
                  <br /> DKI Jakarta
                </p>
                <Button>Bantuan Untuk Penyandang Disabilitas</Button>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-sky-500">Inisiator</h2>
            <Slide
              hideArrow
              config={{
                autoplayInterval: 2000,
                enablePagination: false,
                stopAutoplayOnInteraction: false,
              }}>
              {Sponsor.Intiator.map((img, i) => (
                <div key={i} className={imgWrap}>
                  <Image
                    {...img}
                    style={style}
                    width={logoSize}
                    height={logoSize}
                  />
                </div>
              ))}
            </Slide>
          </div>
          <div className="space-y-4">
            <h2 className="text-sky-500">Dipersembahkan Oleh</h2>
            <Slide
              hideArrow
              config={{
                slidesToShow: 2,
                enablePagination: false,
                autoplayInterval: 2000,
                stopAutoplayOnInteraction: false,
              }}>
              {Sponsor.Presenter.map((img, i) => (
                <div key={i} className={imgWrap}>
                  <Image
                    {...img}
                    style={style}
                    width={logoSize}
                    height={logoSize}
                  />
                </div>
              ))}
            </Slide>
          </div>
          <div className="space-y-4">
            <h2 className="text-sky-500">Didukung Oleh</h2>
            <Slide
              hideArrow
              config={{
                autoplayInterval: 2000,
                enablePagination: false,
                stopAutoplayOnInteraction: false,
              }}>
              {Sponsor.Supporter.map((img, i) => (
                <div key={i} className={imgWrap}>
                  <Image
                    {...img}
                    style={style}
                    width={logoSize}
                    height={logoSize}
                  />
                </div>
              ))}
            </Slide>
          </div>
          <div className="space-y-4">
            <h2 className="text-sky-500">Media Partners</h2>
            <Slide
              hideArrow
              config={{
                autoplayInterval: 2000,
                enablePagination: false,
                stopAutoplayOnInteraction: false,
              }}>
              {Sponsor.Media.map((img, i) => (
                <div key={i} className={imgWrap}>
                  <Image
                    {...img}
                    style={style}
                    width={logoSize}
                    height={logoSize}
                  />
                </div>
              ))}
            </Slide>
          </div>
          <div className="space-y-4">
            <h2 className="text-sky-500">Venue Partners</h2>
            <Slide
              hideArrow
              config={{
                slidesToShow: 2,
                enablePagination: false,
                autoplayInterval: 2000,
                stopAutoplayOnInteraction: false,
              }}>
              {Sponsor.Venue.map((img, i) => (
                <div key={i} className={imgWrap}>
                  <Image
                    {...img}
                    style={style}
                    width={logoSize}
                    height={logoSize}
                  />
                </div>
              ))}
            </Slide>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default React.memo(SectionThree);
