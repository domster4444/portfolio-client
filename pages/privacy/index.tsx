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
            Last updated on April 13,2022
          </SubText>

          <Paragraph className="poppins_medium_500 ">
            This privacy policy sets out how Hexgrade uses and protects any
            information that you give Hexgrade when you use this website.
            Hexgrade is committed to ensuring that your privacy is protected.
            Should we ask you to provide certain information by which you can be
            identified when using this website, then you can be assured that it
            will only be used in accordance with this privacy statement.
            Hexgrade may change this policy from time to time by updating this
            page. You should check this page from time to time to ensure that
            you are happy with any changes.
          </Paragraph>
          <DataBox className="poppins_regular_400">
            <h3 className="poppins_medium_500">What We Collect</h3>
            We may collect the following information:
            <ul>
              {/* <h4 className="poppins_semibold_600">User Datas</h4> */}
              <li>
                <i className="bx bxs-chevron-right" />
                Contact information including email address,{' '}
              </li>
              <li>
                <i className="bx bxs-chevron-right" />
                Demographic information such as postal code, preferences and
                interests,
              </li>
              <li>
                <i className="bx bxs-chevron-right" />
                Other information relevant to customer surveys and/or offers.
              </li>
            </ul>
          </DataBox>
          <DataBox className="poppins_regular_400">
            <h3 className="poppins_medium_500">
              What We Do With The Information We Gather
            </h3>
            We require this information to understand your needs and provide you
            with a better service, and in particular for the following reasons:
            <ul>
              {/* <h4 className="poppins_semibold_600">
                Here are terms of our Standard License:
              </h4> */}
              <li>
                <i className="bx bxs-chevron-right" />
                Internal record keeping
              </li>
              <li>
                <i className="bx bxs-chevron-right" />
                We may use the information to improve our products and services.
              </li>
              <li>
                <i className="bx bxs-chevron-right" />
                We may periodically send promotional emails about new products,
                special offers or other information which we think you may find
                interesting using the email address which you have provided.{' '}
              </li>
              <li>
                <i className="bx bxs-chevron-right" />• We may periodically send
                From time to time, we may also use your information to contact
                you for market research purposes. We may contact you by email,
                phone, fax or mail. We may use the information to customise the
                website according to your interests.
              </li>
            </ul>
          </DataBox>
          <Paragraph className="poppins_medium_500 ">
            <h2 className="poppins_semibold_600">Security</h2>
            We are committed to ensuring that your information is secure. In
            order to prevent unauthorised access or disclosure, we have put in
            place suitable physical, electronic and managerial procedures to
            safeguard and secure the information we collect online.
          </Paragraph>
          <Paragraph className="poppins_medium_500 ">
            <h2 className="poppins_semibold_600">How We Use Cookies</h2>
            A cookie is a small file which asks permission to be placed on your
            computer's hard drive. Once you agree, the file is added and the
            cookie helps analyse web traffic or lets you know when you visit a
            particular site. Cookies allow web applications to respond to you as
            an individual. The web application can tailor its operations to your
            needs, likes and dislikes by gathering and remembering information
            about your preferences.
            <br />
            We use traffic log cookies to identify which pages are being used.
            This helps us analyse data about web page traffic and improve our
            website in order to tailor it to customer needs. We only use this
            information for statistical analysis purposes and then the data is
            removed from the system. Overall, cookies help us provide you with a
            better website, by enabling us to monitor which pages you find
            useful and which you do not. A cookie in no way gives us access to
            your computer or any information about you, other than the data you
            choose to share with us. You can choose to accept or decline
            cookies. Most web browsers automatically accept cookies, but you can
            usually modify your browser setting to decline cookies if you
            prefer. This may prevent you from taking full advantage of the
            website.
          </Paragraph>

          <Paragraph className="poppins_medium_500 ">
            <h2 className="poppins_semibold_600">Links To Other Website</h2>
            Our website may contain links to other websites of interest.
            However, once you have used these links to leave our site, you
            should note that we do not have any control over that other website.
            Therefore, we cannot be responsible for the protection and privacy
            of any information which you provide whilst visiting such sites and
            such sites are not governed by this privacy statement. You should
            exercise caution and look at the privacy statement applicable to the
            website in question.
          </Paragraph>
        </PrivacyWrapper>
      </Layout>
    </>
  );
};

export default index;
