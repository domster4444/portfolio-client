import React from 'react';
import { Button, Textarea, Container, Card, Spacer } from '@nextui-org/react';
import { ChevronLeft, ChevronRight, TickSquare } from 'react-iconly';

// @ts-ignore
import DashboardLayout from 'components/DashboardLayout';
import { toast } from 'react-toastify';

const index = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    toast('successfully updated', {
      position: 'top-center',
    });
  };
  return (
    <>
      <DashboardLayout>
        {/* form */}

        <Container
          style={{
            justifyContent: 'center',
            width: '100%',
            display: 'flex',
          }}
        >
          <Card style={{ maxWidth: '45rem' }}>
            <form
              className="bio"
              onSubmit={(e) => {
                submitHandler(e);
              }}
            >
              <input name="bio__img" id="bio__img" type="file" />
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
                  style={{ minHeight: '10rem', fontSize: '1.4rem' }}
                />
              </label>
              <Spacer y={1.5} />
              <Button type="submit" color="success" size="lg">
                Update
                <Spacer x={0.5} />
                <TickSquare set="bold" primaryColor="white" />
              </Button>
              <Spacer y={0.5} />
            </form>

            {/* btn container */}
            <>
              <div
                className="prevNext__btnContainer"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                }}
              >
                <Button
                  shadow
                  color="secondary"
                  size="lg"
                  style={{ marginTop: '0.5rem' }}
                >
                  <ChevronLeft set="bold" primaryColor="white" />
                  Previous Page
                </Button>
                <Button
                  shadow
                  color="primary"
                  size="lg"
                  style={{ marginTop: '0.5rem' }}
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
