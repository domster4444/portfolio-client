import React from 'react';
// @ts-ignore
import DashboardLayout from 'components/DashboardLayout';
import FullWidthVideo from 'components/FullWidthVideo';
import Breadcrumbs from 'components/BreadCrumb/index';
import Accordion from 'components/Accordion/index';

const index = () => {
  return (
    <>
      <DashboardLayout>
        <>
          <Breadcrumbs breadCrumbLink={['dashboard', 'faq']} />

          <header className="text">FAQ & Video Guidance</header>
          <FullWidthVideo />

          <header className="text">Frequently Asked Questions</header>

          <Accordion />
        </>
      </DashboardLayout>
    </>
  );
};

export default index;
