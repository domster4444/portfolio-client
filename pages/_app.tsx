import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import 'styles/globals.css';
import { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0';

import { NextUIProvider } from '@nextui-org/react';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <UserProvider>
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </UserProvider>
    </>
  );
}

export default MyApp;
