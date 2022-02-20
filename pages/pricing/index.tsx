import React from 'react';
// @ts-ignore
import Layout from 'components/Layout';
// @ts-ignore
import PricingPlanSectionPreview from 'components/PricingPlanSectionPreview/PricingPlanSectionPreview';

import { NextPage } from 'next';
const PricingPage = () => {
  return (
    <>
      <Layout>
        <main
          style={{
            margin: '2.5rem 0rem',
          }}
        >
          <PricingPlanSectionPreview />
        </main>
      </Layout>
    </>
  );
};

export default PricingPage;
