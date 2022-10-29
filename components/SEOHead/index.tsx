/* eslint-disable @next/next/no-head-element */
import React from 'react';
import Head from 'next/head';

type TSEOHead = {
  url?: string;
  title?: string;
  image?: string;
  keywords?: string;
  description?: string;
  useAppFolder?: boolean;
};

const SEOHead = ({
  url,
  title,
  image,
  description,
  useAppFolder = false,
}: TSEOHead) => {
  const HeadContent = (
    <>
      {useAppFolder && (
        <>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
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
        </>
      )}

      <title>{title || 'Festival Relawan 2022'}</title>

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="title" content={title || 'Festival Relawan 2022'} />
      <meta
        name="description"
        content={
          description ||
          'Festival Relawan adalah acara tahunan yang diselenggarakan untuk memberikan apresiasi kepada para relawan'
        }
      />
      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={url || 'https://www.festivalrelawan.com'}
      />
      <meta property="og:title" content={title || 'Festival Relawan 2022'} />
      <meta
        property="og:description"
        content={
          description ||
          'Festival Relawan adalah acara tahunan yang diselenggarakan untuk memberikan apresiasi kepada para relawan'
        }
      />
      <meta property="og:image" content={image || '/images/logo.png'} />

      {/* <!-- Twitter --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={url || 'https://www.festivalrelawan.com'}
      />
      <meta name="twitter:title" content={title || 'Festival Relawan 2022'} />
      <meta
        name="twitter:description"
        content={
          description ||
          'Festival Relawan adalah acara tahunan yang diselenggarakan untuk memberikan apresiasi kepada para relawan'
        }
      />
      <meta name="twitter:image" content={image || '/images/logo.png'} />
    </>
  );

  if (useAppFolder) return <head>{HeadContent}</head>;
  else return <Head>{HeadContent}</Head>;
};

export default React.memo(SEOHead);
