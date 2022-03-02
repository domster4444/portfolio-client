/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import { useEffect } from 'react';
import { axiosInstance } from 'lib/utilities/api/api';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import { GreyScaleImg } from './Style';
import MainImage from 'public/images/themes/1theme/img/main-img.png';
const ThemeFirst = () => {
  // _____STATES______
  const [firstName, setFirstName] = React.useState('');
  const [middleName, setMiddleName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [profilePhoto, setProfilePhoto] = React.useState('');
  const [bio, setBio] = React.useState('');

  const router = useRouter();
  //?   fetch userName from url
  const userName = router.asPath.slice(3, 24).toString();
  console.log('user name in url is : ', userName);
  useEffect(() => {
    //?   fetch useDetails from userName of url
    axiosInstance
      .post('/api/v1/users/themeDetails', { userName: userName })

      .then((res: any) => {
        // toast(res.data.message, {
        //   position: 'top-center',
        // });
        console.log('💚axios themeDetails update Success', res.data);
        setFirstName(res.data.detailExist.firstName);
        setMiddleName(res.data.detailExist.middleName);
        setLastName(res.data.detailExist.lastName);
        setProfilePhoto(res.data.detailExist.profilePhoto);
        setBio(res.data.detailExist.bio);
      })
      .catch((error) => {
        console.log(' 🟠axios themeDetails error', error);
        toast(error, {
          position: 'top-center',
        });
      });
  });

  function toTitleCase(str: string) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  return (
    <div id="firstTheme">
      <body>
        {/* <!----hero Section start----> */}

        <div className="hero">
          {/* <nav>
            <h2 className="logo">
              Portfo<span>lio</span>
            </h2>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Skills</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
            <a href="#" className="btn">
              Subscribe
            </a>
          </nav> */}

          <div className="hero__left" style={{ color: 'white' }}>
            <h4>Hello, my name is</h4>
            <h1>
              {toTitleCase(firstName)}
              {middleName && (
                <>
                  <br />
                  {toTitleCase(middleName)}
                </>
              )}
              <span> {toTitleCase(lastName)}</span>
            </h1>
            <h3>I'am a Creative Thinker</h3>
            <div className="newslatter">
              {/* <form>
                <input
                  type="email"
                  name="email"
                  id="mail"
                  placeholder="Enter Your Email"
                />
                <input
                  id="btn"
                  type="submit"
                  name="submit"
                  value="Lets Start"
                />
              </form> */}
            </div>
          </div>

          <div className="hero__right">
            <GreyScaleImg>
              {profilePhoto && (
                <Image
                  height={500}
                  width={350}
                  src={profilePhoto}
                  alt="photograph"
                />
              )}
            </GreyScaleImg>
          </div>
        </div>

        {/* <!----About section start----> */}
        <section className="about">
          <div className="main">
            <div className="about-text">
              <h2>About Me</h2>
              <article>
                <h5>
                  Developer <span>& Designer</span>
                </h5>
                <p>{bio}</p>
              </article>
              <button type="button">Let's Talk</button>
            </div>
            <Image className="about__photo" src={MainImage} alt="photograph" />
          </div>
        </section>

        {/* <!-----service section start-----------> */}
        <div className="service">
          <div className="title">
            <h2>My Services</h2>
          </div>

          <div className="box">
            <div className="card">
              <i className="fas fa-bars" />
              <h5>Web Development</h5>
              <div className="pra">
                <p>
                  Every website should be built with two primary goals: Firstly,
                  it needs to work across all devices. Secondly, it needs to be
                  fast as possible.
                </p>

                <p style={{ textAlign: 'center' }}>
                  <a className="button" href="#">
                    Read More
                  </a>
                </p>
              </div>
            </div>

            <div className="card">
              <i className="far fa-user" />
              <h5>Web Development</h5>
              <div className="pra">
                <p>
                  Every website should be built with two primary goals: Firstly,
                  it needs to work across all devices. Secondly, it needs to be
                  fast as possible.
                </p>

                <p style={{ textAlign: 'center' }}>
                  <a className="button" href="#">
                    Read More
                  </a>
                </p>
              </div>
            </div>

            <div className="card">
              <i className="far fa-bell" />
              <h5>Web Development</h5>
              <div className="pra">
                <p>
                  Every website should be built with two primary goals: Firstly,
                  it needs to work across all devices. Secondly, it needs to be
                  fast as possible.
                </p>

                <p style={{ textAlign: 'center' }}>
                  <a className="button" href="#">
                    Read More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!------Contact Me------> */}
        <div className="contact-me">
          <p>Lets Discuss Together.</p>
          <a
            className="button-two"
            href="#"
            style={{
              fontSize: '1.8rem',
            }}
          >
            Hire Me
          </a>
        </div>

        {/* <!------footer start---------> */}
        <footer>
          <p>
            {toTitleCase(firstName)} {toTitleCase(lastName)}
          </p>

          <p>
            Visit below social links to connect with me directly through my
            social media accounts.
          </p>
          <div className="social">
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fab fa-dribbble" />
            </a>
          </div>
          <p className="end">Thank You For Visiting @ CC</p>
        </footer>
      </body>
    </div>
  );
};

export default ThemeFirst;
