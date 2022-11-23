import type { AppProps } from 'next/app'
import Head from 'next/head'

// darkmode switcher
import { ThemeProvider } from 'next-themes'

// Global css
import '../src/assets/css/index.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Impexwood</title>
        <meta
          name="description"
          content="Order Pellets and Finger-jointed wood. Wood processing in Latvia. Environmentally friendly biofuel"
        />

        <meta
          property="og:description"
          content="Order Pellets and Finger-jointed wood. Wood processing in Latvia. Environmentally friendly biofuel"
        />
        <meta property="og:title" content="Impexwood" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Impexwood" />

        {/*  */}
        <meta property="og:image" content="/gallery/ico.jpg" />
        <meta property="og:image:width" content="100" />
        <meta property="og:image:height" content="100" />
      </Head>

      {/* <ThemeProvider> */}
        <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </>
  )
}
