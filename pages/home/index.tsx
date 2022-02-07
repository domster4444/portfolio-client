import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';

// components
import Layout from 'components/Layout';
import ClientCarousel from 'components/ClientCarousel';
import Accordion from 'components/Accordion';
import TeamCarousel from 'components/TeamCarousel';
import DropDown from 'components/DropDown';
const HomePage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page of portfolio generator" />
      </Head>

      <main>
        <h1>This is home page published on Namecheap</h1>
        <TeamCarousel />
        <ClientCarousel />
        <Accordion />
      </main>
    </Layout>
  );
};

export default HomePage;
