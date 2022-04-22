/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';

const Index = () => {
  //   useEffect(() => {
  //     let togglebtn = document.querySelector('.toggle-btn');
  //     let navbar = document.querySelector('.navbar');

  //     togglebtn.addEventListener('click', () => {
  //       navbar.classList.toggle('mobile-nav');
  //     });
  //   }, []);
  return (
    <div id="twelveMainPage">
      <div>
        <nav className="navbar">
          <div className="brand">
            <img
              src="
              https://i.imgur.com/UGTS7Fw.png
              "
              alt=""
              className="logo"
            />
          </div>
          <div className="nav-list">
            <ul>
              <li>Home</li>
              <li>Skills</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="social-icons">
            <ul>
              <li>
                <i className="bx bxl-instagram"></i>
              </li>
              <li>
                <i className="bx bxl-twitter"></i>
              </li>
              <li>
                <i className="bx bxl-github"></i>
              </li>
              <li>
                <i className="bx bxl-linkedin"></i>
              </li>
            </ul>
          </div>
        </nav>
        <div className="toggle-btn">
          <i className="fa fa-bars"></i>
        </div>

        {/* <!-- Header --> */}
        <header className="header container">
          <div className="circle"></div>
          <div className="row hero">
            <div className="col col-1">
              <h1>
                Hey, I’m a <span className="highlight">Front-End</span> web
                developer.{' '}
              </h1>
              <p>
                Hi, I'm Jhon Doe a freelance web designer from San-Francisco. I
                help brands turn their ideas into high quality websites.
              </p>
              <a href="#" className="ctn">
                Contact
              </a>
            </div>
            <div className="col col-2">
              <div className="hero-img">
                <img
                  src="https://images.pexels.com/photos/6979939/pexels-photo-6979939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
            </div>
          </div>
        </header>

        {/* <!-- Skills --> */}
        <section className="skills container">
          <div className="title">
            <h3>MY SKILLS</h3>
            <h1>My Expertise</h1>
          </div>
          <div className="grid-wrapper">
            <div className="grid-box">
              <div className="icon-title">
                <img src="https://i.imgur.com/EVUz5eD.png" alt="" />
                <h2>Responsive Web design</h2>
              </div>
              <p>
                {' '}
                <span className="highlight">Design Text </span> Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Consequatur
                obcaecati incidunt pariatur in doloribus repellat hic nesciunt
                accusamus tempora. Facere.
              </p>
            </div>
            <div className="grid-box">
              <div className="icon-title">
                <img src="https://i.imgur.com/EVUz5eD.png" alt="" />
                <h2>Responsive Web design</h2>
              </div>
              <p>
                {' '}
                <span className="highlight">Design Text </span> Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Consequatur
                obcaecati incidunt pariatur in doloribus repellat hic nesciunt
                accusamus tempora. Facere.
              </p>
            </div>
            <div className="grid-box">
              <div className="icon-title">
                <img src="https://i.imgur.com/EVUz5eD.png" alt="" />
                <h2>Responsive Web design</h2>
              </div>
              <p>
                {' '}
                <span className="highlight">Design Text </span> Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Consequatur
                obcaecati incidunt pariatur in doloribus repellat hic nesciunt
                accusamus tempora. Facere.
              </p>
            </div>
          </div>
        </section>

        {/* <!-- Portfolio --> */}
        <section className="portfolio container">
          <div className="rect-bg"></div>
          <div className="title">
            <h3>PORTFOLIO</h3>
            <div className="ctn-title">
              <h1>All Creative Works</h1>
              <h4>
                Discover All Projects on{' '}
                <span className="highlight">
                  Github <i className="fa fa-arrow-right"></i>
                </span>
              </h4>
            </div>
          </div>
          <div className="grid-wrapper">
            <div className="grid-box">
              <img src="https://i.imgur.com/umsmUz4.png" alt="" />
              <div className="hover">
                <h4>Application</h4>
                <a
                  href="#"
                  className="highlight"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  Video
                  <i
                    className="bx bx-video"
                    style={{
                      margin: '0 10px',
                    }}
                  ></i>
                </a>
                <a
                  href="#"
                  className="highlight"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  Link{' '}
                  <i
                    className="bx bx-link"
                    style={{
                      margin: '0 10px',
                    }}
                  ></i>
                </a>
                <a
                  href="#"
                  className="highlight"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  Github{' '}
                  <i
                    className="bx bxl-github"
                    style={{
                      margin: '0 10px',
                    }}
                  ></i>
                </a>
              </div>
            </div>
            <div className="grid-box">
              <img src="https://i.imgur.com/umsmUz4.png" alt="" />
              <div className="hover">
                <h4>Application</h4>
                <a
                  href="#"
                  className="highlight"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  Video
                  <i
                    className="bx bx-video"
                    style={{
                      margin: '0 10px',
                    }}
                  ></i>
                </a>
                <a
                  href="#"
                  className="highlight"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  Link{' '}
                  <i
                    className="bx bx-link"
                    style={{
                      margin: '0 10px',
                    }}
                  ></i>
                </a>
                <a
                  href="#"
                  className="highlight"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  Github{' '}
                  <i
                    className="bx bxl-github"
                    style={{
                      margin: '0 10px',
                    }}
                  ></i>
                </a>
              </div>
            </div>
            <div className="grid-box">
              <img src="https://i.imgur.com/umsmUz4.png" alt="" />
              <div className="hover">
                <h4>Application</h4>
                <a
                  href="#"
                  className="highlight"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  Video
                  <i
                    className="bx bx-video"
                    style={{
                      margin: '0 10px',
                    }}
                  ></i>
                </a>
                <a
                  href="#"
                  className="highlight"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  Link{' '}
                  <i
                    className="bx bx-link"
                    style={{
                      margin: '0 10px',
                    }}
                  ></i>
                </a>
                <a
                  href="#"
                  className="highlight"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  Github{' '}
                  <i
                    className="bx bxl-github"
                    style={{
                      margin: '0 10px',
                    }}
                  ></i>
                </a>
              </div>
            </div>
            <div className="grid-box">
              <img src="https://i.imgur.com/umsmUz4.png" alt="" />
              <div className="hover">
                <h4>Application</h4>
                <a
                  href="#"
                  className="highlight"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  Video
                  <i
                    className="bx bx-video"
                    style={{
                      margin: '0 10px',
                    }}
                  ></i>
                </a>
                <a
                  href="#"
                  className="highlight"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  Link{' '}
                  <i
                    className="bx bx-link"
                    style={{
                      margin: '0 10px',
                    }}
                  ></i>
                </a>
                <a
                  href="#"
                  className="highlight"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  Github{' '}
                  <i
                    className="bx bxl-github"
                    style={{
                      margin: '0 10px',
                    }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- testimonials --> */}
        <section className="testimonials">
          <div className="container">
            <div className="title">
              <h3>CRAFT AMAZING</h3>
              <h1>Education History</h1>
            </div>
            <div className="grid-wrapper">
              <div className="grid-box">
                {/* <img src="./img/customer1.png" alt="" /> */}
                <i
                  className="bx bx-award"
                  style={{
                    color: '#c1c1c1',
                    fontSize: '5.8rem',
                  }}
                ></i>
                <h4
                  style={{
                    fontSize: '2rem',
                  }}
                >
                  John Doe
                </h4>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                  provident?
                </p>
                <p>2022-01-01 - 2026-02-03</p>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
              <div className="grid-box">
                {/* <img src="./img/customer1.png" alt="" /> */}
                <i
                  className="bx bx-award"
                  style={{
                    color: '#c1c1c1',
                    fontSize: '5.8rem',
                  }}
                ></i>
                <h4
                  style={{
                    fontSize: '2rem',
                  }}
                >
                  John Doe
                </h4>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                  provident?
                </p>
                <p>2022-01-01 - 2026-02-03</p>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
              <div className="grid-box">
                {/* <img src="./img/customer1.png" alt="" /> */}
                <i
                  className="bx bx-award"
                  style={{
                    color: '#c1c1c1',
                    fontSize: '5.8rem',
                  }}
                ></i>
                <h4
                  style={{
                    fontSize: '2rem',
                  }}
                >
                  John Doe
                </h4>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                  provident?
                </p>
                <p>2022-01-01 - 2026-02-03</p>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Contact --> */}
        <section className="contact">
          <div className="container">
            <h3>CONTACT ME</h3>
            <h1>Got A Project! Let's Talk</h1>
            <h3
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <i
                className="bx bxl-gmail"
                style={{
                  margin: '0 2rem',
                  color: '#FD8E8E',
                  fontSize: '4rem',
                }}
              ></i>{' '}
              hello@website.com
            </h3>
            <div className="quick-links">
              <div className="brand">
                <img src="https://i.imgur.com/UGTS7Fw.png" alt="" />
              </div>
              <ul>
                <li>Home</li>
                <li>Skills</li>
                <li>Services</li>
                <li>About</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="copyright container">
          <p>© 2020 Kshitiz Don | Copyright </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
