import React from 'react';
import SetCard from 'components/Set/SetCard';
import styled from 'styled-components';
import { TickSquare } from 'react-iconly';
import { Input, Lable } from '../Form.style';
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
          Skill Name :
          <br />
          <Input type="text" />
        </Lable>
        <br />
        <Lable htmlFor="">
          Rate your skills :
          <br />
          <Input type="text" />
        </Lable>

        <Button type="submit" color="success" size="xl">
          Add to list
          <Spacer x={0.5} />
          <TickSquare set="bold" primaryColor="white" />
        </Button>
      </form>
    </SetCard>
  );
};

export default index;
