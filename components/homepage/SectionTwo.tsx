import React from 'react';

// Libraries
import Link from 'next/link';
import { motion } from 'framer-motion';

// Components
import { Container } from '..';
import Rundown from './Rundown';
import { Card, Slide, Button } from '..';

const SectionTwo: React.FC = () => {
  return (
    <section className="w-screen py-28 bg-sky-500">
      <Container lg flex className="h-full justify-center items-center">
        <motion.div
          className="text-center space-y-20 my-auto max-w-screen"
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          initial={{ opacity: 0 }}>
          <div className="space-y-6 px-6 lg:px-0">
            <h2 className="text-white">Yang Seru di Festival Relawan 2022</h2>
            <Slide className="flex justify-center select-none md:space-x-4">
              {events.map((event, i) => (
                <Card key={i}>
                  <Card.Header>
                    <label className="font-bold w-full">{event.title}</label>
                  </Card.Header>
                  <Card.Body>{event.body}</Card.Body>
                </Card>
              ))}
            </Slide>
          </div>
          <div className="space-y-6 px-6 lg:px-0">
            <h2 className="text-white">Rundown</h2>
            <Rundown data={rundown} />
          </div>
          <div className="space-y-6 px-6 lg:px-0">
            <h2 className="text-white">Aktivitas Bulan Relawan Nasional</h2>
            <p>Todo</p>
            <br />
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.indorelawan.org/o/activity/search">
              <Button className="text-lg hover:border hover:border-white">
                Lihat Aktivitas Lainnya
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

const events = [
  {
    title: 'Panel Diskusi',
    body: 'Satu titik yang mempertemukan semua pihak untuk berdiskusi, kolaborasi dan beraksi untuk Indonesia',
  },
  {
    title: 'Booth Komunitas',
    body: 'Terdapat berbagai showcase komunitas yang bisa kamu datangi dan kegiatan mini-volunteering yang bisa kamu ikuti. Berikan dampakmu disini!',
  },
  {
    title: 'Pasar Toleransi',
    body: 'Sebuah ruang interaksi yang dapat menjadi tempat untuk saling bertukar pikiran mengenai perdamaian dari berbagai kelompok',
  },
  {
    title: 'Sudut Kolaborasi',
    body: 'Dalam sudut kolaborasi, kamu bisa memulai aksi sosialmu bersama untuk dampak yang berlipat sekarang juga.',
  },
  {
    title: 'Bazaar',
    body: 'Berkolaborasi dengan usaha lokal yang memamerkan produk-produk lokal (F&B, Fashion, dan lain-lain)',
  },
  {
    title: 'Special Performance',
    body: 'Nantikan penampilan spesial dari komunitas dan musisi yang akan meramaikan acara Festival Relawan 2019!',
  },
];

const rundown = [
  {
    name: 'Open Registration',
    start: '09:00',
    end: '20:30',
  },
  {
    name: 'Welcoming Performance by Marching Band',
    start: '10:00',
    end: '10:15',
  },
  {
    name: "Panel Lingkungan Hidup: 'Daratan, Lautan, & Tumpukan Sampah Plastik: Warisan Kita untuk Bumi?'",
    start: '10:35',
    end: '11:20',
  },
  {
    name: "Panel Pendidikan 3T: 'Jendela Dunia yang Jauh di Depan Mata'",
    start: '11:25',
    end: '12:10',
  },
  {
    name: "Panel Peduli Disabilitas: 'Bersama Kita Utuh, Merangkul Sesama untuk Sempurna'",
    start: '12:15',
    end: '13:00',
  },
  {
    name: 'Apresiasi Bulan Relawan Nasional 2019',
    start: '13:10',
    end: '13:25',
  },
  {
    name: "Panel Toleransi: 'Humanity is our identity; Toleran Ala Ilmuwan'",
    start: '13:25',
    end: '14:10',
  },
  {
    name: 'Performance Nusantari',
    start: '14:10',
    end: '14:25',
  },
  {
    name: "Panel Kesehatan Mental: 'Sudahkah Kamu Rehat Sejenak? - Aku. Tidak Hanya Aku, Kita juga Peduli Kamu'",
    start: '14:25',
    end: '15:10',
  },
  {
    name: "Panel Mitigasi Bencana: 'Indonesia Rawan Bencana, Lalu Kita Bisa Apa?'",
    start: '15:20',
    end: '16:05',
  },
  {
    name: 'Performance Komunitas Rednose',
    start: '16:05',
    end: '16:20',
  },
  {
    name: 'Bincang Tokoh: Maria Harfanti',
    start: '16:20',
    end: '16:35',
  },
  {
    name: "Panel Pemberdayaan Perempuan: 'Perempuan yang Berdaya itu yang Saling Memberdayakan'",
    start: '16:40',
    end: '17:25',
  },
  {
    name: "Panel Teknologi: 'Kolaborasi 4.0: Ketika Teknologi Hadir'",
    start: '17:30',
    end: '18:15',
  },
  {
    name: 'Bincang Tokoh',
    start: '18:30',
    end: '18:45',
  },
  {
    name: 'Performance Nokenlabs',
    start: '18:45',
    end: '19:00',
  },
  {
    name: 'Indorelawan Awards & DGC',
    start: '19:00',
    end: '20:00',
  },
  {
    name: 'Guest Star Performance',
    start: '20:00',
    end: '20:30',
  },
];

export default React.memo(SectionTwo);
