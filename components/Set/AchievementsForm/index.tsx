import React from 'react';
import SetCard from 'components/Set/SetCard';
import { TickSquare } from 'react-iconly';

import styled from 'styled-components';
export const Lable = styled.label`
  font-size: 1.8rem;
`;
export const Input = styled.input`
  height: 5rem;
  font-size: 2.4rem;
  width: 100%;
  border: none;
  border-radius: 1rem;
  outline: none;
  padding-left: 1rem;
  background: #f4f4f4;
`;

export const Textarea = styled.textarea`
  height: 18rem;
  width: 100%;
  border: none;
  border-radius: 1rem;
  padding-left: 1rem;
  background: #f4f4f4;

  font-size: 2.4rem;
`;

import { Spacer, Button } from '@nextui-org/react';

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
          Achievement name :
          <br />
          <Input type="text" />
        </Lable>
        <br />

        <Lable htmlFor="">
          Achievement description :
          <br />
          <Textarea />
        </Lable>
        <br />

        <Lable htmlFor="">
          Achievement Image :
          <br />
          <Input type="file" />
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
