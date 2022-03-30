/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';

import Layout from 'components/Layout';
import { NextPage } from 'next';
import styled from 'styled-components';
// @ts-ignore
import { Fade } from 'react-reveal';
import { Input, Spacer, Button, Textarea, css } from '@nextui-org/react';

const ContactHeaderWrapper = styled.header`
  margin-top: 20px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='131' height='131' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(154)'%3E%3Crect width='100%25' height='100%25' fill='rgba(226, 233, 250,1)'/%3E%3Cpath d='M-10 19.5h 60v1h-60zM-10-21h60v1h-60' fill='rgba(232, 239, 252,1)'/%3E%3Ccircle r='0.5' cx='0' cy='20' fill='rgba(203, 218, 246,1)'/%3E%3Ccircle r='0.5' cx='40' cy='20' fill='rgba(203, 218, 246,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ");
  min-height: 10vh;
  background-size: cover;
  background-position: center;
  padding: 5rem 2rem;
  border-radius: 1.5rem;
`;

const ContactContainer = styled.section`
  /* background: blue; */
  margin: 0rem 0rem 5rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 940px) {
    flex-direction: column-reverse;
    flex-wrap: wrap;
  }
`;
const ContactContainerLeft = styled.div`
  padding: 2rem 2rem;
  /* background: #a0fffa; */
  @media (max-width: 940px) {
    width: 100%;
  }
`;
const ContactContainerRight = styled.div`
  padding: 1rem;
  /* background: #85ff99; */
  @media (max-width: 940px) {
    width: 100%;
  }
  form {
    padding: 1rem;
    background: white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;

const ContactPage: NextPage = () => {
  return (
    <Layout>
      <>
        {/* <Head> */}
        {/* <title>Contact</title> */}
        {/* <meta
            name="description"
            content="Meta description for the About page"
          /> */}
        {/* </Head> */}

        <main>
          <ContactHeaderWrapper>
            <Fade bottom>
              <h2
                className="source_700"
                style={{
                  fontSize: '3.5rem',
                  color: '#1c2444',
                  letterSpacing: '0.1rem',
                  textAlign: 'center',
                }}
              >
                We'd love to hear from you!
              </h2>
              <p
                className="poppins_regular_400"
                style={{
                  fontSize: '1.8rem',
                  textAlign: 'center',
                  color: '#1c2444',
                }}
              >
                Whether you have a question about features, trials, pricing,need
                a demo, or anything else,our team is ready to answer all your
                questions
              </p>
            </Fade>
          </ContactHeaderWrapper>

          <h2
            className="source_700"
            style={{
              margin: '2.5rem 0rem',
              textAlign: 'center',
              fontSize: '3.5rem',
              letterSpacing: '0.1rem',
              color: '#6e6e6e',
              position: 'relative',
            }}
          >
            Contact Us
            <div
              style={{
                transform: 'translateX(-50%)',
                marginLeft: '50%',
                position: 'absolute',
                height: '0.6rem',
                width: '8rem',
                background: '#c1c1c1',
              }}
            />
          </h2>

          <ContactContainer>
            <ContactContainerLeft>
              <div>
                <a href="tel:+9779749211234">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="54"
                    height="54"
                    style={{
                      fill: '#8b8b8b',
                      transform: '',
                      msFilter: '',
                    }}
                  >
                    <path d="M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59 7.62 7.62 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43 15.28 15.28 0 0 0 6.3 17.7 15.28 15.28 0 0 0 16.57 22zM6 5.41 8.59 8 7.3 9.29a1 1 0 0 0-.3.91 10.12 10.12 0 0 0 2.3 4.5 10.08 10.08 0 0 0 4.5 2.3 1 1 0 0 0 .91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7z"></path>
                    <path d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z"></path>
                  </svg>
                </a>
              </div>

              <h3
                className="source_700"
                style={{
                  fontSize: '2.5rem',
                  letterSpacing: '0.1rem',
                  color: '#5c5c5c',
                }}
              >
                Sales Enquiries
              </h3>
              <p
                className="poppins_regular_400"
                style={{
                  fontSize: '1.8rem',
                }}
              >
                Interested in any of our products ? talk to our experts today.{' '}
                <br />
                <b>US : </b>+1 (800) 888-8888 | <b>Nepal : </b>
                +977 9749211234
                <br />
              </p>
              <a href="tel:+9779749211234">
                <Button color="secondary" bordered size="xl">
                  Call Now
                </Button>
              </a>
            </ContactContainerLeft>
            <ContactContainerRight>
              <form>
                <h3
                  className="contactForm__title source_700"
                  style={{
                    margin: '2.25rem 0rem',
                    fontSize: '2.5rem',
                    textAlign: 'center',
                    color: 'rgb(0, 0, 0)',
                    letterSpacing: '0.1rem',
                  }}
                >
                  Get in touch with us
                </h3>
                <div
                  style={{
                    margin: '0.25rem 0rem',
                    display: 'flex',
                    justifyContent: 'space-around',
                    // flexDirection: 'column',
                  }}
                >
                  <Input
                    size="xl"
                    width="45%"
                    placeholder="First Name"
                    bordered
                  />
                  <Input
                    size="xl"
                    width="45%"
                    placeholder="Last Name"
                    bordered
                  />
                </div>
                <Spacer y={0.5} />
                <div
                  style={{
                    margin: '0.25rem 0rem',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Input size="xl" width="95%" placeholder="Email" bordered />
                  <Spacer y={0.5} />
                  <Input
                    size="xl"
                    width="95%"
                    placeholder="Subject of query"
                    bordered
                  />
                  <Spacer y={0.5} />

                  {/* <Textarea bordered placeholder="Description" /> */}
                </div>
                <Spacer y={0.5} />

                <Button
                  size="xl"
                  color="gradient"
                  style={{
                    width: '100%',
                  }}
                >
                  Send Request
                </Button>
              </form>
            </ContactContainerRight>
          </ContactContainer>
        </main>
      </>
    </Layout>
  );
};

export default ContactPage;
