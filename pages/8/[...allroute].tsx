/* eslint-disable @next/next/no-img-element */
//! Extra - import useEffect
import React, { useEffect } from 'react';

import Image from 'next/image';
// @ts-ignore
import homeImg from 'public/images/themes/8theme/img/home.jpg';
// @ts-ignore
import aboutImg from 'public/images/themes/8theme/img/about.jpg';
// @ts-ignore
import testimonial1 from 'public/images/themes/8theme/img/testimonial1.jpg';
// @ts-ignore
import testimonial2 from 'public/images/themes/8theme/img/testimonial2.jpg';
// @ts-ignore
import testimonial3 from 'public/images/themes/8theme/img/testimonial3.jpg';
// @ts-ignore
import work1 from 'public/images/themes/8theme/img/work1.jpg';
// @ts-ignore
import work2 from 'public/images/themes/8theme/img/work2.jpg';
// @ts-ignore
import work3 from 'public/images/themes/8theme/img/work3.jpg';
// @ts-ignore
import work4 from 'public/images/themes/8theme/img/work4.jpg';
// @ts-ignore
import work5 from 'public/images/themes/8theme/img/work5.jpg';
// @ts-ignore
import work6 from 'public/images/themes/8theme/img/work6.jpg';

//! extra imports start
import { axiosInstance } from '../../lib/utilities/api/api';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import styled, { withTheme } from 'styled-components';
//! extra imports ends

const Index = () => {
  // _____STATES______
  const [firstName, setFirstName] = React.useState('');
  const [middleName, setMiddleName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [profilePhoto, setProfilePhoto] = React.useState('');
  const [secondaryPicture, setSecondaryPicture] = React.useState('');
  const [bio, setBio] = React.useState('');
  const [facebook, setFacebook] = React.useState('');
  const [linkedIn, setLinkedIn] = React.useState('');
  const [instagram, setInstagram] = React.useState('');
  const [github, setGithub] = React.useState('');
  const [skills, setSkills] = React.useState<any[]>([]);
  const [projects, setProjects] = React.useState<any[]>([]);
  const [education, setEducation] = React.useState<any[]>([]);
  const [workHistory, setWorkHistory] = React.useState<any[]>([]);
  const [email, setEmail] = React.useState<string | null>(null);
  const [whatsApp, setWhatsApp] = React.useState<string | null>(null);
  const [messenger, setMessenger] = React.useState<string | null>(null);
  const [yearsOfExperience, setYearsOfExperience] =
    React.useState<string | null>(null);
  const [noOfCompletedProjects, setNoOfCompletedProjects] =
    React.useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    //?   fetch userName from url
    const myWindowUrl = window.location.href;
    const urlArray = myWindowUrl.split('/');
    console.log(urlArray[4]);
    const userName = urlArray[4];

    console.log('user name in url is : ', userName);

    //?   fetch useDetails from userName of url

    console.log('USER NAME______________________');
    console.log(typeof userName);
    console.log(userName);
    console.log(userName);
    console.log(userName);
    console.log(userName);
    console.log(userName);
    console.log(userName);
    console.log(userName);
    console.log(userName);
    console.log(userName);
    console.log(userName);
    console.log('USER NAME______________________');
    axiosInstance
      .post('/api/v1/users/themeDetails', {
        userName: userName,
      })

      .then((res: any) => {
        // toast(res.data.message, {
        //   position: 'top-center',
        // });
        console.log('🌅🌅🌅🌅🌅axios themeDetails update Success', res.data);
        setFirstName(res.data.detailExist.firstName);
        setMiddleName(res.data.detailExist.middleName);
        setLastName(res.data.detailExist.lastName);
        setProfilePhoto(res.data.detailExist.profilePhoto);
        setBio(res.data.detailExist.bio);
        setFacebook(res.data.detailExist.facebook);
        setLinkedIn(res.data.detailExist.linkedin);
        setInstagram(res.data.detailExist.instagram);
        setGithub(res.data.detailExist.github);
        setLinkedIn(res.data.detailExist.github);
        setSkills(res.data.detailExist.skills);
        setEmail(res.data.detailExist.email);
        setWorkHistory(res.data.detailExist.workExperience);
        setProjects(res.data.detailExist.projects);
        setSecondaryPicture(res.data.detailExist.secondaryPicture);
        setYearsOfExperience(res.data.detailExist.yearsOfExperience);
        setNoOfCompletedProjects(res.data.detailExist.noOfCompletedProjects);
        setEducation(res.data.detailExist.education);
      })
      .catch((error) => {
        console.log(' 🟠axios themeDetails error', error);
        toast(error, {
          position: 'top-center',
        });
      });
  }, []);

  /**
   * @param (string:str) : converts to title case to str
   */
  function toTitleCase(str: string) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  return (
    <>
      {(() => {
        console.log('🌠 HTMLs RENDERED ');
      })()}

      <div className="eightMainPage">
        <div className="eightBody">
          <main className="l-main">
            {/* <!--===== HOME =====--> */}

            <section className="home" id="home">
              <div className="home__container bd-container bd-grid">
                <div className="home__data">
                  <span className="home__greeting">Hello,My name is </span>

                  <h1 className="home__name">{firstName}</h1>

                  <span className="home__profession">Web Developer</span>
                  <a
                    download="./assets/pdf/Clay-Doe-Cv.pdf"
                    className="button button-light"
                  >
                    Download CV
                  </a>
                </div>

                <div className="home__social">
                  <a href={facebook} className="home__social-icon">
                    <i
                      style={{
                        fontSize: '2rem',
                      }}
                      className="bx bxl-facebook-square"
                    ></i>
                  </a>
                  <a href={instagram} className="home__social-icon">
                    <i
                      style={{
                        fontSize: '2rem',
                      }}
                      className="bx bxl-instagram"
                    ></i>
                  </a>
                  <a href={linkedIn} className="home__social-icon">
                    <i
                      style={{
                        fontSize: '2rem',
                      }}
                      className="bx bxl-twitter"
                    ></i>
                  </a>
                </div>

                <div className="home__img">
                  {/* @ts-ignore */}
                  <Image
                    className="invisible"
                    height="700"
                    width="500"
                    src={homeImg}
                    alt=""
                  />

                  {(() => {
                    if (profilePhoto) {
                      return (
                        <img
                          src={profilePhoto && profilePhoto}
                          alt=""
                          style={{
                            // height: '100%',
                            // width: '100%',
                            border: '6px solid white',
                            borderTopRightRadius: '50%',
                            borderBottomLeftRadius: '50%',
                          }}
                          className="home__img"
                        />
                      );
                    }
                  })()}
                </div>
              </div>
            </section>
            {/* <!--===== ABOUT =====--> */}

            <section className="about section bd-container" id="about">
              <span className="section-subtitle">My History</span>
              <h2 className="section-title">ABout me</h2>
              <div className="about__container">
                <div className="about__data">
                  <p
                    className="about__description"
                    style={{
                      margin: '0.35rem',
                    }}
                  >
                    {/* <span> */}
                    {/* Hello , I am <br />{' '} */}
                    {/* </span> */}
                    {bio}
                  </p>

                  <div>
                    {(() => {
                      if (yearsOfExperience !== null) {
                        return (
                          <div>
                            <span className="about__number">
                              {yearsOfExperience}
                            </span>
                            <span className="about__achievement">
                              Years Of Experience
                            </span>
                          </div>
                        );
                      }
                    })()}

                    {(() => {
                      if (noOfCompletedProjects !== null) {
                        return (
                          <div>
                            <span className="about__number">
                              {noOfCompletedProjects}++
                            </span>
                            <span className="about__achievement">
                              Project Completed
                            </span>
                          </div>
                        );
                      }
                    })()}

                    {/* <div>
                      <span className="about__number">07</span>
                      <span className="about__achievement">
                        Best Work Awards
                      </span>
                    </div> */}
                  </div>
                  {/* @ts-ignore */}

                  <img
                    height="700"
                    width="500"
                    src={secondaryPicture}
                    alt=""
                    className="about__img"
                  />
                </div>
              </div>
            </section>

            {/* <!--===== QUALIFICATION =====--> */}

            <section className="qualification section bd-container">
              <span className="section-subtitle">Experience & education</span>
              <h2 className="section-title">Qualification</h2>

              <div
                className={
                  education.length <= 4
                    ? `qualification__container`
                    : `qualification__container   bd-grid`
                }
              >
                <div className="qualification__content">
                  <h2 className="qualification__title">
                    <i
                      style={{
                        fontSize: '2rem',
                      }}
                      className="bx bx-briefcase-alt qualification__title-icon"
                    ></i>
                    Work Experience
                  </h2>
                  <div className="bd-grid">
                    {/*//! <!-- qualification card --> */}

                    {(() => {
                      if (education.length >= 4) {
                        let printCount = 0;
                        return education.map((item, index) => {
                          printCount++;
                          //? up to 1- 4
                          if (printCount > 4) {
                            return null;
                          }
                          return (
                            <div className="qualification__data" key={index}>
                              <h3 className="qualification__area">
                                {item.organizationName}
                              </h3>
                              <div className="qualification__box">
                                {/* <span className="qualification__work">
                                  <i
                                    style={{
                                      fontSize: '2rem',
                                    }}
                                    className="bx bx-briefcase-alt qualification__icon"
                                  ></i>
                                  Figma - New York
                                </span> */}
                                <span className="qualification__work">
                                  <i
                                    style={{
                                      fontSize: '2rem',
                                    }}
                                    className="bx bx-calendar-alt qualification__icon"
                                  ></i>
                                  {item.dateOfJoining} - {item.dateOfLeaving}
                                </span>
                              </div>
                            </div>
                          );
                        });
                      } else {
                        return education.map((item, index) => {
                          return (
                            <div className="qualification__data" key={index}>
                              <h3 className="qualification__area">
                                {item.organizationName}
                              </h3>
                              <div className="qualification__box">
                                <span className="qualification__work">
                                  {/* <i
                                    style={{
                                      fontSize: '2rem',
                                    }}
                                    className="bx bx-briefcase-alt qualification__icon"
                                  ></i> */}
                                  {/* Figma - New York */}
                                </span>
                                <span className="qualification__work">
                                  <i
                                    style={{
                                      fontSize: '2rem',
                                    }}
                                    className="bx bx-calendar-alt qualification__icon"
                                  ></i>
                                  {item.dateOfJoining} - {item.dateOfLeaving}
                                </span>
                              </div>
                            </div>
                          );
                        });
                      }
                    })()}
                  </div>
                </div>

                {/* //! right section start */}

                {(() => {
                  if (education.length <= 4) {
                  } else {
                    return (
                      <div className="qualification__content">
                        <h2 className="qualification__title">
                          <i
                            style={{
                              fontSize: '2rem',
                            }}
                            className="bx bx-book-bookmark qualification__title-icon"
                          ></i>
                          Education
                        </h2>
                        <div className="bd-grid">
                          {/*//! <!-- qualification card --> */}

                          {(() => {
                            if (education.length >= 4) {
                              let a = 0;
                              return education.map((item, index) => {
                                a++;
                                // ?? 5-......
                                // dont show 1 2 3 4th education
                                if (a < 5) {
                                  return null;
                                }
                                return (
                                  <div
                                    className="qualification__data"
                                    key={index}
                                  >
                                    <h3 className="qualification__area">
                                      {item.organizationName}
                                    </h3>
                                    <div className="qualification__box">
                                      {/* <span className="qualification__work">
                              <i
                                style={{
                                  fontSize: '2rem',
                                }}
                                className="bx bx-briefcase-alt qualification__icon"
                              ></i>
                              Figma - New York
                            </span> */}
                                      <span className="qualification__work">
                                        <i
                                          style={{
                                            fontSize: '2rem',
                                          }}
                                          className="bx bx-calendar-alt qualification__icon"
                                        ></i>
                                        {item.dateOfJoining} -{' '}
                                        {item.dateOfLeaving}
                                      </span>
                                    </div>
                                  </div>
                                );
                              });
                            }
                          })()}
                        </div>
                      </div>
                    );
                  }
                  return null;
                })()}

                {/* //! right section  end*/}
              </div>
            </section>

            {/* <!--===== SERVICES =====--> */}

            {(() => {
              if (workHistory.length !== 0) {
                return (
                  <section
                    className="services section bd-container"
                    id="services"
                  >
                    <span className="section-subtitle">What I offer</span>
                    <h2 className="section-title">Services</h2>

                    <div className="services__container bd-grid">
                      {(() => {
                        return workHistory.map((item, index) => {
                          return (
                            <div className="services__data" key={index}>
                              <i
                                style={{
                                  fontSize: '2rem',
                                }}
                                className="bx bx-donate-blood services__icon"
                              ></i>
                              <h3 className="services__title">
                                {item.companyName}
                              </h3>
                              <span>{item.destination}</span>

                              <p className="services__description">
                                {item.workDescription}
                              </p>
                              <span>Joined In : {item.dateOfJoining}</span>
                              {/* <a href="#" className="button">
                                Know more
                              </a> */}
                            </div>
                          );
                        });
                      })()}
                    </div>
                  </section>
                );
              } else {
                return null;
              }
            })()}

            {/* <!--===== PROJECT IN MIND =====--> */}
            <section className="project section bd-container">
              <div className="project__container bd-grid">
                <div
                  className="project__data"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <i
                    style={{
                      fontSize: '2rem',
                    }}
                    className="bx bx-chat project__icon"
                  >
                    {' '}
                  </i>

                  <div>
                    <h2 className="project__title">Project in mind</h2>
                    <p className="project__description">
                      Want me to help you with your project?
                    </p>
                  </div>
                  <div>
                    <a
                      href={`mailto:${email}?subject=Request Letter to Hire a New Employee&body=Hello There, I am ...... and I would like to hire you for our project. Please contact me back."`}
                      className="button button-white"
                    >
                      Hire me
                    </a>
                  </div>
                </div>
              </div>
            </section>
            {/* <!--===== PORTFOLIO =====--> */}
            {(() => {
              if (projects.length !== 0) {
                return (
                  <section
                    className="portfolio section bd-container"
                    id="portfolio"
                  >
                    <span className="section-subtitle">My recent works</span>
                    <h2 className="section-title">Portfolio</h2>

                    {/* <div className="portfolio__nav">
                      <span
                        className="portfolio__item active-portfolio"
                        data-filter="all"
                      >
                        all
                      </span>
                      <span className="portfolio__item" data-filter=".web">
                        web
                      </span>
                      <span className="portfolio__item" data-filter=".ux">
                        ux
                      </span>
                      <span className="portfolio__item" data-filter=".app">
                        app
                      </span>
                    </div> */}
                    <div className="portfolio__container bd-grid">
                      {/* <!-- portfolio box  --> */}
                      {(() => {
                        return projects.map((item: any, index: number) => {
                          return (
                            <div
                              className="portfolio__content mix web"
                              key={index}
                            >
                              <a href="">
                                {/* @ts-ignore */}

                                {(() => {
                                  if (item.projectImage) {
                                    return (
                                      <div className="unset-img">
                                        <img
                                          // @ts-ignore
                                          src={item.projectImage}
                                          alt=""
                                          className="work__img custom-img"
                                        />
                                      </div>
                                    );
                                  } else {
                                    return <></>;
                                  }
                                })()}
                              </a>
                              <div className="portfolio__data">
                                <a href="">
                                  <h2 className="portfolio__title">
                                    {item.projectName}
                                  </h2>
                                </a>
                                <span className="portfolio__subtitle">
                                  {item.projectDescription}
                                </span>
                                <div>
                                  {/* <a href="" className="button button-link">
                                    View Details
                                  </a> */}

                                  <div
                                    className="link-container"
                                    style={{
                                      display: 'flex',
                                    }}
                                  >
                                    <a
                                      style={{
                                        color: 'grey',
                                        fontSize: '2.2rem',
                                        margin: '0rem 0.5rem',
                                      }}
                                      href={item.projectVideoLink}
                                      className="work__button"
                                    >
                                      <i className="bx bxs-video-recording work__icon" />{' '}
                                    </a>
                                    <a
                                      style={{
                                        color: 'grey',
                                        fontSize: '2.2rem',
                                        margin: '0rem 0.5rem',
                                      }}
                                      href={item.projectGithubLink}
                                      className="work__button"
                                    >
                                      <i className="bx bxl-github work__icon"></i>
                                    </a>
                                    <a
                                      style={{
                                        color: 'grey',
                                        fontSize: '2.2rem',
                                        margin: '0rem 0.5rem',
                                      }}
                                      href={item.projectWebsiteLink}
                                      className="work__button"
                                    >
                                      <i className="bx bx-link work__icon"></i>
                                    </a>
                                    <a
                                      style={{
                                        color: 'grey',
                                        fontSize: '2.2rem',
                                        margin: '0rem 0.5rem',
                                      }}
                                      href={item.projectDocLink}
                                      className="work__button"
                                    >
                                      <i className="bx bxs-file-doc work__icon"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        });
                      })()}

                      {/* <!-- portfolio box  --> */}

                      {/* <!-- portfolio box  --> */}
                    </div>
                  </section>
                );
              } else {
                return null;
              }
            })()}

            {/* <!--===== TESTIMONIAL =====--> */}

            {/* <!--===== CONTACTME =====--> */}

            <section className="contact section bd-container" id="contact">
              <span className="section-subtitle">For projects</span>
              <h2 className="section-title">Contact</h2>

              <div className="contact__container bd-grid">
                <div className="contact__content bd-grid">
                  <a href={instagram}>
                    <div className="contact__box">
                      <i
                        style={{
                          fontSize: '2rem',
                          color: 'black',
                        }}
                        className="bx bxl-instagram"
                      ></i>
                      <h3 className="contact__title">Instagram</h3>

                      <a href={instagram}>
                        <span className="contact__description">Visit</span>
                      </a>
                    </div>
                  </a>
                  <a href={linkedIn}>
                    <div className="contact__box">
                      <i
                        style={{
                          fontSize: '2rem',
                          color: 'black',
                        }}
                        className="bx bxl-linkedin"
                      ></i>

                      <h3 className="contact__title">Linkedin</h3>
                      <a href={linkedIn}>
                        <span className="contact__description">Visit</span>
                      </a>
                    </div>
                  </a>

                  <a
                    href={`mailto:${email}?subject=Request Letter to Hire a New Employee&body=Hello There, I am ...... and I would like to hire you for our project. Please contact me back."`}
                  >
                    <div className="contact__box">
                      <i
                        style={{
                          fontSize: '2rem',
                          color: 'black',
                        }}
                        className="bx bxl-gmail"
                      ></i>

                      <h3 className="contact__title">Gmail</h3>
                      <span className="contact__description">{email}</span>
                    </div>
                  </a>
                  <a href={facebook}>
                    <div className="contact__box">
                      <i
                        style={{
                          fontSize: '2rem',
                          color: 'black',
                        }}
                        className="bx bxl-facebook"
                      ></i>

                      <h3 className="contact__title">Facebook</h3>
                      <a href={facebook}>
                        <span className="contact__description">Visit</span>
                      </a>
                    </div>
                  </a>
                </div>

                <form action="" className="contact__form">
                  <div className="contact__inputs">
                    <input
                      type="text"
                      placeholder="Name"
                      className="contact__input"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="contact__input"
                    />
                  </div>
                  <div className="contact__inputs">
                    <input
                      type="text"
                      placeholder="Project"
                      className="contact__input"
                    />
                    <input
                      type="number"
                      placeholder="Number"
                      className="contact__input"
                    />
                  </div>

                  <textarea
                    name=""
                    id=""
                    cols={0}
                    rows={7}
                    placeholder="Message"
                    className="contact__input"
                  ></textarea>
                  <input
                    type="submit"
                    value="Send Message"
                    className="button contact__button"
                  />
                </form>
              </div>
            </section>
          </main>
          <footer className="footer">
            <div className="footer__container bd-container">
              <h1 className="footer__title">
                {firstName} {lastName}
              </h1>
              {/* <p className="footer__description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
                excepturi eligendi, soluta unde architecto cum illo tempora
                alias vitae numquam?
              </p> */}
              <div className="footer__social">
                <a href="" className="footer__link">
                  <i
                    style={{
                      fontSize: '2rem',
                    }}
                    className="bx bxl-facebook"
                  ></i>
                </a>
                <a href="" className="footer__link">
                  <i
                    style={{
                      fontSize: '2rem',
                    }}
                    className="bx bxl-instagram"
                  ></i>
                </a>
                <a href="" className="footer__link">
                  <i
                    style={{
                      fontSize: '2rem',
                    }}
                    className="bx bxl-github"
                  ></i>
                </a>
                <a href="" className="footer__link">
                  <i
                    style={{
                      fontSize: '2rem',
                    }}
                    className="bx bxl-dribble"
                  ></i>
                  <a href="" className="footer__link">
                    <i
                      style={{
                        fontSize: '2rem',
                      }}
                      className="bx bxl-linkedin"
                    ></i>
                  </a>
                </a>
              </div>

              <p className="footer__copy">
                Contact Me for further details @{firstName}
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Index;
