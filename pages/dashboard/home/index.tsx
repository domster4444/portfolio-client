import React from 'react';
import { setLoggedInUser } from 'reduxSlice/loggedInUserSlice';

import DashboardLayout from 'components/DashboardLayout';
import styled from 'styled-components';
import StatusCardContainer from 'components/dashboard/StatusCardContainer';
import Tablee from 'components/dashboard/Table/Table';
const Input: React.FC = () => {
  return (
    <>
      <DashboardLayout>
        <>
          <StatusCardContainer />
          <Tablee />
        </>
      </DashboardLayout>
    </>
  );
};

export default Input;
