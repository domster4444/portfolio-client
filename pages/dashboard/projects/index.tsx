import React from 'react';
// @ts-ignore
import DashboardLayout from 'components/DashboardLayout';
import ProjectsForm from 'components/Set/ProjectsForm';

const index = () => {
  return (
    <>
      <DashboardLayout>
        <>
          <ProjectsForm />
        </>
      </DashboardLayout>
    </>
  );
};

export default index;
