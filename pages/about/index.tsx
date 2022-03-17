/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Layout from 'components/Layout';
import { NextPage } from 'next';
// @ts-ignore
import { Fade, Zoom } from 'react-reveal';

const ContactHeaderWrapper = styled.header`
  margin-top: 20px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='131' height='131' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(154)'%3E%3Crect width='100%25' height='100%25' fill='rgba(226, 233, 250,1)'/%3E%3Cpath d='M-10 19.5h 60v1h-60zM-10-21h60v1h-60' fill='rgba(232, 239, 252,1)'/%3E%3Ccircle r='0.5' cx='0' cy='20' fill='rgba(203, 218, 246,1)'/%3E%3Ccircle r='0.5' cx='40' cy='20' fill='rgba(203, 218, 246,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ");
  min-height: 10vh;
  background-size: cover;
  background-position: center;
  padding: 5rem 2rem;
  border-radius: 1.5rem;
`;

const AboutPage: NextPage = () => {
  return (
    <Layout>
      <>
        <Head>
          <title>About</title>
          <meta
            name="description"
            content="Meta description for the About page"
          />
        </Head>

        <main className="about__main">
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
                About us
              </h2>
              <p
                className="poppins_regular_400"
                style={{
                  fontSize: '1.8rem',
                  textAlign: 'center',
                  color: '#1c2444',
                }}
              >
                We are a career site fueled by some of the best career experts
                and a community of passionated students a year.
              </p>
            </Fade>
          </ContactHeaderWrapper>

          {/* //? timeline */}
          <h2
            style={{
              position: 'relative',
              color: '#191970',
              letterSpacing: '0.1rem',
              fontSize: '5rem',
            }}
            className="source_700"
          >
            Our timeline
            <div
              style={{
                background: '#191970',
                height: '4.5px',
                width: '4rem',
                position: 'absolute',
                top: '3.5rem',
                left: '-2.9rem',
                transform: 'rotate(-90deg)',
              }}
            ></div>
          </h2>

          {/* <!-- The Timeline --> */}
          <Zoom>
            <ul className="timeline">
              {/* <!-- Item 1 --> */}
              <li>
                <div className="direction-r">
                  <div className="flag-wrapper">
                    <span className="flag">Continues</span>
                    <span className="time-wrapper">
                      <span className="time">2013 - present</span>
                    </span>
                  </div>
                  <div className="desc poppins_regular_400">
                    Fire of passion ignites way more intensely than that of
                    before
                  </div>
                </div>
              </li>

              {/* <!-- Item 2 --> */}
              <li>
                <div className="direction-l">
                  <div className="flag-wrapper">
                    <span className="flag">Stepping Stones</span>
                    <span className="time-wrapper">
                      <span className="time">2011 - 2013</span>
                    </span>
                  </div>
                  <div className="desc poppins_regular_400">
                    We realized that, stepping back is also a way to grow.
                  </div>
                </div>
              </li>

              {/* <!-- Item 3 --> */}
              <li>
                <div className="direction-r">
                  <div className="flag-wrapper">
                    <span className="flag">The Jump</span>
                    <span className="time-wrapper">
                      <span className="time">2022 - 2023</span>
                    </span>
                  </div>
                  <div className="desc poppins_regular_400">
                    We managed to make a long jump to make it grow bigger.
                  </div>
                </div>
              </li>
              {/* <!-- Item 2 --> */}
              <li>
                <div className="direction-l">
                  <div className="flag-wrapper">
                    <span className="flag">The Beginning</span>
                    <span className="time-wrapper">
                      <span className="time">2022 - 2023</span>
                    </span>
                  </div>
                  <div className="desc poppins_regular_400">
                    It was the beginning where our idea came into existence.
                  </div>
                </div>
              </li>
            </ul>
          </Zoom>
        </main>
      </>
    </Layout>
  );
};

export default AboutPage;
