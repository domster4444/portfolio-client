import React from 'react';
import Head from 'next/head';

import Layout from '../../components/Layout';
import { NextPage } from 'next';
const HomePage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <meta name="description" content="Meta description for the Home page" />
      </Head>

      <main>
        <h1>This is home page</h1>
      </main>
    </Layout>
  );
};

export default HomePage;
