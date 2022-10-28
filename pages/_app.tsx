import type { AppProps } from 'next/app';
import { Footer, Navbar, SEOHead } from '../components';

import './globals.css';
import 'blaze-slider/dist/blaze.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <SEOHead
        title="Festival Relawan 2022 | Bergerak Bersama Berdampak Besar"
        description="Festival Relawan adalah acara tahunan yang diselenggarakan untuk memberikan apresiasi kepada para relawan."
      />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;
