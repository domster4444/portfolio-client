import React from 'react';
import {
  Button,
  Textarea,
  Container,
  Card,
  Spacer,
  css,
} from '@nextui-org/react';
import { ChevronLeft, ChevronRight, TickSquare } from 'react-iconly';
import { Input, Lable } from './Form.style';

// @ts-ignore
import DashboardLayout from 'components/DashboardLayout';
import { toast } from 'react-toastify';
import BioStyles from './bio.module.scss';

const Index = ({ nextPreBtn }: { nextPreBtn: boolean }) => {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    toast('bio field successfully updated', {
      position: 'top-center',
    });
  };
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
              FirstName :
              <br />
              <Input type="text" />
            </Lable>
            <Spacer y={1} />

            <Lable htmlFor="">
              MiddleName :
              <br />
              <Input type="text" />
            </Lable>
            <Spacer y={1} />

            <Lable htmlFor="">
              LastName :
              <br />
              <Input type="text" />
            </Lable>

            <Spacer y={1} />
            <input
              name="bio__img"
              className={BioStyles.bio_fileBtn}
              type="file"
            />

            <Spacer y={1.5} />
            <label htmlFor="bio__info">
              <Textarea
                name="bio__info"
                helperText="Please enter your bio information"
                id="bio__info"
                label="Bio info"
                placeholder='"I am a full stack developer with a passion for building things that make a difference"'
                status="default"
                width="100%"
                style={{ minHeight: '20rem', fontSize: '2rem' }}
              />
            </label>
            <Spacer y={1.5} />
            <Button
              type="submit"
              color="success"
              size="xl"
              className={BioStyles.btnContainer__btn}
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
