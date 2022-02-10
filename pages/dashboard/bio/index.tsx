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

// @ts-ignore
import DashboardLayout from 'components/DashboardLayout';
import { toast } from 'react-toastify';
import BioStyles from './bio.module.scss';

const index = () => {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    toast('successfully updated', {
      position: 'top-center',
    });
  };
  return (
    <>
      <DashboardLayout>
        {/* form */}

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
          </Card>
        </Container>
      </DashboardLayout>
    </>
  );
};

export default index;
