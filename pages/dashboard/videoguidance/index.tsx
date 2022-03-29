import React from 'react';
// @ts-ignore
import DashboardLayout from 'components/DashboardLayout';
import FullWidthVideo from 'components/FullWidthVideo';
import Breadcrumbs from 'components/BreadCrumb/index';

const index = () => {
  return (
    <>
      <DashboardLayout>
        <>
          <Breadcrumbs breadCrumbLink={['dashboard', 'FAQ']} />

          <header className="text">FAQ & Video Guidance</header>
          <FullWidthVideo />
        </>
      </DashboardLayout>
    </>
  );
};

export default index;
