import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';

// components
import Layout from 'components/Layout';
import ClientCarousel from 'components/ClientCarousel';
import Accordion from 'components/Accordion';
const HomePage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <meta name="description" content="Meta description for the Home page" />
      </Head>

      <main>
        <h1>This is home page</h1>
        <ClientCarousel />
        <Accordion />
      </main>
    </Layout>
  );
};

export default HomePage;
