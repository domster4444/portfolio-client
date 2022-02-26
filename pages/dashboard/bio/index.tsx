import React from 'react';

// @ts-ignore
import DashboardLayout from 'components/DashboardLayout';
import BioForm from 'components/Set/BioForm/index';

const index = () => {
  return (
    <>
      <DashboardLayout>
        <BioForm nextPreBtn={true} />
      </DashboardLayout>
    </>
  );
};

export default index;
