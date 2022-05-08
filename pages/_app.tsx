import '@styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>HACKER</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta name="description" content="콩 심은 데 콩 나고, 커밋한 데 머리 난다!" />
        <meta name="keywords" content="콩 심은 데 콩 나고, 커밋한 데 머리 난다!" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HACKER" />
        <meta property="og:url" content="https://hacker-landing.vercel.app/" />
        <meta property="og:site_name" content="HACKER" />
        <meta property="og:description" content="콩 심은 데 콩 나고, 커밋한 데 머리 난다!" />
        <meta
          property="og:image"
          content="https://hacker-image.s3.ap-northeast-2.amazonaws.com/hair/06_22.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
