import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>ReactDex</title>

        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="theme-color" content="#ea5d60" />
      </Head>

      <GlobalStyles />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
