import React from 'react';
import styled from 'styled-components';
const Card = styled.div`
  background: white;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
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
