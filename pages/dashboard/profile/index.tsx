import React from 'react';
import { useEffect, useState } from 'react';
import { globalConstant } from 'constant/constant';
import axios from 'axios';
import styled from 'styled-components';
// @ts-ignore
import DashboardLayout from 'components/DashboardLayout';
import Image from 'next/image';
// import Bg from 'public/images/pages/profile/bg.jpg';
import member1 from 'public/images/members/member1.jpg';
import Breadcrumbs from 'components/BreadCrumb/index';

const BgContainer = styled.div`
  height: 30rem;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='131' height='131' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(154)'%3E%3Crect width='100%25' height='100%25' fill='rgba(226, 233, 250,1)'/%3E%3Cpath d='M-10 19.5h 60v1h-60zM-10-21h60v1h-60' fill='rgba(232, 239, 252,1)'/%3E%3Ccircle r='0.5' cx='0' cy='20' fill='rgba(203, 218, 246,1)'/%3E%3Ccircle r='0.5' cx='40' cy='20' fill='rgba(203, 218, 246,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ");

  width: 100%;
  overflow: hidden;
`;
const ProfileFormContainer = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  position: relative;
`;
const ProfileFormSection = styled.div`
  position: absolute;
  top: -15rem;
  /* border: 5px solid green; */
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 1275px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftProfile = styled.section`
  /* background: #fff; */
  padding: 2rem;
  width: 40rem;
  @media (max-width: 1275px) {
    width: 40rem;
  }
  @media (max-width: 500px) {
    width: 95%;
  }
`;
const RightProfile = styled.section`
  width: 72%;
  padding: 2rem;
  @media (max-width: 1275px) {
    width: 100%;
  }
`;
const LeftFormSection = styled.section`
  padding: 2rem 2rem;
  border-radius: 0.85rem;
  background: white;
  box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
`;

const UserAvatar = styled.section`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  img {
    border: 5px solid #ececec !important;
    height: 100rem;
    width: 100rem;
    border-radius: 50%;
  }
  h3 {
    font-size: 1.5rem;
  }
  span {
    font-size: 1.4rem;
  }
`;

const StatusTab = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  span {
    font-size: 1.7rem;
  }
  hr {
    margin-bottom: 1rem !important;
    height: 1px;
    background: yellow;
  }
`;
const LeftFormBtn = styled.button`
  width: 100%;
  padding: 1rem 0rem;
  background: #fff;
  border: 1px solid #000;
  font-size: 1.8rem;
  color: #000;
  border-radius: 0.85rem;
  margin-top: 1rem;
  cursor: pointer;
  &:hover {
    background: #000;
    color: #fff;
  }
`;

// ! right form --profile
const RightFormSection = styled.section`
  button {
    margin-top: 1rem;

    @media only screen and (max-width: 1200px) {
      margin-top: 1rem;
      width: 90% !important;
    }
  }

  padding: 1rem;
  border-radius: 0.85rem;
  background: white;
  min-height: 46rem;
  display: flex;
  align-items: center;
  position: relative;

  section.form {
    width: 100%;
    button {
      transform: translateX(-50%);
      margin-left: 50%;
      width: 98%;
    }
  }

  box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
  input {
    box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
    padding-left: 2rem;
    font-size: 2rem;
    &::placeholder {
      font-size: 1.8rem;
    }
    /* background: blue; */
    width: 35rem;
    margin: 0.25rem;
    border: none;

    outline: none;
    border-radius: 1rem;

    height: 5rem;
  }
`;

const RightFormBlog = styled.div`
  height: 6.5rem;
  width: 6.5rem;
  border-radius: 50%;
  position: absolute;
  box-shadow: rgb(0 0 0 / 5%) 0px 6px 24px 0px, rgb(0 0 0 / 8%) 0px 0px 0px 1px;
  background-color: rgba(255, 255, 255, 0.5);
  top: 2rem;
  left: 3rem;
  @media only screen and (max-width: 1200px) {
    top: 3rem;
    left: 5.5rem;
  }

  display: flex;
  justify-content: center;

  align-items: center;

  i {
    font-size: 4rem;
    color: #c1c1c1;
  }
`;
const FormTitle = styled.h3`
  font-size: 3rem;
  padding-left: 2rem;

  /*  when row becomes colument */

  @media only screen and (max-width: 1200px) {
    margin-top: 10rem;
    /* background: red; */

    transform: translateX(-50%);
    margin-left: 50%;
    width: 95%;
  }
`;
const InputRowContainer = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: red; */
  flex-wrap: wrap;

  input {
    width: 32%;
    &:focus {
      border: 1px solid #440ccc;
    }

    /*  when row becomes colument */

    @media only screen and (max-width: 1200px) {
      width: 90%;
      margin-top: 2rem;
    }
  }
`;

const Index: React.FC = () => {
  // for profile pic
  const defaultUserPhoto =
    'https://s.gravatar.com/avatar/4f4f3ed466c638ffe9d2afd6a4630fef?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fks.png';
  const [userPhoto, setUserPhoto] = React.useState<string>(defaultUserPhoto);
  const [userName, setUserName] = React.useState<string>('anonymous');
  const [userEmail, setUserEmail] = React.useState<string>('undefined');
  const [isEmailVerified, setIsEmailVerified] = React.useState<boolean>(false);
  const [authMethod, setAuthMethod] = React.useState<string>('undefined');
  const [userPlan, setUserPlan] = React.useState<string>('free');
  const [isProfileDataUpdated, setProfileUpdatedState] =
    React.useState<boolean>(false);

  const axiosinstance = axios.create({
    baseURL: globalConstant.baseURL,
  });

  function getUserPhoto() {
    axiosinstance.get('/api/auth/me').then(({ data }) => {
      //   console.log(data.email);
      //   console.log(data.email_verified);
      //   console.log(data.nickname);
      console.log(data.picture);
      setUserPhoto(data.picture);
      setUserName(data.nickname);
      setIsEmailVerified(data.email_verified);
      setUserEmail(data.email);

      const authMethod = data.sub;

      if (authMethod.toString().includes('google')) {
        setAuthMethod('google');
      } else if (authMethod.includes('facebook')) {
        setAuthMethod('facebook');
      } else if (authMethod.includes('twitter')) {
        setAuthMethod('twitter');
      } else if (authMethod.includes('github')) {
        setAuthMethod('github');
      } else {
        setAuthMethod('Email & Password');
      }
    });
  }

  useEffect(() => {
    getUserPhoto();
  }, [isProfileDataUpdated]);

  const changeHasUpdatedState = () => {
    setProfileUpdatedState(!isProfileDataUpdated);
  };
  return (
    <>
      <DashboardLayout>
        <>
          <BgContainer>
            <Breadcrumbs breadCrumbLink={['dashboard', 'profile']} />
            <header className="text">Profile</header>

            {/* <Image src={Bg} alt="" /> */}
          </BgContainer>
          <ProfileFormContainer>
            <ProfileFormSection>
              <LeftProfile>
                <LeftFormSection>
                  <UserAvatar>
                    <Image
                      height={'100rem'}
                      width={'100rem'}
                      src={`${userPhoto}`}
                      alt="user photograph"
                    />

                    <h2 className="poppins_regular_400">{userName}</h2>
                    <span className="poppins_regular_400">{userEmail}</span>
                  </UserAvatar>
                  <br />
                  <StatusTab>
                    <span className="poppins_regular_400">
                      Plan : {userPlan.toUpperCase()}
                    </span>
                  </StatusTab>
                  <StatusTab>
                    <span className="poppins_regular_400">Expiry Date</span>
                  </StatusTab>

                  <StatusTab>
                    <span className="poppins_regular_400">Themes Used</span>
                  </StatusTab>
                  <StatusTab>
                    <span className="poppins_regular_400">
                      Account Verified :
                      {` ${isEmailVerified.toString().toUpperCase()}`}
                    </span>
                  </StatusTab>
                  <StatusTab>
                    <span className="poppins_regular_400">
                      You Logged In Via : {authMethod.toUpperCase()}
                    </span>
                  </StatusTab>

                  <LeftFormBtn className="poppins_regular_400">
                    View Public Profile
                  </LeftFormBtn>
                </LeftFormSection>
              </LeftProfile>

              <RightProfile>
                <RightFormSection>
                  <RightFormBlog>
                    <i className="bx bx-user bx-flashing bx-flip-horizontal" />
                  </RightFormBlog>
                  <section className="form">
                    <header>
                      <FormTitle className="poppins_medium_500">
                        Account Settings
                      </FormTitle>

                      <div>
                        <InputRowContainer>
                          <input
                            type="text"
                            placeholder="First name"
                            // value="userName"
                          />
                          <input type="text" placeholder="Middle name" />

                          <input type="number" placeholder="Last name" />
                        </InputRowContainer>
                        <InputRowContainer>
                          <input type="text" placeholder="Organization Name " />

                          <input type="number" placeholder="Phone Number" />
                          <input type="number" placeholder="Age" />
                        </InputRowContainer>
                        <InputRowContainer>
                          <input type="text" placeholder="Country" />
                          <input type="text" placeholder="City" />
                          <input
                            type="email"
                            placeholder="Email"
                            value={userEmail}
                          />
                        </InputRowContainer>
                      </div>
                    </header>

                    <button className="primary-btn poppins_medium_500">
                      Upload
                    </button>
                  </section>
                </RightFormSection>
              </RightProfile>
            </ProfileFormSection>
          </ProfileFormContainer>
        </>
      </DashboardLayout>
    </>
  );
};

export default Index;
