import React from 'react';
// import { setLoggedInUser } from 'reduxSlice/loggedInUserSlice';

import styled from 'styled-components';

const DbHomeContainer = styled.div`
  width: 98%;
  /* background-color: blue; */
  margin: 0 auto;
`;
const StatusBoxContainer = styled.div`
  width: 98%;
  /* background-color: blue; */
  display: flex;
  margin: 0 auto;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
const StatusBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 20rem;
  font-size: 2rem;
  margin-top: 1rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  border-radius: 0.5rem;
  width: 98%;
  &:hover {
    box-shadow: rgb(220, 228, 235) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  }

  &.blue {
    background-color: #eefdfb;
  }
  &.green {
    background-color: #f7f6f9;
  }
  &.orange {
    background-color: #f2e8ff;
  }
  &.lightsky {
    background-color: #dcedfe;
  }
  /* background-color: ${(props: any) => (props.red ? 'red' : 'green')}; */
`;
const TwoColFlexRow = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
const StatusCardVal = styled.h3`
  font-size: 3.5rem;
`;

const Index: React.FC = () => {
  return (
    <>
      <DbHomeContainer className="dashboard_home ">
        <section className="analytics_overview">
          <h2 className="dashboard_subtitle poppins_medium_500">
            Analytics Overview
          </h2>
          <StatusBoxContainer className="dasboard_box-container">
            <TwoColFlexRow>
              {/* @ts-ignore */}
              <StatusBox className=" lightsky poppins_medium_500">
                <StatusCardVal>862K</StatusCardVal> Paid Members
              </StatusBox>
              <StatusBox className=" blue poppins_medium_500">
                <StatusCardVal>4.5K</StatusCardVal>
                Paid Members
              </StatusBox>
            </TwoColFlexRow>
            <TwoColFlexRow>
              <StatusBox className=" orange poppins_medium_500">
                <StatusCardVal>1M</StatusCardVal>
                Clients Members
              </StatusBox>
              <StatusBox className=" green poppins_medium_500">
                <StatusCardVal>33K</StatusCardVal>
                Active Members
              </StatusBox>
            </TwoColFlexRow>
          </StatusBoxContainer>
        </section>
      </DbHomeContainer>
    </>
  );
};

export default Index;
