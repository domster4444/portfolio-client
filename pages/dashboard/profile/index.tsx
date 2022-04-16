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
import ProfileForm from 'components/ProfileForm/index';

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
      /* transform: translateX(-50%); */
      /* margin-left: 50%; */
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
  //? PROFILE STATE
  // const [firstName, setFirstName] = useState<string>('');
  // const [lastName, setLastName] = useState<string>('');
  // const [middleName, setMiddleName] = useState<string>('');
  // const [contactNumber, setContactNumber] = useState<string>('');
  // const [city, setCity] = useState<string>('');
  // const [country, setCountry] = useState<string>('');
  // const [age, setAge] = useState<string>('');
  // const [organizationName, setOrganizationName] = useState<string>('');

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
    // getProfileData();
    console.log(globalConstant.serverURL);
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
                    <span className="user-image user-image--large">
                      <img
                        id="profile_dp"
                        className="user-image__avatar user-image__avatar--moonstone"
                        src="https://lh3.googleusercontent.com/a-/AOh14Gh0BmnM-RW-_yaRfUETIvPCrH1Z38nfRTCG0veX6g=s96-c"
                        alt="user"
                      />
                      <svg
                        id="profile_frame"
                        xmlns="http://www.w3.org/2000/svg"
                        width="106"
                        height="120"
                        viewBox="0 0 106 120"
                        name="GemstoneMoonstone"
                        className="user-image__gem"
                      >
                        <defs>
                          <linearGradient
                            id="GemstoneMoonstone_svg__a"
                            x1="67.638%"
                            x2="22.239%"
                            y1="69.379%"
                            y2="-4.429%"
                          >
                            <stop offset="0%" stopColor="#0B90FF"></stop>
                            <stop offset="51.042%" stopColor="#0059A3"></stop>
                            <stop offset="100%" stopColor="#003561"></stop>
                          </linearGradient>
                          <linearGradient
                            id="GemstoneMoonstone_svg__b"
                            x1="44.257%"
                            x2="55.458%"
                            y1="16.681%"
                            y2="54.959%"
                          >
                            <stop offset="0%" stopColor="#0B90FF"></stop>
                            <stop offset="51.042%" stopColor="#0059A3"></stop>
                            <stop offset="100%" stopColor="#003561"></stop>
                          </linearGradient>
                          <linearGradient
                            id="GemstoneMoonstone_svg__c"
                            x1="88.184%"
                            x2="44.044%"
                            y1="26.589%"
                            y2="100.06%"
                          >
                            <stop offset="0%" stopColor="#0B90FF"></stop>
                            <stop offset="51.042%" stopColor="#0059A3"></stop>
                            <stop offset="100%" stopColor="#003561"></stop>
                          </linearGradient>
                          <linearGradient
                            id="GemstoneMoonstone_svg__d"
                            x1="50%"
                            x2="78.082%"
                            y1="22.805%"
                            y2="65.531%"
                          >
                            <stop offset="0%" stopColor="#0B90FF"></stop>
                            <stop offset="51.042%" stopColor="#0059A3"></stop>
                            <stop offset="100%" stopColor="#003561"></stop>
                          </linearGradient>
                          <linearGradient
                            id="GemstoneMoonstone_svg__e"
                            x1="50%"
                            x2="54.011%"
                            y1="0%"
                            y2="129.265%"
                          >
                            <stop offset="0%" stopColor="#0B90FF"></stop>
                            <stop offset="51.042%" stopColor="#0059A3"></stop>
                            <stop offset="100%" stopColor="#003561"></stop>
                          </linearGradient>
                          <linearGradient
                            id="GemstoneMoonstone_svg__f"
                            x1="107.132%"
                            x2="49.561%"
                            y1="44.194%"
                            y2="62.808%"
                          >
                            <stop offset="0%" stopColor="#0B90FF"></stop>
                            <stop offset="51.042%" stopColor="#0059A3"></stop>
                            <stop offset="100%" stopColor="#003561"></stop>
                          </linearGradient>
                          <linearGradient
                            id="GemstoneMoonstone_svg__g"
                            x1="76.576%"
                            x2="41.778%"
                            y1="13.688%"
                            y2="58.819%"
                          >
                            <stop offset="0%" stopColor="#0B90FF"></stop>
                            <stop offset="51.042%" stopColor="#0059A3"></stop>
                            <stop offset="100%" stopColor="#003561"></stop>
                          </linearGradient>
                        </defs>
                        <g fillRule="nonzero" fill="none">
                          <path
                            fill="url(#GemstoneMoonstone_svg__a)"
                            d="M90.127 36.194l13.866-7.953L55.055 0v15.905c.306.102.611.204.815.408L89.107 35.48c.408.204.714.51 1.02.714z"
                            transform="translate(.035)"
                          ></path>
                          <path
                            fill="url(#GemstoneMoonstone_svg__b)"
                            d="M13.56 80.339c-.102-.306-.102-.714-.102-1.121V40.78c0-.408 0-.918.102-1.325L0 31.707v56.482l13.56-7.85z"
                            transform="translate(.035)"
                          ></path>
                          {/* <!-- <path
            fill="url(#GemstoneMoonstone_svg__c)"
            d="M87.897 79.005V40.997c0-.706-.403-1.411-1.008-1.714L53.922 20.33a1.832 1.832 0 00-2.016 0L19.039 39.283c-.604.404-1.008 1.008-1.008 1.714v38.008c0 .706.404 1.411 1.008 1.714l32.867 18.953a1.828 1.828 0 002.016 0L86.788 80.72c.706-.303 1.109-.907 1.109-1.714z"
            transform="translate(.035)"
          ></path> --> */}
                          <path
                            fill="url(#GemstoneMoonstone_svg__d)"
                            d="M15.7 36.092c.205-.204.51-.408.817-.51l33.236-19.167c.408-.204.816-.408 1.224-.51V0L2.039 28.14l13.662 7.952z"
                            transform="translate(.035)"
                          ></path>
                          <path
                            fill="url(#GemstoneMoonstone_svg__e)"
                            d="M92.164 39.761c.102.408.102.714.102 1.122V79.32c0 .305 0 .611-.102.917l13.764 7.952V31.707l-13.764 8.054z"
                            transform="translate(.035)"
                          ></path>
                          <path
                            fill="url(#GemstoneMoonstone_svg__f)"
                            d="M50.977 104.299c-.408-.102-.816-.306-1.224-.509L16.517 84.52c-.306-.204-.612-.407-.918-.713l-13.56 7.85 48.938 28.241v-15.599z"
                            transform="translate(.035)"
                          ></path>
                          <path
                            fill="url(#GemstoneMoonstone_svg__g)"
                            d="M90.229 83.807c-.306.305-.714.51-1.122.815L55.87 103.79c-.306.203-.611.305-.815.407V120l48.938-28.241-13.764-7.952z"
                            transform="translate(.035)"
                          ></path>
                        </g>
                      </svg>
                    </span>
                    {/* ? default dp v1 */}
                    {/* <Image
                      height={'100rem'}
                      width={'100rem'}
                      src={`${userPhoto}`}
                      alt="user photograph"
                    /> */}

                    <h2 className="poppins_regular_400">{userName}</h2>
                    <span
                      style={{
                        wordBreak: 'break-word',
                      }}
                      className="poppins_regular_400"
                    >
                      {userEmail}
                    </span>
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
                      {/* //! input row container */}
                      <ProfileForm />
                      {/* //! input row container */}
                    </header>
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
