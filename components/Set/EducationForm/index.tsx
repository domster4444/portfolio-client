import React from 'react';
import SetCard from 'components/Set/SetCard';
import styled from 'styled-components';
import { TickSquare } from 'react-iconly';

import { Spacer, Button } from '@nextui-org/react';
const Lable = styled.label`
  font-size: 1.8rem;
`;
const Input = styled.input`
  height: 5rem;
  font-size: 2.4rem;
  width: 100%;
`;

const index: React.FC = () => {
  return (
    <SetCard>
      <form
        action=""
        style={{
          width: '100%',
        }}
      >
        <Lable htmlFor="">
          Organization/Institution/College/School Name
          <br />
          <Input type="text" />
        </Lable>
        <br />
        <Lable htmlFor="">
          Date of Joining :
          <br />
          <Input type="date" />
        </Lable>
        <Lable htmlFor="">
          Date of Leaving :
          <br />
          <Input type="date" />
        </Lable>

        <Button type="submit" color="success" size="xl">
          Add To List
          <Spacer x={0.5} />
          <TickSquare set="bold" primaryColor="white" />
        </Button>
      </form>
    </SetCard>
  );
};

export default index;
