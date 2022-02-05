import Head from 'next/head';
const index = () => {
  return (
    <>
      <Head>
        <title>Home - TitleMetaNextjs</title>
        <meta name="description" content="Meta description for the Home page" />
      </Head>
      <main>
        <h1>This is home page</h1>
      </main>
    </>
  );
};

export default index;
