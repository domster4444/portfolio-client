import React from 'react';
// @ts-ignore
import DashboardLayout from 'components/DashboardLayout';
import AchievementsForm from 'components/Set/AchievementsForm';

const index = () => {
  return (
    <>
      <DashboardLayout>
        <>
          <AchievementsForm nextPreBtn={false} />
        </>
      </DashboardLayout>
    </>
  );
};

export default index;
