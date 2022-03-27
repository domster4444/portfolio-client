import React from 'react';
// import { setLoggedInUser } from 'reduxSlice/loggedInUserSlice';
import { Tooltip } from '@nextui-org/react';

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
  position: relative;
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
    color: #c3ae8f;
    background-color: #fdead3;
  }
  &.green {
    color: #7e4a76;
    background-color: #fde5f9;
  }
  &.orange {
    color: #1f4b52;
    background-color: #d0f7ff;
  }
  &.lightsky {
    color: #457542;
    background-color: #e7fde5;
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
const StatusCardIcon = styled.div`
  position: absolute;
  height: 7rem;
  width: 7rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  background-color: rgba(255, 255, 255, 0.5);

  left: 1rem;
  top: 1rem;
  border-radius: 50%;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    font-size: 4rem;
  }
`;

const Index: React.FC = () => {
  return (
    <>
      <DbHomeContainer className="dashboard_home ">
        <section className="analytics_overview">
          <StatusBoxContainer className="dasboard_box-container">
            <TwoColFlexRow>
              {/* @ts-ignore */}

              <StatusBox className=" lightsky poppins_medium_500">
                <StatusCardIcon>
                  <i className="bx bx-user bx-flashing bx-flip-horizontal" />
                </StatusCardIcon>
                <StatusCardVal>862K</StatusCardVal> Paid Members
              </StatusBox>
              <StatusBox className=" blue poppins_medium_500">
                <StatusCardIcon>
                  <i className="bx bx-award bx-flashing bx-flip-horizontal" />
                </StatusCardIcon>
                <StatusCardVal>4.5K</StatusCardVal>
                Paid Members
              </StatusBox>
            </TwoColFlexRow>
            <TwoColFlexRow>
              <StatusBox className=" orange poppins_medium_500">
                <StatusCardIcon>
                  <i className="bx bx-windows bx-flashing bx-flip-horizontal" />
                </StatusCardIcon>
                <StatusCardVal>1M</StatusCardVal>
                Clients Members
              </StatusBox>
              <StatusBox className=" green poppins_medium_500">
                <StatusCardIcon>
                  <i className="bx bx-hourglass  bx-flashing bx-flip-horizontal" />
                </StatusCardIcon>
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
