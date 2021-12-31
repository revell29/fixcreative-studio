import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';
import { LayoutRoot } from '~/components/layout/layout-root';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import * as React from 'react';

function MyApp({ Component, pageProps, router }: AppProps) {
  React.useEffect(() => {
    const handleStart = ({ shallow }: any) => {
      if (!shallow) {
        NProgress.start();
      }
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return (
    <ChakraProvider theme={theme}>
      <LayoutRoot>
        <Component {...pageProps} />
      </LayoutRoot>
    </ChakraProvider>
  );
}

export default MyApp;
