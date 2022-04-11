import React from 'react';
// @ts-ignore
import DashboardLayout from 'components/DashboardLayout';
import EducationForm from 'components/Set/EducationForm';

const index = () => {
  return (
    <>
      <DashboardLayout>
        <>
          <EducationForm nextPreBtn={true} />
        </>
      </DashboardLayout>
    </>
  );
};

export default index;
