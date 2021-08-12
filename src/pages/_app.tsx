import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Brunau</title>
        <link rel="shortcut icon" href="/img/icon.png" />
        <link rel="apple-touch-icon" href="/img/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="Se prepare, a apertação só está começando!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.brunau.xyz/" />
        <meta property="og:title" content="Brunau" />
        <meta
          property="og:description"
          content="Se prepare, a apertação só está começando!"
        />
        <meta property="og:image" content="/img/icon.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.brunau.xyz/" />
        <meta property="twitter:title" content="Brunau" />
        <meta
          property="twitter:description"
          content="Se prepare, a apertação só está começando!"
        />
        <meta property="twitter:image" content="/img/icon.png" />
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={theme}></ThemeProvider>
      <Component {...pageProps} />
    </>
  )
}

export default App
