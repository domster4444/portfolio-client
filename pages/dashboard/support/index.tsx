import React from 'react';
// @ts-ignore
import DashboardLayout from 'components/DashboardLayout';
import { useForm, ValidationError } from '@formspree/react';
import { NextPage } from 'next';
import { Text, Textarea, Button, Spacer, Card } from '@nextui-org/react';
import styled from 'styled-components';
import ChatBox from 'components/ChatBox';
import { useUser } from '@auth0/nextjs-auth0';
import Breadcrumbs from 'components/BreadCrumb/index';

const SupportCard = styled.div`
  display: flex;
  background: transparent;
  justify-content: center;
`;
const FormCard = styled.div`
  margin-top: 1rem;
  font-size: 1.8rem;
  width: 70%;
  background: white;
  border-radius: 0.25rem;
  box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
  padding: 1rem;

  input,
  textarea {
    border: 1px solid #ccc;

    width: 100%;
    &:focus {
      border: 1px solid rgb(82, 60, 220);
    }
    outline: none;
    border-radius: 0.25rem;
    height: 4rem;
  }
`;

const SubmitBtn = {
  width: '100%',
  fontSize: '2rem',
  margin: '1rem 0rem',
  height: '8rem',
};

const Index: NextPage = () => {
  const { user, error, isLoading } = useUser();

  const [state, handleSubmit] = useForm('xdobeqnz');

  if (state.succeeded) {
    return (
      <>
        <DashboardLayout>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Card bordered shadow={false} css={{ mw: '400px' }}>
              <Text size={25}> Thank you for your message. !</Text>
              <Text size={25}>
                We will get back to you as soon as possible.
              </Text>
              <Text size={25}>
                We will send you a message to your email :
                {user ? user.email : ''}
              </Text>
            </Card>
          </div>
        </DashboardLayout>
      </>
    );
  }

  return (
    <>
      <DashboardLayout>
        <>
          <Breadcrumbs breadCrumbLink={['dashboard', 'FAQ']} />
          <header className="text">Supports</header>
          <SupportCard>
            <FormCard>
              <form onSubmit={handleSubmit}>
                <Spacer y={1} />
                <label htmlFor="email">
                  Email Address
                  <br />
                  <input
                    disabled
                    id="email"
                    type="email"
                    name="email"
                    // @ts-ignore
                    value={user ? user.email : ''}
                  />
                </label>

                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <br />
                <Spacer y={1} />
                <label htmlFor="email">
                  Your Message
                  <br />
                  <Textarea
                    name="bio__info"
                    id="bio__info"
                    placeholder='"Enter you query to consult with our team"'
                    status="default"
                    width="100%"
                    style={{ minHeight: '20rem', fontSize: '2rem' }}
                  />
                </label>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                <br />

                <Button
                  size="xl"
                  type="submit"
                  style={SubmitBtn}
                  disabled={state.submitting}
                  color="gradient"
                >
                  SUBMIT
                </Button>
              </form>
            </FormCard>
          </SupportCard>

          <section
            style={{
              margin: '5rem 0rem',
            }}
          >
            <ChatBox />
          </section>
        </>
      </DashboardLayout>
    </>
  );
};

export default Index;
