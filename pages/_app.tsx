import '../styles/globals.css';
import { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0';

import { NextUIProvider } from '@nextui-org/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </UserProvider>
  );
}

export default MyApp;
