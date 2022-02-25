import React from 'react';
import { setLoggedInUser } from 'reduxSlice/loggedInUserSlice';

import DashboardLayout from 'components/DashboardLayout';

const Input: React.FC = () => {
  return (
    <>
      <DashboardLayout>
        <>
          <h1>Dashboard Sample</h1>
        </>
      </DashboardLayout>
    </>
  );
};

export default Input;
