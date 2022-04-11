import React from 'react';
// @ts-ignore
import SkillsForm from 'components/Set/SkillsForm';

import DashboardLayout from 'components/DashboardLayout';

const Index = () => {
  return (
    <>
      <DashboardLayout>
        <>
          <SkillsForm nextPreBtn={true} />
        </>
      </DashboardLayout>
    </>
  );
};

export default Index;
