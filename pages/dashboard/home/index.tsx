import React from 'react';
import { setLoggedInUser } from 'reduxSlice/loggedInUserSlice';
import DashboardLayout from 'components/DashboardLayout';
import styled from 'styled-components';
import StatusCardContainer from 'components/dashboard/StatusCardContainer';
import Tablee from 'components/dashboard/Table/Table';
import { DynamicDoughnut } from 'components/Chart/Doughnut/Doughnut';
import { HorizontalLineChart } from 'components/Chart/HorizontalLineChart/HorizontalLineChart';
// import { height } from '@mui/system';

const StatusBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  font-size: 2rem;
  margin-top: 1rem;
  /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  border-radius: 0.5rem;
  width: 98%;
  /* &:hover {
    box-shadow: rgb(220, 228, 235) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  } */

  /* background-color: ${(props: any) => (props.red ? 'red' : 'green')}; */
  img {
    border-radius: 50%;
    height: 40rem;
    width: 40rem;
  }
`;
const SalesCardBtn = styled.button`
  padding: 0.5rem;
  width: 50%;
  border-radius: 0.5rem;
  background: white;
  color: #3d87ee;
  outline: none;
  border: 1px solid #c6c6c6;
  cursor: pointer;
  margin: 0.25rem;
  &:hover {
    background: #3d87ee;
    color: white;
  }
`;

const Input: React.FC = () => {
  return (
    <>
      <DashboardLayout>
        <>
          <h2 className="dashboard_subtitle poppins_medium_500">
            Analytics Overview
          </h2>
          <StatusCardContainer />
          <h2 className="dashboard_subtitle poppins_medium_500">
            Member Distributon
          </h2>
          <div className="two_col-container">
            <div className="col">
              <Tablee />
            </div>
            <div className="col two_col-content">
              {/* <div className="sales-card_container">
                <StatusBox className="sales-card">
                  <img
                    src="https://cdn.dribbble.com/users/1568450/screenshots/5419750/work_1_dribbble-01_4x.png"
                    alt=""
                  />
                  <SalesCardBtn className="poppins_medium_500">
                    Try PRO For Free
                  </SalesCardBtn>
                </StatusBox>
              </div> */}

              <div className="chart-container">
                <DynamicDoughnut />
              </div>
              <div className="chart-container">
                <HorizontalLineChart />
              </div>
            </div>
          </div>
        </>
      </DashboardLayout>
    </>
  );
};

export default Input;
