import React from 'react';
// @ts-ignore
import DashboardLayout from 'components/DashboardLayout';
import EducationForm from 'components/Set/EducationForm';

const index = () => {
  return (
    <>
      <DashboardLayout>
        <>
          <EducationForm />
        </>
      </DashboardLayout>
    </>
  );
};

export default index;
