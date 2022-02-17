/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import styled from 'styled-components';

// components
import LayoutValidator from 'components/LayoutValidator';
import ClientCarousel from 'components/ClientCarousel';
import Accordion from 'components/Accordion';
import TeamCarousel from 'components/TeamCarousel';

const WhySection = styled.section``;
const WhySectionTitle = styled.h2`
  font-size: 5rem;
  text-align: center;
  color: #191970;
  letter-spacing: 0.1rem;
`;
const WhySectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1rem;
`;
const WhySectionCard = styled.div`
  max-width: 35rem;
  min-width: 30rem;
  min-height: 30rem;
  margin: 1rem;
  padding: 1rem;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  h3 {
    font-size: 2.2rem;
  }
  p {
    font-size: 1.8rem;
  }
`;

// join now section
const JoinNowSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #440ccc;
  border-top-left-radius: 3rem;
  border-top-right-radius: 3rem;
`;
const JoinNowSectionTitle = styled.h2`
  margin-top: 5rem;
  font-size: 5rem;
  letter-spacing: 0.1rem;
  color: white;
`;
const JoinNowSectionBtn = styled.button`
  margin: 2rem 0rem 5rem 0rem;
  padding: 1rem 2rem;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  font-size: 2rem;
  color: #440ccc;
  background: white;
  &:hover {
    color: #440ccc;
    background: white;
  }
  &:active {
    background: #191970;
    color: white;
  }
`;

const HomePage: NextPage = () => {
  return (
    <LayoutValidator>
      <React.Fragment>
        <Head>
          <title>Home</title>
          <meta name="description" content="Home page of portfolio generator" />
        </Head>

        <main>
          <h1>This is home page published on Namecheap</h1>
          <TeamCarousel />
          <ClientCarousel />
          <Accordion />

          <WhySection className="whySection">
            <WhySectionTitle className="whySection__title poppins_bold_800">
              Why build my portfolio with us?
            </WhySectionTitle>
            <WhySectionContainer>
              <WhySectionCard>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="54"
                  height="54"
                  viewBox="0 0 24 24"
                  style={{
                    fill: '#7928ca ',
                    transform: '',
                    msFilter: '',
                  }}
                >
                  <path d="M16.5,8c0,1.5-0.5,3.5-2.9,4.3c0.7-1.7,0.8-3.4,0.3-5c-0.7-2.1-3-3.7-4.6-4.6C8.9,2.4,8.2,2.8,8.3,3.4c0,1.1-0.3,2.7-2,4.4  C4.1,10,3,12.3,3,14.5C3,17.4,5,21,9,21c-4-4-1-7.5-1-7.5c0.8,5.9,5,7.5,7,7.5c1.7,0,5-1.2,5-6.4c0-3.1-1.3-5.5-2.4-6.9  C17.3,7.2,16.6,7.5,16.5,8"></path>
                </svg>
                <h3>We're actually free</h3>
                <p className="poppins_regular_400">
                  No gimmicks, no freemium features, no joke. Get everything you
                  need to build a professional resume that shows off your best
                  qualities to help you land your next job.
                </p>
              </WhySectionCard>
              <WhySectionCard className="card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="54"
                  height="54"
                  viewBox="0 0 24 24"
                  style={{
                    fill: '#7928ca ',
                    transform: '',
                    msFilter: '',
                  }}
                >
                  <path d="M20 6c0-2.168-3.663-4-8-4S4 3.832 4 6v2c0 2.168 3.663 4 8 4s8-1.832 8-4V6zm-8 13c-4.337 0-8-1.832-8-4v3c0 2.168 3.663 4 8 4s8-1.832 8-4v-3c0 2.168-3.663 4-8 4z"></path>
                  <path d="M20 10c0 2.168-3.663 4-8 4s-8-1.832-8-4v3c0 2.168 3.663 4 8 4s8-1.832 8-4v-3z"></path>
                </svg>
                <h3>Data-Driven Templates</h3>
                <p className="poppins_regular_400">
                  Rest assured that the templates you find on here are the best
                  around. Based on data from what employers want to see in
                  candidates, we’ve created our templates with hiring in mind..
                </p>
              </WhySectionCard>
              <WhySectionCard className="card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="54"
                  height="54"
                  viewBox="0 0 24 24"
                  style={{
                    fill: '#7928ca ',
                    transform: '',
                    msFilter: '',
                  }}
                >
                  <path d="M22,3.41l-.12-1.26-1.2.4a13.84,13.84,0,0,1-6.41.64,11.87,11.87,0,0,0-6.68.9A7.23,7.23,0,0,0,3.3,9.5a9,9,0,0,0,.39,4.58,16.6,16.6,0,0,1,1.18-2.2A9.85,9.85,0,0,1,8.94,8.45a11.16,11.16,0,0,1,5.06-1v0A12.08,12.08,0,0,0,9.34,9.2a9.48,9.48,0,0,0-1.86,1.53,11.38,11.38,0,0,0-1.39,1.91,16.39,16.39,0,0,0-1.57,4.54A26.42,26.42,0,0,0,4,22H6a30.69,30.69,0,0,1,.59-4.32,9.25,9.25,0,0,0,4.52,1.11,11,11,0,0,0,4.28-.87C23,14.67,22,3.86,22,3.41Z"></path>
                </svg>
                <h3>Get Seen</h3>
                <p className="poppins_regular_400">
                  With your resume ready for top employers, easily share with
                  millions of interested employers on Indeed, the world’s #1 job
                  site.
                </p>
              </WhySectionCard>
            </WhySectionContainer>
          </WhySection>

          <JoinNowSection>
            <JoinNowSectionTitle className="poppins_bold_800">
              Join our team
            </JoinNowSectionTitle>
            <JoinNowSectionBtn className="poppins_regular_400">
              Create My Portfolio
            </JoinNowSectionBtn>
          </JoinNowSection>
        </main>
      </React.Fragment>
    </LayoutValidator>
  );
};

export default HomePage;
