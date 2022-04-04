/* eslint-disable react/no-unescaped-entities */
import React from 'react';
// @ts-ignore
import Layout from 'components/Layout';
import styled from 'styled-components';

export const Title = styled.h3`
  font-size: 4rem;
  margin: 0;

  span {
    color: rgb(25, 25, 112);
  }
`;
export const SubText = styled.h3`
  font-size: 1.5rem;
  color: #ccc;
`;
export const Paragraph = styled.p`
  margin-top: 1rem;
  font-size: 1.6rem;
`;
export const DataBox = styled.p`
  margin: 4rem 0rem;
  font-size: 1.6rem;
  color: black;
  padding: 2rem;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px;
  h3 {
    font-size: 2.6rem;
  }

  ul {
    margin-top: 1.5rem;
    h4 {
      font-size: 1.7rem;
    }
    list-style-type: none;
    li {
      margin-top: 1.5rem;
      position: relative;
      i {
        background: rgba(174, 174, 245, 0.46);
        padding: 0.5rem;
        color: rgba(174, 174, 245, 1);
        position: absolute;
        top: 0.2rem;
        left: -0.5rem;
        border-radius: 50%;
      }
      width: 90%;
      font-size: 1.6rem;
      color: black;
      padding-left: 2.5rem;
    }
  }
`;
const PrivacyWrapper = styled.div`
  padding: 5rem 0rem;
`;

const index = () => {
  return (
    <>
      <Layout>
        <PrivacyWrapper>
          <Title className="poppins_semibold_600">
            Privacy & <span>Policy</span>
          </Title>
          <SubText className="poppins_medium_500">
            Last updated on April 03,2022
          </SubText>

          <Paragraph className="poppins_medium_500 ">
            Below are our dummy Privacy & Policy, which outline a lot of legal
            goodies,but the buttom line is it's our aim to always take care of
            both you, as a customer, or as a seller on our platform
          </Paragraph>
          <DataBox className="poppins_regular_400">
            <h3 className="poppins_medium_500">Licensing Policy</h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
            voluptatum hic eius vel eum quam tempora enim culpa a quibusdam.
            <ul>
              <h4 className="poppins_semibold_600">
                Here are terms of our Standard License:
              </h4>
              <li>
                <i className="bx bxs-chevron-right" />
                The Standard License grants you a non-exclusive right to make
                use
              </li>
              <li>
                <i className="bx bxs-chevron-right" />
                The Standard License grants you a non-exclusive right to make
                use
              </li>
              <li>
                <i className="bx bxs-chevron-right" />
                The Standard License grants you a non-exclusive right to make
                use
              </li>
            </ul>
            <ul>
              <h4 className="poppins_semibold_600">
                Here are terms of our Standard License:
              </h4>
              <li>
                <i className="bx bxs-chevron-right" />
                The Standard License grants you a non-exclusive right to make
                use
              </li>
              <li>
                <i className="bx bxs-chevron-right" />
                The Standard License grants you a non-exclusive right to make
                use
              </li>
              <li>
                <i className="bx bxs-chevron-right" />
                The Standard License grants you a non-exclusive right to make
                use
              </li>
            </ul>
          </DataBox>
          <DataBox className="poppins_regular_400">
            <h3 className="poppins_medium_500">Licensing Policy</h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
            voluptatum hic eius vel eum quam tempora enim culpa a quibusdam.
            <ul>
              <h4 className="poppins_semibold_600">
                Here are terms of our Standard License:
              </h4>
              <li>
                <i className="bx bxs-chevron-right" />
                The Standard License grants you a non-exclusive right to make
                use
              </li>
              <li>
                <i className="bx bxs-chevron-right" />
                The Standard License grants you a non-exclusive right to make
                use
              </li>
              <li>
                <i className="bx bxs-chevron-right" />
                The Standard License grants you a non-exclusive right to make
                use
              </li>
            </ul>
            <ul>
              <h4 className="poppins_semibold_600">
                Here are terms of our Standard License:
              </h4>
              <li>
                <i className="bx bxs-chevron-right" />
                The Standard License grants you a non-exclusive right to make
                use
              </li>
              <li>
                <i className="bx bxs-chevron-right" />
                The Standard License grants you a non-exclusive right to make
                use
              </li>
              <li>
                <i className="bx bxs-chevron-right" />
                The Standard License grants you a non-exclusive right to make
                use
              </li>
            </ul>
          </DataBox>
          <Paragraph className="poppins_medium_500 ">
            Below are our dummy Privacy & Policy, which outline a lot of legal
            goodies,but the buttom line is it's our aim to always take care of
            both you, as a customer, or as a seller on our platform Below are
            our dummy Privacy & Policy, which outline a lot of legal goodies,but
            the buttom line is it's our aim to always take care of both you, as
            a customer, or as a seller on our platform
          </Paragraph>
        </PrivacyWrapper>
      </Layout>
    </>
  );
};

export default index;
