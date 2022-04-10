import { useEffect } from 'react';
import { useRouter } from 'next/router';
// import * as gtag from '../lib/gtag';
import 'styles/globals.scss';
import { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0';
import { globalConstant } from 'constant/constant';
import { NextUIProvider } from '@nextui-org/react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import store from 'main/store';
import { Provider } from 'react-redux';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  // const router = useRouter();
  // useEffect(() => {
  //   const handleRouteChange = (url: any) => {
  //     gtag.pageview(url);
  //   };
  //   router.events.on('routeChangeComplete', handleRouteChange);
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange);
  //   };
  // }, [router.events]);

  // f72b54c8-4989-4f5f-9a7a-0297d42d74ee
  useEffect(() => {
    // @ts-ignore
    window.$crisp = [];
    // @ts-ignore
    window.CRISP_WEBSITE_ID = 'f72b54c8-4989-4f5f-9a7a-0297d42d74ee';
    (function () {
      // @ts-ignore
      let d = document;
      // @ts-ignore
      let s = d.createElement('script');
      // @ts-ignore
      s.src = 'https://client.crisp.chat/l.js';
      // @ts-ignore
      s.async = 1;
      // @ts-ignore
      d.getElementsByTagName('head')[0].appendChild(s);
    })();
  });

  const router = useRouter();

  useEffect(() => {
    var condition = window.navigator.onLine ? 'online' : 'offline';
    if (condition === 'online') {
      console.log('ONLINE');
      fetch('https://www.google.com/', {
        // Check for internet connectivity
        mode: 'no-cors',
      })
        .then(() => {
          console.log('CONNECTED TO INTERNET');
        })
        .catch(() => {
          console.log('INTERNET CONNECTIVITY ISSUE');
        });
    } else {
      console.log('OFFLINE');

      location.href = `${globalConstant.baseURL}/home`;
    }
  });

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="180x180"
          href="/images/icon180_180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/icon32_32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/icon16_16.png"
        />
      </Head>
      <Provider store={store}>
        <UserProvider>
          <NextUIProvider>
            <Component {...pageProps} />

            <ToastContainer />
          </NextUIProvider>
        </UserProvider>
      </Provider>
    </>
  );
}

export default MyApp;

