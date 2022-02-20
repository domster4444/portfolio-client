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
      <UserProvider>
        <NextUIProvider>
          <Component {...pageProps} />
          <ToastContainer />
        </NextUIProvider>
      </UserProvider>
    </>
  );
}

export default MyApp;
