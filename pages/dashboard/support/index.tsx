import React from 'react';
// @ts-ignore
import DashboardLayout from 'components/DashboardLayout';
import { useForm, ValidationError } from '@formspree/react';
import { NextPage } from 'next';
import { Card, Text } from '@nextui-org/react';
const Index: NextPage = () => {
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
                {' '}
                We will get back to you as soon as possible.
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
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" name="email" />

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <textarea id="message" name="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button type="submit" disabled={state.submitting}>
              SUBMIT
            </button>
          </form>
        </>
      </DashboardLayout>
    </>
  );
};

export default Index;
