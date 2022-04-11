import React from 'react';
// @ts-ignore
import DashboardLayout from 'components/DashboardLayout';
import WorkForm from 'components/Set/WorkForm';

const index = () => {
  return (
    <>
      <DashboardLayout>
        <>
          <WorkForm />
        </>
      </DashboardLayout>
    </>
  );
};

export default index;
