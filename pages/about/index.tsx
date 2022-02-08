import React from 'react';
import Head from 'next/head';

import Layout from 'components/Layout';
import { NextPage } from 'next';
const AboutPage: NextPage = () => {
  return (
    <Layout>
      <>
        <Head>
          <title>About</title>
          <meta
            name="description"
            content="Meta description for the About page"
          />
        </Head>

        <main>
          <h1>This is about page</h1>
        </main>
      </>
    </Layout>
  );
};

export default AboutPage;
