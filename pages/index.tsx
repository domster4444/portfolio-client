import React from 'react';
import Link from 'next/link';
import type { NextPage } from 'next';
import { useUser } from '@auth0/nextjs-auth0';
import { Modal, Text, Row, Input, Checkbox } from '@nextui-org/react';

import styled from 'styled-components';
import { Button } from '@nextui-org/react';

const PrimaryButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

// disable runtime on javascript export completely
export const config = {
  unstable_runtimeJS: false,
};

const Home: NextPage = () => {
  const { user, error, isLoading } = useUser();
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        Welcome {user.name}! <Link href="/api/auth/logout">Logout</Link>
      </div>
    );
  }

  return (
    <>
      <Link href="/api/auth/login">
        <PrimaryButton>Login</PrimaryButton>
      </Link>
      <Button>Click me</Button>

      <section className="modal">
        <div>
          <Button auto shadow onClick={handler}>
            Open modal
          </Button>
          <Modal
            closeButton
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
          >
            <Modal.Header>
              <Text id="modal-title" size={18}>
                Welcome to
                <Text b size={18}>
                  NextUI
                </Text>
              </Text>
            </Modal.Header>
            <Modal.Body>
              <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Email"
              />
              <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Password"
              />
              <Row justify="space-between">
                <Checkbox>
                  <Text size={14}>Remember me</Text>
                </Checkbox>
                <Text size={14}>Forgot password?</Text>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button auto flat color="error" onClick={closeHandler}>
                Close
              </Button>
              <Button auto onClick={closeHandler}>
                Sign in
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </section>
    </>
  );
};

export default Home;
