import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
import NextNprogress from 'nextjs-progressbar'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Brunau</title>
        <link rel="shortcut icon" href="/img/logo.jpg" />
        <link rel="apple-touch-icon" href="/img/logo.jpg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <NextNprogress
        color="#dd1414"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
    </>
  )
}

export default App
