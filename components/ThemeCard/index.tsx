/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { Modal, Input, Row, Checkbox, Text, Button } from '@nextui-org/react';
import Link from 'next/link';
import styled from 'styled-components';
import { TweenMax, Power3 } from 'gsap';

const ThemeCardSmall = styled.div`
  border-radius: 1.35rem;
  .theme_img-container {
    height: 30rem;
    overflow: hidden;
    border-radius: 0.85rem;
    margin-bottom: 0.25rem;
  }
  width: 30rem;
  cursor: pointer;
  margin: 1rem;
  font-size: 1.4rem;
  overflow: hidden;
  box-shadow: 0px 0px 10px 1px lightgrey;
  /* background-color: rgb(17, 16, 29); */
  /* border: 0.25rem solid black; */

  @media only screen and (max-width: 840px) {
    width: 60%;
  }
  @media only screen and (max-width: 640px) {
    width: 75%;
  }
  @media screen and (min-width: 1900px) and (max-width: 5000px) {
    width: 30rem;
  }

  border: 0.2rem solid transparent;
  img {
    transition: all 0.3s ease-in-out;
    transform: scale(1.05) !important;
  }
  &:hover {
    img {
      /* border: 0.2rem solid black; */
      transform: scale(1.1) !important;
      transition: all 0.3s ease-in-out;
    }
  }
`;

const ThemeCardImg = styled.img`
  width: 100%;
`;
// const PreviewBtn = styled.button`
//   width: 49%;
//   padding: 15px 30px;
//   text-align: center;
//   text-transform: uppercase;
//   transition: 0.5s;
//   background-size: 200% auto;
//   color: white;
//   border-radius: 10px;
//   display: block;
//   border: 0px;
//   box-shadow: 0px 0px 14px -7px green;
//   background-image: linear-gradient(45deg, blue 0%, green 51%, blue 100%);
//   cursor: pointer;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;

//   &:hover {
//     background-position: right center;
//     /* change the direction of the change here */
//     color: #fff;
//     text-decoration: none;
//   }

//   &:active {
//     transform: scale(0.95);
//   }
// `;
const UseBtn = styled.button`
  width: 49%;
  padding: 15px 30px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  display: block;
  border: 0px;
  box-shadow: 0px 0px 14px -7px #a890fe;
  background-image: linear-gradient(
    45deg,
    #667eea 0%,
    #a890fe 51%,
    #667eea 100%
  );
  /* #4b6cb7 0%,
    #182848 51%,
    #4b6cb7 100% */

  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    background-position: right center;
    /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }

  &:active {
    transform: scale(0.95);
  }
`;
const themeCardBtnContainer = {
  display: 'flex',
  padding: '0rem 0.7rem',
  justifyContent: 'space-between',
  margin: '0.5rem 0rem',
};
type ThemeProps = {
  url: string;
  name: string;
  description: string;
  imageUrl: string;
  useUrl: string;
};
// eslint-disable-next-line object-curly-newline
const ThemeCard = ({
  url,
  name,
  description,
  imageUrl,
  useUrl,
}: ThemeProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  let animateThemeCard = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 400);

    // alert('not loaded');
    TweenMax.to(animateThemeCard, 0.1, {
      opacity: 0,
      scale: 0.1,
      ease: Power3.easeOut,
    });
  }, []);
  useEffect(() => {
    if (isLoaded === true) {
      TweenMax.to(animateThemeCard, 0.2, {
        opacity: 1,
        scale: 1,
        ease: Power3.easeOut,
      });
    }
  }, [isLoaded]);

  // modal with use modal
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };
  return (
    <>
      {(() => {
        if (isLoaded !== false) {
          return (
            <Link passHref href={`${url}`}>
              <ThemeCardSmall
                ref={(el) => {
                  // @ts-ignore
                  animateThemeCard = el;
                }}
              >
                <div className="theme_img-container">
                  <ThemeCardImg src={`${imageUrl}`} alt="" />
                </div>
                <span
                  className="poppins_regular_400"
                  style={{
                    fontSize: '1.8rem',
                    color: '#4747476c',
                  }}
                >
                  &nbsp;&nbsp;{name}
                </span>
                <div
                  className="themeCard__btnContainer"
                  style={themeCardBtnContainer}
                >
                  <Link passHref href={`${url}`}>
                    <UseBtn
                      className="medium poppins_regular_400"
                      type="button"
                    >
                      Preview
                    </UseBtn>
                  </Link>

                  <UseBtn
                    className="medium poppins_regular_400"
                    type="button"
                    onClick={handler}
                  >
                    Use
                  </UseBtn>

                  <Modal
                    closeButton
                    blur
                    aria-labelledby="modal-title"
                    open={visible}
                    onClose={closeHandler}
                  >
                    <Modal.Header>
                      <Text id="modal-title" size={18}>
                        Do you really want to use this &nbsp;
                        <Text b size={18}>
                          Theme ?
                        </Text>
                      </Text>
                    </Modal.Header>

                    <Modal.Footer>
                      <Button
                        auto
                        flat
                        color="error"
                        size="xl"
                        onClick={closeHandler}
                      >
                        No Go Back
                      </Button>

                      <Link passHref href={`${useUrl}`}>
                        <Button auto size="xl" onClick={closeHandler}>
                          Yes I want to use it
                        </Button>
                      </Link>
                    </Modal.Footer>
                  </Modal>
                </div>
              </ThemeCardSmall>
            </Link>
          );
        }
        return (
          <ThemeCardSmall
            ref={(el) => {
              // @ts-ignore
              animateThemeCard = el;
            }}
          >
            <h1>skeleton here</h1>
            {/* <Stack spacing={1}>
              <Skeleton
                variant="rectangular"
                style={{ width: '100%' }}
                height={158}
              />

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Skeleton
                  style={{ margin: '1rem' }}
                  variant="rectangular"
                  width={100}
                  height={40}
                />

                <Skeleton
                  style={{ margin: '1rem' }}
                  variant="rectangular"
                  width={100}
                  height={40}
                />
              </div>
            </Stack> */}
          </ThemeCardSmall>
        );
      })()}
    </>
  );
};

export default ThemeCard;
