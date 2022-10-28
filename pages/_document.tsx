import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        <meta
          name="keywords"
          content="festival relawan 2022, festival, relawan, 2022, indorelawan, campaign, indonesia future leaders "
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Indonesia" />
        <meta name="author" content="Festival Relawan" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#222222" />
        <link rel="icon" href="/favicon.ico"></link>
        <link rel="manifest" type="text/json" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
