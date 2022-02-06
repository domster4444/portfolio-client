import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
// images
import client1 from 'public/images/clients/1.png';
import client2 from 'public/images/clients/2.png';
import client3 from 'public/images/clients/3.png';
import client4 from 'public/images/clients/4.png';

// components

const SlideContainer = styled.div`
  @-webkit-keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * 7));
    }
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * 7));
    }
  }
  .slider {
    background: white;
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
    height: 100px;
    margin: auto;
    overflow: hidden;
    position: relative;
    width: 100%;
  }
  .slider::before,
  .slider::after {
    background: linear-gradient(
      to right,
      white 0%,
      rgba(255, 255, 255, 0) 100%
    );
    content: '';
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
  }
  .slider::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }
  .slider::before {
    left: 0;
    top: 0;
  }
  .slider .slide-track {
    -webkit-animation: scroll 40s linear infinite;
    animation: scroll 40s linear infinite;
    display: flex;
    width: calc(250px * 14);
  }
  .slider .slide {
    display: flex;
    align-item: center;
    height: 100px;
    width: 250px;
  }
`;

const index: React.FC = () => {
  return (
    <SlideContainer>
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <Image
              src={client1}
              height="100"
              width="250"
              alt="client company logo"
            />
          </div>
          <div className="slide">
            <Image
              src={client2}
              height="100"
              width="250"
              alt="client company logo"
            />
          </div>
          <div className="slide">
            <Image
              src={client3}
              height="100"
              width="250"
              alt="client company logo"
            />
          </div>
          <div className="slide">
            <Image
              src={client4}
              height="100"
              width="250"
              alt="client company logo"
            />
          </div>
          <div className="slide">
            <Image
              src={client1}
              height="100"
              width="250"
              alt="client company logo"
            />
          </div>
          <div className="slide">
            <Image
              src={client2}
              height="100"
              width="250"
              alt="client company logo"
            />
          </div>
          <div className="slide">
            <Image
              src={client3}
              height="100"
              width="250"
              alt="client company logo"
            />
          </div>
          <div className="slide">
            <Image
              src={client4}
              height="100"
              width="250"
              alt="client company logo"
            />
          </div>
          <div className="slide">
            <Image
              src={client1}
              height="100"
              width="250"
              alt="client company logo"
            />
          </div>
          <div className="slide">
            <Image
              src={client2}
              height="100"
              width="250"
              alt="client company logo"
            />
          </div>
          <div className="slide">
            <Image
              src={client3}
              height="100"
              width="250"
              alt="client company logo"
            />
          </div>
          <div className="slide">
            <Image
              src={client4}
              height="100"
              width="250"
              alt="client company logo"
            />
          </div>
          <div className="slide">
            <Image
              src={client1}
              height="100"
              width="250"
              alt="client company logo"
            />
          </div>
          <div className="slide">
            <Image
              src={client2}
              height="100"
              width="250"
              alt="client company logo"
            />
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default index;
