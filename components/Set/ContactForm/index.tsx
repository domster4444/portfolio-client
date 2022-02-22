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
          Twitter Profile Url :
          <br />
          <Input type="text" />
        </Lable>
        <br />
        <Lable htmlFor="">
          Facebook Profile Url :
          <br />
          <Input type="text" />
        </Lable>
        <br />
        <Lable htmlFor="">
          Instagram Profile Url :
          <br />
          <Input type="text" />
        </Lable>
        <br />

        <Lable htmlFor="">
          Linked In Profile Url :
          <br />
          <Input type="text" />
        </Lable>
        <br />

        <Lable htmlFor="">
          Github Profile Url :
          <br />
          <Input type="text" />
        </Lable>
        <br />

        <Lable htmlFor="">
          Youtube Profile Url :
          <br />
          <Input type="text" />
        </Lable>
        <br />

        <Button type="submit" color="success" size="xl">
          Update
          <Spacer x={0.5} />
          <TickSquare set="bold" primaryColor="white" />
        </Button>
      </form>
    </SetCard>
  );
};

export default index;
