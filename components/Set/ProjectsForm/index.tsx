import React from 'react';
import SetCard from 'components/Set/SetCard';
import { TickSquare } from 'react-iconly';
import { Spacer, Button } from '@nextui-org/react';

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
          Project Name
          <br />
          <Input type="text" />
        </Lable>
        <br />
        <Lable htmlFor="">
          Project Description
          <br />
          <Textarea />
        </Lable>
        <br />

        <Lable htmlFor="">
          Project Image
          <br />
          <Input type="file" />
        </Lable>
        <Lable htmlFor="">
          Project Link
          <br />
          <Input type="text" />
        </Lable>
        <Lable htmlFor="">
          Project Video Link
          <br />
          <Input type="text" />
        </Lable>
        <Lable htmlFor="">
          Project github Link
          <br />
          <Input type="text" />
        </Lable>
        <Lable htmlFor="">
          Project github Link
          <br />
          <Input type="text" />
        </Lable>
        <Lable htmlFor="">
          Project website Link
          <br />
          <Input type="text" />
        </Lable>
        <Lable htmlFor="">
          Project Docs Link
          <br />
          <Input type="text" />
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
