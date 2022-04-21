import React from 'react';
// @ts-ignore
import DashboardLayout from 'components/DashboardLayout';

// import AchievementsForm from 'components/Set/AchievementsForm';

// @ts-ignore
import NameForm from 'components/Set/NameForm';

const index = () => {
  return (
    <>
      <DashboardLayout>
        <NameForm nextPreBtn={true} />
      </DashboardLayout>
    </>
  );
};

export default index;
