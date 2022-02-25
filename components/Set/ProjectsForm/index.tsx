import React from 'react';
import SetCard from 'components/Set/SetCard';
import styled from 'styled-components';
import { TickSquare } from 'react-iconly';
import { Input, Lable, Textarea } from '../Form.style';
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
