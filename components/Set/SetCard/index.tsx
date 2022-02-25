import React from 'react';
import styled from 'styled-components';
const Card = styled.div`
  background: white;
  border-radius: 5px;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  padding: 1rem;
  margin: 1rem;
  width: 90%;
  max-width: 950px;
  transform: translateX(-50%);
  margin-left: 50%;
`;
const index = ({ children }: any) => {
  return <Card>{children}</Card>;
};

export default index;
