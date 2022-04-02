import React, { useEffect, useState } from 'react';
import {
  Button,
  Textarea,
  Container,
  Card,
  Spacer,
  css,
} from '@nextui-org/react';
import { ChevronLeft, ChevronRight, TickSquare } from 'react-iconly';
import { axiosInstance } from 'lib/utilities/api/api';
import { useUser } from '@auth0/nextjs-auth0';

// @ts-ignore
import DashboardLayout from 'components/DashboardLayout';
import { toast } from 'react-toastify';
import BioStyles from './bio.module.scss';

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

const Index = ({ nextPreBtn }: { nextPreBtn: boolean }) => {
  const [firstName, setFirstName] = useState<string>('');
  const [middleName, setMiddleName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const { user, error, isLoading } = useUser();

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (user) {
      const dataToSend = {
        email: user.email,
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        userName: userName,
      };

      axiosInstance
        .patch('/api/v1/users/nameform', dataToSend)

        .then((res: any) => {
          console.log('💚axios NameForm update Success', res.data);
          toast(res.data.message, {
            position: 'top-center',
          });
        })
        .catch((error) => {
          console.log(' 🟠axios NameForm error', error);
          toast(error, {
            position: 'top-center',
          });
        });
    }
  };

  useEffect(() => {
    if (user) {
      const dataToSend: any = {
        email: user.email,
      };

      axiosInstance
        .post('/api/v1/users/alldetails', dataToSend)

        .then((res: any) => {
          console.log('💚axios NameForm update Success', res.data);
          setFirstName(res.data.detailExist.firstName);
          setMiddleName(res.data.detailExist.middleName);
          setLastName(res.data.detailExist.lastName);
          setUserName(res.data.detailExist.userName);
        })
        .catch((error) => {
          console.log(' 🟠axios NameForm error', error);
          toast(error, {
            position: 'top-center',
          });
        });
    }
  }, []);

  return (
    <>
      <Container
        css={{
          justifyContent: 'center',
          width: '100%',
          display: 'flex',
        }}
      >
        <Card className={BioStyles.card}>
          <form
            className="bio"
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <Lable htmlFor="">
              UserName :
              <br />
              <Input
                value={userName}
                type="text"
                id="bioUserName"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </Lable>
            <Lable htmlFor="">
              FirstName :
              <br />
              <Input
                value={firstName}
                type="text"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </Lable>
            <Spacer y={1} />

            <Lable htmlFor="">
              MiddleName :
              <br />
              <Input
                value={middleName}
                type="text"
                onChange={(e) => {
                  setMiddleName(e.target.value);
                }}
              />
            </Lable>
            <Spacer y={1} />

            <Lable htmlFor="">
              LastName :
              <br />
              <Input
                value={lastName}
                type="text"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </Lable>

            <Spacer y={1.5} />
            <Button
              type="submit"
              color="success"
              size="xl"
              className={BioStyles.btnContainer__btn}
              // onClick={updateNameForm}
            >
              Update
              <Spacer x={0.5} />
              <TickSquare set="bold" primaryColor="white" />
            </Button>
            <Spacer y={0.5} />
          </form>

          {/* btn container */}

          {nextPreBtn === true && (
            <>
              <div className={BioStyles.prevNext__btnContainer}>
                <Button
                  shadow
                  color="secondary"
                  size="xl"
                  className={BioStyles.btnContainer__btn}
                >
                  <ChevronLeft set="bold" primaryColor="white" />
                  Previous Page
                </Button>
                <Button
                  shadow
                  color="primary"
                  size="xl"
                  className={BioStyles.btnContainer__btn}
                >
                  Next Page
                  <ChevronRight set="bold" primaryColor="white" />
                </Button>
              </div>
            </>
          )}
        </Card>
      </Container>
    </>
  );
};

export default Index;
