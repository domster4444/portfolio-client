import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
// images
import client1 from 'public/images/clients/1.jpg';
import client2 from 'public/images/clients/2.jpg';
import client3 from 'public/images/clients/3.jpg';
import client4 from 'public/images/clients/4.jpg';

// components

const index: React.FC = () => {
  return (
    <div>
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <Image
              src={client1}
              height={100}
              width={250}
              alt="client company logo"
            />
          </div>
          <div className="slide">
            <Image
              src={client2}
              height={100}
              width={250}
              alt="client company logo"
            />
          </div>
          <div className="slide">
            <Image
              src={client3}
              height={100}
              width={250}
              alt="client company logo"
            />
          </div>
          <div className="slide">
            <Image
              src={client4}
              height={100}
              width={250}
              alt="client company logo"
            />
          </div>
          <div className="slide">
            <Image
              src={client1}
              height={100}
              width={250}
              alt="client company logo"
            />
          </div>
          <div className="slide">
            <Image
              src={client2}
              height={100}
              width={250}
              alt="client company logo"
            />
          </div>
          <div className="slide">
            <Image
              src={client3}
              height={100}
              width={250}
              alt="client company logo"
            />
          </div>
          <div className="slide">
            <Image
              src={client4}
              height={100}
              width={250}
              alt="client company logo"
            />
          </div>
          <div className="slide">
            <Image
              src={client1}
              height={100}
              width={250}
              alt="client company logo"
            />
          </div>
          <div className="slide">
            <Image
              src={client2}
              height={100}
              width={250}
              alt="client company logo"
            />
          </div>
          <div className="slide">
            <Image
              src={client3}
              height={100}
              width={250}
              alt="client company logo"
            />
          </div>
          <div className="slide">
            <Image
              src={client4}
              height={100}
              width={250}
              alt="client company logo"
            />
          </div>
          <div className="slide">
            <Image
              src={client1}
              height={100}
              width={250}
              alt="client company logo"
            />
          </div>
          <div className="slide">
            <Image
              src={client2}
              height={100}
              width={250}
              alt="client company logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
