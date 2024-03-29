/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';

// @ts-ignore
import { Fade, Zoom } from 'react-reveal';
import { Modal, Text, Col, Card, Grid, Row, Button } from '@nextui-org/react';

// components
import LayoutValidator from 'components/LayoutValidator';
import ClientCarousel from 'components/ClientCarousel';
import Accordion from 'components/Accordion';
import TeamCarousel from 'components/TeamCarousel';
import FullWidthVideo from 'components/FullWidthVideo';
import heroIllustrator from 'public/images/pages/home/heroIllustrator.svg';
import member1 from 'public/images/members/member1.jpg';

//? why section
const WhySection = styled.section`
  margin: 5rem 0rem;
`;
const WhySectionTitle = styled.h2`
  margin-bottom: 5rem;
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

//? join now section
const JoinNowSection = styled.section`
  margin: 10rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #440ccc;
  border-radius: 1.5rem;
`;
const JoinNowSectionTitle = styled.h2`
  margin-top: 5rem;
  font-size: 5rem;
  @media (max-width: 550px) {
    font-size: 4rem;
  }
  @media (max-width: 360px) {
    font-size: 3rem;
  }
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
  cursor: pointer;
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

//? video section
const VideoSection = styled.section`
  display: flex;
  margin: 10rem 0rem;
  border-radius: 1.5rem;
  background: #f8f8f8;
  overflow: hidden;
  @media (max-width: 935px) {
    flex-direction: column;
  }
`;
const VideoSecLeft = styled.div`
  max-width: 50%;
  min-width: 50%;
  @media (max-width: 935px) {
    max-width: 100%;
    min-width: 100%;
  }
`;
const VideoSecRight = styled.div`
  display: flex;
  padding-left: 2rem;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;
const VideoSecRightTitle = styled.h2`
  font-size: 5rem;
`;
const VideoSecRightBtn = styled.button`
  width: 20rem;
  margin: 2rem 0rem 5rem 0rem;
  padding: 1rem 2rem;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  font-size: 2rem;
  background: #440ccc;
  color: white;
  border: 1px solid transparent;
  &:hover {
    color: #440ccc;
    background: white;
    border: 1px solid #440ccc;
  }
  &:active {
    background: #191970;
    color: white;
  }
`;

const HeroContainer = styled.section`
  margin-top: 2rem;
  border-radius: 2.5rem;
  padding: 0rem 2rem;
  display: flex;
  justify-content: space-between;
  background: #f8f8f8;
  min-height: 50rem;
  align-items: center;
  @media (max-width: 960px) {
    padding-top: 4rem;
    flex-direction: column;
  }
`;

const HomePage: NextPage = () => {
  // watch video button

  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };

  return (
    <LayoutValidator>
      <React.Fragment>
        <Head>
          <title>Home</title>
          <meta name="description" content="Home page of portfolio generator" />
        </Head>

        {/*  video modal start */}
        <Modal blur open={visible} onClose={closeHandler}>
          <FullWidthVideo />
        </Modal>
        {/*  video modal end */}

        <main>
          <HeroContainer>
            <div className="hero__left">
              <h1
                className="poppins_semibold_600"
                style={{
                  fontSize: '7rem',
                  lineHeight: '1.2',
                  color: '#191970',
                  letterSpacing: '0.1rem',
                }}
              >
                We Build <br /> Beautiful Portfolio
              </h1>

              <Link passHref href="/api/auth/login">
                <VideoSecRightBtn className="poppins_regular_400">
                  Join Us
                </VideoSecRightBtn>
              </Link>
            </div>
            <div className="hero__right">
              <Image src={heroIllustrator}></Image>
            </div>
          </HeroContainer>

          <section
            style={{
              margin: '10rem 0rem',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h2
              style={{
                position: 'relative',
                color: '#191970',
                letterSpacing: '0.1rem',
                fontSize: '5rem',
                textAlign: 'center',
              }}
              className="poppins_semibold_600"
            >
              Featured Themes
            </h2>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                flexWrap: 'wrap',
              }}
            >
              {/* //* card start */}
              <Card
                cover
                style={{
                  margin: '1rem',
                  minWidth: '30rem',
                  maxWidth: '35rem',
                }}
              >
                <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                  <Col>
                    <Text
                      size={12}
                      weight="bold"
                      transform="uppercase"
                      color="#ffffffAA"
                    >
                      New
                    </Text>
                    <Text h3 color="black">
                      Acme camera
                    </Text>
                  </Col>
                </Card.Header>
                <Card.Body>
                  <Card.Image
                    src="https://i.imgur.com/6zJPuJw.png"
                    height={400}
                    width="100%"
                    alt="Card example background"
                  />
                </Card.Body>
                <Card.Footer
                  blur
                  css={{
                    position: 'absolute',
                    borderTop:
                      '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
                    bottom: 0,
                    zIndex: 1,
                  }}
                >
                  <Row>
                    <Col>
                      <Text color="#000" size={18}>
                        Available soon.
                      </Text>
                      <Text color="#000" size={14}>
                        Get notified.
                      </Text>
                    </Col>
                    <Col>
                      <Row justify="flex-end">
                        <Button flat auto rounded>
                          <Text size={18} transform="uppercase">
                            Get It
                          </Text>
                        </Button>
                      </Row>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
              {/* //* card start */}
              {/* //* card start */}
              <Card
                cover
                style={{
                  margin: '1rem',
                  minWidth: '30rem',
                  maxWidth: '35rem',
                }}
              >
                <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                  <Col>
                    <Text
                      size={12}
                      weight="bold"
                      transform="uppercase"
                      color="#ffffffAA"
                    >
                      New
                    </Text>
                    <Text h3 color="black">
                      Acme camera
                    </Text>
                  </Col>
                </Card.Header>
                <Card.Body>
                  <Card.Image
                    src="https://i.imgur.com/6zJPuJw.png"
                    height={400}
                    width="100%"
                    alt="Card example background"
                  />
                </Card.Body>
                <Card.Footer
                  blur
                  css={{
                    position: 'absolute',
                    borderTop:
                      '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
                    bottom: 0,
                    zIndex: 1,
                  }}
                >
                  <Row>
                    <Col>
                      <Text color="#000" size={18}>
                        Available soon.
                      </Text>
                      <Text color="#000" size={14}>
                        Get notified.
                      </Text>
                    </Col>
                    <Col>
                      <Row justify="flex-end">
                        <Button flat auto rounded>
                          <Text size={18} transform="uppercase">
                            Get It
                          </Text>
                        </Button>
                      </Row>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
              {/* //* card start */}

              {/* //* card start */}
              <Card
                cover
                style={{
                  margin: '1rem',
                  minWidth: '30rem',
                  maxWidth: '35rem',
                }}
              >
                <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                  <Col>
                    <Text
                      size={12}
                      weight="bold"
                      transform="uppercase"
                      color="#ffffffAA"
                    >
                      New
                    </Text>
                    <Text h3 color="black">
                      Acme camera
                    </Text>
                  </Col>
                </Card.Header>
                <Card.Body>
                  <Card.Image
                    src="https://i.imgur.com/6zJPuJw.png"
                    height={400}
                    width="100%"
                    alt="Card example background"
                  />
                </Card.Body>
                <Card.Footer
                  blur
                  css={{
                    position: 'absolute',
                    borderTop:
                      '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
                    bottom: 0,
                    zIndex: 1,
                  }}
                >
                  <Row>
                    <Col>
                      <Text color="#000" size={18}>
                        Available soon.
                      </Text>
                      <Text color="#000" size={14}>
                        Get notified.
                      </Text>
                    </Col>
                    <Col>
                      <Row justify="flex-end">
                        <Button flat auto rounded>
                          <Text size={18} transform="uppercase">
                            Get It
                          </Text>
                        </Button>
                      </Row>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
              {/* //* card start */}

              {/* //* card start */}
              <Card
                cover
                style={{
                  margin: '1rem',
                  minWidth: '30rem',
                  maxWidth: '35rem',
                }}
              >
                <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                  <Col>
                    <Text
                      size={12}
                      weight="bold"
                      transform="uppercase"
                      color="#ffffffAA"
                    >
                      New
                    </Text>
                    <Text h3 color="black">
                      Acme camera
                    </Text>
                  </Col>
                </Card.Header>
                <Card.Body>
                  <Card.Image
                    src="https://i.imgur.com/6zJPuJw.png"
                    height={400}
                    width="100%"
                    alt="Card example background"
                  />
                </Card.Body>
                <Card.Footer
                  blur
                  css={{
                    position: 'absolute',
                    borderTop:
                      '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
                    bottom: 0,
                    zIndex: 1,
                  }}
                >
                  <Row>
                    <Col>
                      <Text color="#000" size={18}>
                        Available soon.
                      </Text>
                      <Text color="#000" size={14}>
                        Get notified.
                      </Text>
                    </Col>
                    <Col>
                      <Row justify="flex-end">
                        <Button flat auto rounded>
                          <Text size={18} transform="uppercase">
                            Get It
                          </Text>
                        </Button>
                      </Row>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
              {/* //* card start */}
            </div>
          </section>

          {/* team section */}
          <section
            style={{
              margin: '10rem 0rem',
            }}
          >
            <h2
              style={{
                position: 'relative',
                color: '#191970',
                letterSpacing: '0.1rem',
                fontSize: '5rem',
                textAlign: 'center',
              }}
              className="poppins_semibold_600"
            >
              Our Team
            </h2>

            <TeamCarousel />
          </section>

          {/* //? Why section */}
          <WhySection className="whySection">
            <WhySectionTitle className="whySection__title poppins_semibold_600">
              <Fade bottom>Why choose our portfollio with us?</Fade>
            </WhySectionTitle>
            <WhySectionContainer>
              <Fade left>
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
                    No gimmicks, no freemium features, no joke. Get everything
                    you need to build a professional resume that shows off your
                    best qualities to help you land your next job.
                  </p>
                </WhySectionCard>
              </Fade>
              <Fade bottom>
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
                    Rest assured that the templates you find on here are the
                    best around. Based on data from what employers want to see
                    in candidates, we’ve created our templates with hiring in
                    mind..
                  </p>
                </WhySectionCard>
              </Fade>
              <Fade right>
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
                    millions of interested employers on Indeed, the world’s #1
                    job site.
                  </p>
                </WhySectionCard>
              </Fade>
            </WhySectionContainer>
          </WhySection>

          {/* //? Video Section */}
          <VideoSection>
            <VideoSecLeft>
              <FullWidthVideo />
            </VideoSecLeft>

            <VideoSecRight>
              <Fade right>
                <VideoSecRightTitle className="poppins_semibold_600">
                  Watch our video
                </VideoSecRightTitle>
                <VideoSecRightBtn
                  onClick={handler}
                  className="poppins_regular_400"
                >
                  Watch Now
                </VideoSecRightBtn>
              </Fade>
            </VideoSecRight>
          </VideoSection>

          {/* //? Testimonial Section */}
          <section
            className="testimonial"
            style={{
              margin: '15rem 0rem',
            }}
          >
            <h2
              style={{
                position: 'relative',
                color: '#191970',
                letterSpacing: '0.1rem',
                fontSize: '5rem',
              }}
              className="poppins_semibold_600"
            >
              Testimonial Section
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

            <div
              className="testimonial__cardContainer"
              style={{
                marginTop: '5rem',
                display: 'flex',
                flexWrap: 'wrap',

                justifyContent: 'center',
              }}
            >
              <Zoom>
                {/*//* card  1*/}
                <div
                  className="card"
                  style={{
                    position: 'relative',
                    width: '35rem',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    background: 'white',
                    borderRadius: '10px',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                    padding: '1rem',
                    margin: '1rem',
                  }}
                >
                  <div
                    style={{
                      border: '3px  solid #ccc',
                      top: '-4rem',
                      transform: 'translateX(-50%)',
                      marginLeft: '50%',
                      borderRadius: '50%',
                      background: '#7928ca',
                      width: '100px',
                      height: '100px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      overflow: 'hidden',
                      position: 'absolute',
                    }}
                    className="card__img"
                  >
                    <Image
                      height={124}
                      width={124}
                      src={member1}
                      alt="client"
                    />
                  </div>
                  <p
                    style={{
                      marginTop: '5.5rem',
                      fontSize: '1.9rem',
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style={{
                        fill: '#b3b3b3',
                        transform: '',
                        msFilter: '',
                      }}
                    >
                      <path d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 6.925 10H10a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2H3a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789zM20 20h-6a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789C16.094 4.771 18.217 4 21 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 17.925 10H21a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2z"></path>
                    </svg>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    est totam praesentium. Maiores quo doloribus officia cumque
                    error?
                  </p>
                </div>
              </Zoom>

              <Zoom>
                {/* //* card  2 */}
                <div
                  className="card"
                  style={{
                    position: 'relative',
                    width: '35rem',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    background: 'white',
                    borderRadius: '10px',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                    padding: '1rem',
                    margin: '1rem',
                  }}
                >
                  <div
                    style={{
                      top: '-4rem',
                      transform: 'translateX(-50%)',
                      marginLeft: '50%',
                      borderRadius: '50%',
                      background: '#7928ca',
                      width: '100px',
                      height: '100px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      overflow: 'hidden',
                      position: 'absolute',
                      border: '3px  solid #ccc',
                    }}
                    className="card__img"
                  >
                    <Image
                      height={124}
                      width={124}
                      src={member1}
                      alt="client"
                    />
                  </div>
                  <p
                    style={{
                      marginTop: '5.5rem',
                      fontSize: '1.9rem',
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style={{
                        fill: '#b3b3b3',
                        transform: '',
                        msFilter: '',
                      }}
                    >
                      <path d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 6.925 10H10a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2H3a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789zM20 20h-6a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789C16.094 4.771 18.217 4 21 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 17.925 10H21a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2z"></path>
                    </svg>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    est totam praesentium. Maiores quo doloribus officia cumque
                    error?
                  </p>
                </div>
              </Zoom>

              <Zoom>
                {/* //* card 3 */}
                <div
                  className="card"
                  style={{
                    position: 'relative',
                    width: '35rem',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    background: 'white',
                    borderRadius: '10px',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                    padding: '1rem',
                    margin: '1rem',
                  }}
                >
                  <div
                    style={{
                      top: '-4rem',
                      transform: 'translateX(-50%)',
                      marginLeft: '50%',
                      borderRadius: '50%',
                      background: '#7928ca',
                      width: '100px',
                      height: '100px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      overflow: 'hidden',
                      position: 'absolute',
                      border: '3px  solid #ccc',
                    }}
                    className="card__img"
                  >
                    <Image
                      height={124}
                      width={124}
                      src={member1}
                      alt="client"
                    />
                  </div>
                  <p
                    style={{
                      marginTop: '5.5rem',
                      fontSize: '1.9rem',
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style={{
                        fill: '#b3b3b3',
                        transform: '',
                        msFilter: '',
                      }}
                    >
                      <path d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 6.925 10H10a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2H3a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789zM20 20h-6a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789C16.094 4.771 18.217 4 21 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 17.925 10H21a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2z"></path>
                    </svg>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    est totam praesentium. Maiores quo doloribus officia cumque
                    error?
                  </p>
                </div>
              </Zoom>

              <Zoom>
                {/* //* card 4 */}
                <div
                  className="card"
                  style={{
                    position: 'relative',
                    width: '35rem',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    background: 'white',
                    borderRadius: '10px',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                    padding: '1rem',
                    margin: '1rem',
                  }}
                >
                  <div
                    style={{
                      top: '-4rem',
                      transform: 'translateX(-50%)',
                      marginLeft: '50%',
                      borderRadius: '50%',
                      background: '#7928ca',
                      width: '100px',
                      height: '100px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      overflow: 'hidden',
                      position: 'absolute',
                      border: '3px  solid #ccc',
                    }}
                    className="card__img"
                  >
                    <Image
                      height={124}
                      width={124}
                      src={member1}
                      alt="client"
                    />
                  </div>
                  <p
                    style={{
                      marginTop: '5.5rem',
                      fontSize: '1.9rem',
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style={{
                        fill: '#b3b3b3',
                        transform: '',
                        msFilter: '',
                      }}
                    >
                      <path d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 6.925 10H10a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2H3a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789zM20 20h-6a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789C16.094 4.771 18.217 4 21 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 17.925 10H21a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2z"></path>
                    </svg>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    est totam praesentium. Maiores quo doloribus officia cumque
                    error?
                  </p>
                </div>
              </Zoom>
            </div>
          </section>
          {/* //? client carousel */}
          <section
            style={{
              margin: '10rem 0rem',
            }}
          >
            <h2
              style={{
                position: 'relative',
                color: '#191970',
                letterSpacing: '0.1rem',
                fontSize: '5rem',
              }}
              className="poppins_semibold_600"
            >
              Our Clients
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

            <ClientCarousel />
          </section>

          {/* //? FAQ */}
          <section
            style={{
              margin: '10rem 0rem',
            }}
          >
            <h2
              style={{
                position: 'relative',
                color: '#191970',
                letterSpacing: '0.1rem',
                fontSize: '5rem',
              }}
              className="poppins_semibold_600"
            >
              Frequently Asked Question
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
            <Accordion />
          </section>

          {/* //? Join section */}
          <Fade bottom>
            <JoinNowSection>
              <JoinNowSectionTitle className="poppins_bold_800">
                Try It For Free
              </JoinNowSectionTitle>
              <JoinNowSectionBtn className="poppins_regular_400">
                Try Demo
              </JoinNowSectionBtn>
            </JoinNowSection>
          </Fade>
        </main>
      </React.Fragment>
    </LayoutValidator>
  );
};

export default HomePage;
