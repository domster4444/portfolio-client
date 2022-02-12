import React from 'react';
import { useEffect, useState } from 'react';
import { globalConstant } from 'constant/constant';
import axios from 'axios';
import styled from 'styled-components';
// @ts-ignore
import DashboardLayout from 'components/DashboardLayout';
import Image from 'next/image';
import Bg from 'public/images/pages/profile/bg.jpg';
import member1 from 'public/images/members/member1.jpg';

const BgContainer = styled.div`
  height: 30rem;
  width: 100%;
  overflow: hidden;
`;
const ProfileFormContainer = styled.div`
  border: 1px solid black;
  width: 100%;
  position: relative;
`;
const ProfileFormSection = styled.div`
  position: absolute;
  top: -15rem;
  /* border: 5px solid green; */
  width: 100%;
  display: flex;
  justify-content: space-between;
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
`;
const RightProfile = styled.section`
  width: 72%;
  padding: 2rem;
  @media (max-width: 1275px) {
    width: 100%;
  }
`;
const LeftFormSection = styled.section`
  padding: 1rem;
  border-radius: 0.35rem;
  background: white;
`;
const RightFormSection = styled.section`
  padding: 1rem;
  border-radius: 0.35rem;
  background: white;
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
    font-size: 1.2rem;
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
  border-radius: 0.35rem;
  margin-top: 1rem;
  cursor: pointer;
  &:hover {
    background: #000;
    color: #fff;
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
  }, []);

  return (
    <>
      <DashboardLayout>
        <>
          <BgContainer>
            <Image src={Bg} alt="" />
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

                    <h2>{userName}</h2>
                    <span>{userEmail}</span>
                  </UserAvatar>
                  <br />
                  <StatusTab>
                    <hr />
                    <span>Plan : {userPlan.toUpperCase()}</span>
                  </StatusTab>
                  <StatusTab>
                    <hr />
                    <span>Expiry Date</span>
                  </StatusTab>

                  <StatusTab>
                    <hr />
                    <span>Themes Used</span>
                  </StatusTab>
                  <StatusTab>
                    <hr />
                    <span>
                      Account Verified :
                      {` ${isEmailVerified.toString().toUpperCase()}`}
                    </span>
                  </StatusTab>
                  <StatusTab>
                    <hr />
                    <span>You Logged In Via : {authMethod.toUpperCase()}</span>
                  </StatusTab>

                  <LeftFormBtn>View Public Profile</LeftFormBtn>
                </LeftFormSection>
              </LeftProfile>

              <RightProfile>
                <RightFormSection>
                  <header>
                    <h1>Account Settings</h1>

                    <div>
                      <input type="text" />
                      <input type="text" />
                    </div>
                  </header>
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
