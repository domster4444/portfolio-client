import React from 'react';
import type { NextPage } from 'next';
import { useUser } from '@auth0/nextjs-auth0';
import { Loading } from '@nextui-org/react';

// components
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

const Home: NextPage = () => {
  const { user, error, isLoading } = useUser();

  if (error) return <div>{error.message}</div>;
  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          height: '100vh',
          width: '100vw',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Loading size="xl" />
      </div>
    );
  }

  if (user) {
    return (
      <div>
        <Navbar
          isLoggedIn={user ? true : false}
          logo=""
          menus={['About', 'Home']}
        />
        Welcome {user.name}!
      </div>
    );
  }
  return (
    <>
      <Layout>
        <Navbar
          isLoggedIn={user ? true : false}
          logo=""
          menus={['About', 'Home']}
        />
        <h1>welcome</h1>
      </Layout>
    </>
  );
};

export default Home;
