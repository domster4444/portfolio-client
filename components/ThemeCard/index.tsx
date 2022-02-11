/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { Modal, Input, Row, Checkbox, Text, Button } from '@nextui-org/react';
import Link from 'next/link';
import styled from 'styled-components';
import { TweenMax, Power3 } from 'gsap';

const ThemeCardSmall = styled.div`
  width: 30rem;
  cursor: pointer;
  margin: 1rem;
  font-size: 1.4rem;
  overflow: hidden;
  border-radius: 0.35rem;
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
  &:hover {
    border: 0.2rem solid black;
  }
`;

const ThemeCardImg = styled.img`
  width: 100%;
`;
const PreviewBtn = styled.button`
  padding: 0.75rem 2rem;
  border: 0.25rem solid black;
  border-radius: 0.5rem;
  font-size: 1.8rem;
  cursor: pointer;
  background-color: rgb(228, 233, 247);
  a {
    color: black;
  }
  &:hover {
    a {
      color: white;
    }
    color: white;
    border: 0.25rem solid white;
    background-color: rgb(17, 16, 29);
  }
`;
const UseBtn = styled.button`
  padding: 0.75rem 2rem;
  border: 0.25rem solid black;
  border-radius: 0.5rem;
  font-size: 1.8rem;
  cursor: pointer;
  background-color: rgb(228, 233, 247);
  a {
    color: black;
  }
  &:hover {
    a {
      color: white;
    }
    color: white;
    border: 0.25rem solid white;
    background-color: rgb(17, 16, 29);
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
};
// eslint-disable-next-line object-curly-newline
const ThemeCard = ({ url, name, description, imageUrl }: ThemeProps) => {
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
      TweenMax.to(animateThemeCard, 0.1, {
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
            <ThemeCardSmall
              ref={(el) => {
                // @ts-ignore
                animateThemeCard = el;
              }}
            >
              <ThemeCardImg src={`${imageUrl}`} alt="" />
              <br />
              {name}
              <div
                className="themeCard__btnContainer"
                style={themeCardBtnContainer}
              >
                <Link passHref href={`${url}`}>
                  <PreviewBtn className="medium" type="button">
                    Preview
                  </PreviewBtn>
                </Link>

                <UseBtn className="medium" type="button" onClick={handler}>
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
                    <Button auto size="xl" onClick={closeHandler}>
                      Yes I want to use it
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </ThemeCardSmall>
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
