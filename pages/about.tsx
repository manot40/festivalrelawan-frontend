import Image from 'next/image';
import { NextPage } from 'next';
import { motion } from 'framer-motion';

// Component and Hook
import { Container, Hero, SEOHead } from '../components';

// Asset
import TimAksiBaik from '../assets/images/about/tab.jpg';

const About: NextPage = () => {
  return (
    <Hero>
      <SEOHead title="Tentang Festival Relawan 2022 | Bergerak Bersama Berdampak Besar" />
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.2 }}>
        <Container
          lg
          flex
          className="flex-col translate-y-6 py-24 space-y-24 justify-center items-center">
          <section id="about-fr" className="space-y-12">
            <div className="text-center space-y-3 max-w-xl mx-auto">
              <h1 className="text-blue-900">Tentang Festival Relawan</h1>
              <h2>“Bergerak Bersama Berdampak Besar”</h2>
              <div className="h-1 md:h-2" />
              <h3 className="text-lg md:text-2xl">
                “
                <em>
                  Dengan bersama kita bisa ubah dunia. Dunia yang seperti apa
                  yang ingin kita ubah? Semua ada di tangan kita.
                </em>
                ”
              </h3>
            </div>
            <div className="text-xl md:text-2xl text-left space-y-6 max-w-2xl">
              <p>
                Festival Relawan hadir untuk memberikan inspirasi mengenai dunia
                kerelawanan, tahun ini kami menghadirkan sesuatu yang berbeda.
                Tema “Bergerak Bersama, Berdampak Besar” ingin mengajak semua
                pihak yang percaya bahwa kolaborasi bisa menjadi cara dalam
                mengatasi berbagai permasalahan sosial yang ada untuk berkumpul
                dalam Festival Relawan. Kami ingin mengajak individu, relawan,
                komunitas, pemerintah, swasta dan semua pihak untuk saling
                terbuka dan bergotong royong mencari solusi permasalahan sosial.
              </p>
              <p>
                Kami percaya bahwa niat baik dipadukan dengan cerita inspiratif
                yang diwadahi dalam Festival Relawan bisa menggerakan hati
                masyarakat untuk mau mengambil peran #JadiRelawan demi mencapai
                tujuan bersama yaitu memberikan dampak yang berarti untuk
                Indonesia lebih baik.
              </p>
            </div>
          </section>
          <section id="about-tab" className="max-w-2xl mx-auto">
            <h1 className="text-blue-900 text-center mb-6">
              Tentang Tim Aksi Baik
            </h1>
            <Image
              width={730}
              height={410}
              className="mb-4"
              src={TimAksiBaik}
              alt="Tim Aksi Baik"
            />
            <p className="text-xl md:text-2xl">
              Festival Relawan pertama kali diinisiasi oleh Indorelawan,
              Campaign.com, dan Indonesian Future Leaders yang tergabung dalam
              Tim Aksi Baik. Tahun ini, inisiator Tim Aksi Baik dibantu oleh
              komunitas sosial lainnya dan juga para relawan untuk mempersiapkan
              Festival Relawan dan Bulan Relawan Nasional 2019.
            </p>
          </section>
        </Container>
      </motion.div>
    </Hero>
  );
};

export default About;
