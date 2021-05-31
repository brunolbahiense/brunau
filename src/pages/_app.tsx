import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Brunau</title>
        <link rel="shortcut icon" href="/img/icon.png" />
        <link rel="apple-touch-icon" href="/img/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta name="description" content="Se prepare, a apertação só está começando!" />
        <meta property="og:title" content="Brunau" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/img/icon.png"/>
        <meta property="og:image:width" content="300"/>
        <meta property="og:image:height" content="300"/>
        <meta property="og:image:type" content="image/png"/>
        <meta property="og:url" content="https://brunau.xyz"/>
        <meta property="og:description" content="Se prepare, a apertação só está começando!" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
