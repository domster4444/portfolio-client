import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';

// components
import LayoutValidator from 'components/LayoutValidator';
import ClientCarousel from 'components/ClientCarousel';
import Accordion from 'components/Accordion';
import TeamCarousel from 'components/TeamCarousel';
const HomePage: NextPage = () => {
  return (
    <LayoutValidator>
      <React.Fragment>
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
      </React.Fragment>
    </LayoutValidator>
  );
};

export default HomePage;
