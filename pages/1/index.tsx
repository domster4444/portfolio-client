/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
// import { useLocation } from 'react-router-dom';

// images
// import MainImage from '../../public/images/themes/1theme/img/main-img.png';
import Image from 'next/image';

import HeroImage from '../../public/images/themes/1theme/img/hero-img.jpg';
import MainImage from '../../public/images/themes/1theme/img/main-img.png';

const FirstTheme = () => {
  // ? GET CURRENT WINDOW LOCATION
  // const currentLocation = useLocation();
  // const currentPath = currentLocation.pathname;
  // const currentPathArray = currentPath.split('/');
  // const currentPathArrayLength = currentPathArray.length;
  // const currentPathArrayLastItem = currentPathArray[currentPathArrayLength - 1];
  // // console.log('currentLocation =', currentLocation);
  // // console.log('currentPath =', currentPath);
  // // console.log('currentPathArray =', currentPathArray);
  // // console.log('currentPathArrayLength =', currentPathArrayLength);
  // console.log('currentPathArrayLastItem =', currentPathArrayLastItem);

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
              Tahmid <span>Ahmed</span>
            </h1>
            <h3>I'am a Web Developer.</h3>
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
            <Image src={HeroImage} alt="photograph" />
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
                <p>
                  I am a front-end web developer. I can provide clean code and
                  pixel perfect design. I also make the website more & more
                  interactive with web animations.I can provide clean code and
                  pixel perfect design. I also make the website more & more
                  interactive with web animations.A responsive design makes your
                  website accessible to all users, regardless of their device.
                </p>
              </article>
              <button type="button">Let's Talk</button>
            </div>
            <Image className="about__photo" src={MainImage} alt="photograph" />
          </div>
        </section>

        {/* <!-----service section start-----------> */}
        <div className="service">
          <div className="title">
            <h2>Our Services</h2>
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
          <p>Let Me Get You A Beautiful Website.</p>
          <a className="button-two" href="#">
            Hire Me
          </a>
        </div>

        {/* <!------footer start---------> */}
        <footer>
          <p>Tahmid Ahmed</p>
          <p>
            For more HTML, CSS, and coding tutorial - please click on the link
            below to subscribe to my channel:
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

export default FirstTheme;
