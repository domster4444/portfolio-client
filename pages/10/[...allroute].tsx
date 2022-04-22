/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';

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
    <div id="tenMainPage">
      <div className="header-container">
        <div className="header-details-container">
          <div className="header-details">
            <h1>
              {firstName} {lastName}
            </h1>
            <h2>GRAPHIC DESIGNER</h2>
            <p>{bio}</p>
          </div>
          <div className="main-skill-container">
            {(() => {
              return skills.map((item, index) => {
                return (
                  <>
                    <div className="main-skill" key={index}>
                      <div className="icon-box">
                        <i className="fas fa-crop-alt"></i>
                      </div>
                      <div className="main-skill-item">
                        <h4>{item.skillName}</h4>
                        <h5>{item.skillLevel}</h5>
                      </div>
                    </div>
                  </>
                );
              });
            })()}
          </div>
        </div>

        <div className="img-box">
          <img src={profilePhoto} alt="" />
        </div>
      </div>
      <div className="body-container">
        <div className="side-section">
          <div className="followme">
            <h3 id="followme">FOLLOW ME</h3>
            <hr />
            <a href="#">
              <div className="icon-box-small">
                <i className="bx bxl-instagram"></i>
              </div>{' '}
              {instagram}
            </a>
            <a href="#">
              <div className="icon-box-small">
                <i className="bx bxl-facebook"></i>
              </div>
              {facebook}
            </a>
          </div>

          <div className="contact">
            <h3 id="contact">CONTACT</h3>
            <hr />
            {/* <a href={facebook}>
              <div className="icon-box-small">
                <i className="bx bxl-facebook"></i>
              </div>{' '}
              {facebook}
            </a> */}
            <a
              href={`mailto:${email}?subject=Request Letter to Hire a New Employee&body=Hello There, I am ...... and I would like to hire you for our project. Please contact me back."`}
            >
              <div className="icon-box-small">
                <i className="bx bxl-gmail"></i>
              </div>{' '}
              {email}
            </a>
            <a href={linkedIn}>
              <div className="icon-box-small">
                <i className="bx bxl-linkedin"></i>
              </div>{' '}
              {linkedIn}
            </a>

            <a href={github}>
              <div className="icon-box-small">
                <i className="bx bxl-github"></i>
              </div>{' '}
              {github}
            </a>

            {/* <a href="#"> */}
            {/* <div className="icon-box-small"> */}
            {/* <i className="fas fa-map-marker-alt"></i> */}
            {/* </div> */}
            {/* {address}  */}
            {/* </a> */}
          </div>
          <div className="skills">
            <h3>SKILLS</h3>
            <hr />
            <div className="skill">
              <p>Communication</p>
              <div className="skill-progress-cover">
                <div id="communication"></div>
              </div>
            </div>
            <div className="skill">
              <p>Creativity</p>
              <div className="skill-progress-cover">
                <div id="creativity"></div>
              </div>
            </div>
            <div className="skill">
              <p>Teamwork</p>
              <div className="skill-progress-cover">
                <div id="teamwork"></div>
              </div>
            </div>
            <div className="skill">
              <p>Organization</p>
              <div className="skill-progress-cover">
                <div id="organization"></div>
              </div>
            </div>
          </div>
          <div className="hobbies">
            <h3>HOBBIES</h3>
            <hr />
            <div className="hobby">
              <p>Road Trips</p>
              <div className="icon-box">
                <i className="fas fa-motorcycle"></i>
              </div>
            </div>
            <div className="hobby">
              <p>Photography</p>
              <div className="icon-box">
                <i className="fas fa-camera-retro"></i>
              </div>
            </div>
            <div className="hobby">
              <p>Football</p>
              <div className="icon-box">
                <i className="fas fa-futbol"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="main-section">
          <div className="educations">
            <h3 id="education">EDUCATION</h3>
            <hr />
            <div className="education">
              <div className="year">2020/2022</div>
              <div className="education-content">
                <p className="title">Master of Science</p>
                <p>Faculty of Engineering & Design, University of Totonto</p>
              </div>
            </div>
            <div className="education">
              <div className="year">2016/2020</div>
              <div className="education-content">
                <p className="title">Master of Science</p>
                <p>Faculty of Engineering & Design, University of Totonto</p>
              </div>
            </div>
          </div>

          {(() => {
            if (workHistory.length !== 0) {
              return (
                <div className="experiences">
                  <h3>EXPERIENCES</h3>
                  <hr />

                  {(() => {
                    return workHistory.map((item, index) => {
                      return (
                        <div className="experience" key={index}>
                          <h4>{item.destination}</h4>
                          <h5>{item.companyName}</h5>
                          <p>{item.workDescription}</p>
                          <p className="date">
                            Joined In : {item.dateOfJoining}{' '}
                          </p>
                        </div>
                      );
                    });
                  })()}
                </div>
              );
            } else {
              return null;
            }
          })()}

          <div className="interests-languages">
            <div className="interests">
              <h3 id="interests">INTERESTS</h3>
              <hr />
              <div className="interest-container">
                <div className="interest">
                  <div className="icon-box">
                    <i className="fas fa-pencil-ruler"></i>
                  </div>
                  <p>
                    Infographic <br />
                    Design
                  </p>
                </div>
                <div className="interest">
                  <div className="icon-box">
                    <i className="fas fa-spa"></i>
                  </div>
                  <p>
                    Ecology <br />
                    Design
                  </p>
                </div>
                <div className="interest">
                  <div className="icon-box">
                    <i className="fas fa-plane"></i>
                  </div>
                  <p>Traveling</p>
                </div>
              </div>
            </div>
            <div className="languages">
              <h3 id="languages">LANGUAGES</h3>
              <hr />
              <div className="language-container">
                <div className="language">
                  <p>English</p>
                  <p className="icons">
                    <i className="fas fa-circle"></i>
                    <i className="fas fa-circle"></i>
                    <i className="fas fa-circle"></i>
                    <i className="fas fa-circle"></i>
                    <i className="far fa-circle"></i>
                  </p>
                </div>
                <div className="language">
                  <p>Spanish</p>
                  <p className="icons">
                    <i className="fas fa-circle"></i>
                    <i className="fas fa-circle"></i>
                    <i className="fas fa-circle"></i>
                    <i className="far fa-circle"></i>
                    <i className="far fa-circle"></i>
                  </p>
                </div>
                <div className="language">
                  <p>French</p>
                  <p className="icons">
                    <i className="fas fa-circle"></i>
                    <i className="fas fa-circle"></i>
                    <i className="fas fa-circle"></i>
                    <i className="far fa-circle"></i>
                    <i className="far fa-circle"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
