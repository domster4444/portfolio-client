/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import Image from 'next/image';
import Profile from 'public/images/themes/5theme/img/profile.jpg';
import Sayed from 'public/images/themes/5theme/img/sayed.jpg';
import Arfan from 'public/images/themes/5theme/img/arfan.jpg';
import Ayan from 'public/images/themes/5theme/img/ayan.jpg';
import Project1 from 'public/images/themes/5theme/img/project-1.jpg';
import Project2 from 'public/images/themes/5theme/img/project-2.jpg';
import Project3 from 'public/images/themes/5theme/img/project-3.jpg';
import LightLogo from 'public/images/themes/5theme/img/light-logo.svg';

const Index = () => {
  useEffect(() => {
    const hamburgerMenu = document.querySelector('#navigation .nav-icon');
    const navContent = document.querySelector('#nav-content');
    const closeNavButton = document.querySelector('#nav-content .close-btn');
    const navLinks = document.querySelectorAll('#nav-content nav ul li a');
    const scrollButton = document.querySelector('.scroll-top');

    // scroll TOP Button Events

    if (scrollButton) {
      window.addEventListener('scroll', () => {
        if (pageYOffset > window.innerHeight * 1.2) {
          // @ts-ignore
          scrollButton.style.display = 'flex';
        } else {
          // @ts-ignore
          scrollButton.style.display = 'none';
        }
      });
      scrollButton.addEventListener('click', () => {
        window.scrollTo(0, 0);
      });
    }

    // Hamburger Menu events
    // @ts-ignore
    hamburgerMenu.addEventListener('click', () => {
      // @ts-ignore
      navContent.classList.add('show');
      document.body.style.overflow = 'hidden';
    });
    // @ts-ignore
    closeNavButton.addEventListener('click', () => {
      // @ts-ignore
      navContent.classList.remove('show');
      document.body.style.overflow = 'initial';
    });
    // @ts-ignore
    navLinks.forEach((link) => {
      // @ts-ignore
      link.addEventListener('click', () => {
        // @ts-ignore
        navContent.classList.remove('show');
        document.body.style.overflow = 'initial';
      });
    });
  }, []);

  return (
    <>
      <div className="theme5__main">
        {/* <!-- Scroll Top Button --> */}
        <div className="scroll-top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7l4-4m0 0l4 4m-4-4v18"
            />
          </svg>
        </div>
        {/* <!-- Navigation --> */}
        <section id="navigation">
          <div className="nav-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </section>
        <div id="nav-content">
          <div className="close-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="wrapper">
            <h2 className="section-heading">Menu</h2>
            <nav>
              <ul>
                <li>
                  <a data-text="Home" href="./index.html#hero">
                    Home
                  </a>
                </li>
                <li>
                  <a data-text="About" href="./index.html#about">
                    About
                  </a>
                </li>
                <li>
                  <a data-text="Projects" href="./index.html#projects">
                    Projects
                  </a>
                </li>
                <li>
                  <a data-text="Testimonial" href="./index.html#testimonial">
                    Testimonial
                  </a>
                </li>
                <li>
                  <a data-text="Contact" href="./contact.html">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* <!-- Hero section --> */}
        <section id="hero">
          <div className="container">
            <div className="left">
              <p className="subheading">I'm AMY</p>
              <h2 className="heading">
                <div className="wrapper">
                  <span>Pixels</span>
                </div>
                <div className="wrapper">
                  <span>with</span>
                </div>
                <div className="wrapper">
                  <span>purpose</span>
                </div>
              </h2>
              <p className="desc">
                I work with companies and agencies around the world, building
                Web sites and application UIs with strong focus on responsive
                design, accessibility, performance,
              </p>
              <div className="buttons">
                <a href="#projects" className="primary-btn">
                  See My Works
                </a>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="right">
              <Image src={Profile} alt="" />
            </div>
          </div>
        </section>

        {/* <!-- services Section --> */}
        <section id="services">
          <div className="container">
            <h2 className="section-heading" data-outline="Services">
              Services
            </h2>
            <div className="all-items">
              <div className="item">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="item-heading">Web Design</h3>
                <p className="item-desc">
                  I build up the high performance website with blazing fast
                  speed. Website with high performance can lead the visitor
                  more.
                </p>
              </div>
              <div className="item">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 className="item-heading">UI/UX</h3>
                <p className="item-desc">
                  I do ui/ux design for the website that assists website to get
                  an outstanding look. Unique design creates an unique
                  personality for websites.
                </p>
              </div>
              <div className="item">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
                    />
                  </svg>
                </div>
                <h3 className="item-heading">SEO</h3>
                <p className="item-desc">
                  With SEO, your business wants to increase its visibility in
                  search results on search engines. I also provide SEO services
                  to rank your website.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Testimonial Section --> */}
        <section id="testimonial">
          <div className="container">
            <h1 className="section-heading" data-outline="Testimonial">
              Testimonial
            </h1>
            <div className="all-items">
              <div className="item">
                <div className="img">
                  <Image src={Sayed} alt="" />
                </div>
                <h3 className="testimonial-heading">Mr. Sayed</h3>
                <p className="testimonial-sub-heading">CTO, TechG</p>
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </div>
                <p className="testimonial-desc">
                  AMY conveys quality work. She is an excellent individual and
                  an extraordinary cooperative person. She is extremely
                  straightforward and puts all her energy to follow through on
                  schedule.
                </p>
              </div>
              <div className="item">
                <div className="img">
                  <Image src={Arfan} alt="" />
                </div>
                <h3 className="testimonial-heading">Shaif Arfan</h3>
                <p className="testimonial-sub-heading">CEO, WEBc.</p>
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </div>
                <p className="testimonial-desc">
                  I've worked with many individuals who are tendentious and
                  driven by things other than the work they're doing. AMY is
                  genuinely energetic about the web and the items she makes for
                  it and that is quite darn marvelous.
                </p>
              </div>
              <div className="item">
                <div className="img">
                  <Image src={Ayan} alt="" />
                </div>
                <h3 className="testimonial-heading">Ayan Khan</h3>
                <p className="testimonial-sub-heading">Singer</p>
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </div>
                <p className="testimonial-desc">
                  AMY is a wonderfully creative, collaborative, and gifted
                  developer who excels at creating inclusive digital solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- stats Section --> */}
        <section id="stats">
          <div className="container">
            <h2 className="section-heading" data-outline="Stats">
              Stats
            </h2>
            <div className="all-items">
              <div className="item">
                <h2 className="number">50+</h2>
                <h3 className="stats-sub-heading">Projects done</h3>
                <p>
                  I worked on more than 50+ projects. I know how to make things
                  fascinating and eye-catching. Making high performance website
                  is always a sign of mine.
                </p>
              </div>
              <div className="item">
                <h2 className="number">30+</h2>
                <h3 className="stats-sub-heading">Happy clients</h3>
                <p>
                  I worked with more than 30+ clients. Client satisfaction is my
                  main priority. I generally attempt to complete the work before
                  the deadline.
                </p>
              </div>
              <div className="item">
                <h2 className="number">4+</h2>
                <h3 className="stats-sub-heading">Years experience</h3>
                <p>
                  I worked with more than 30+ clients. Client satisfaction is my
                  main priority. I generally attempt to complete the work before
                  the deadline.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- END Stats Section --> */}

        {/* <!-- About --> */}
        <section id="about">
          <div className="container">
            <h2 className="section-heading" data-outline="about">
              About
            </h2>
            <div className="wrapper">
              <div className="left">
                <div className="card">
                  <div className="img">
                    <Image src={Profile} alt="" />
                  </div>
                  <p className="card-desc">
                    I’m a freelance web designer and developer based in
                    Bangladesh. I love the Web platform and I need to improve it
                    for everybody. What's more, I believe myself to be totally
                    honored that I will assemble it professionally.
                  </p>
                  <h3 className="card-name">AMY Jr</h3>
                  <p className="card-sub-title">CEO of My Com</p>
                </div>
              </div>
              <div className="right">
                <p className="subheading">Hi! This is AMY</p>
                <h2 className="slogan">Freelance Web Designer</h2>
                <p className="right-text">
                  I work with companies and agencies around the world, building
                  Web sites and application UIs with strong focus on responsive
                  design, accessibility, performance, and the latest in the area
                  of front-end (Javascript, react, gatsby, node, Python, djengo)
                  I also speak and run workshops across the globe, also focusing
                  on CSS, SVG, Responsive Design and accessibility, covering
                  practical tips on how to build full stack using modern tools
                  and techniques that scale and are future-proof.
                </p>
                <div className="buttons">
                  <a href="./resume.txt" className="primary-btn" download="">
                    Download Resume
                  </a>
                  <a href="./contact.html" className="primary-btn outline">
                    Hire Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- projects --> */}
        <section id="projects">
          <div className="container">
            <h2 className="section-heading" data-outline="Projects">
              Projects
            </h2>
            <div className="all-items">
              <div className="item">
                <div className="left">
                  <div className="img">
                    <Image src={Project1} alt="" />
                  </div>
                </div>
                <div className="right">
                  <h2 className="project-title">Real Chat</h2>
                  <h3 className="project-sub-title">
                    Online real time chat app.
                  </h3>
                  <p className="project-desc">
                    I made this application for a USA customer. This application
                    is truly Amazing. Here you can chat with your friend
                    constantly inside a secure environment and there will be no
                    information reserved after the end of the session.
                  </p>
                  <div className="buttons">
                    <a href="#" className="primary-btn">
                      Know More
                    </a>
                    <a href="#" className="primary-btn outline external-link">
                      <span>Preview</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="left">
                  <div className="img">
                    <Image src={Project3} alt="" />
                  </div>
                </div>
                <div className="right">
                  <h2 className="project-title">Hotel Zaman Website</h2>
                  <h3 className="project-sub-title">
                    A website for hotel zaman.
                  </h3>
                  <p className="project-desc">
                    Hotel zaman is one of the famous hotel in Chittagong. We
                    created their website. The client wanted a clean and smooth
                    design which I was able to provide at the end of the
                    project.
                  </p>
                  <div className="buttons">
                    <a href="#" className="primary-btn">
                      Know More
                    </a>
                    <a href="#" className="primary-btn outline external-link">
                      <span>Preview</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="left">
                  <div className="img">
                    <Image src={Project2} alt="" />
                  </div>
                </div>
                <div className="right">
                  <h2 className="project-title">Prinazz Website</h2>
                  <h3 className="project-sub-title">
                    A website for music studio
                  </h3>
                  <p className="project-desc">
                    Piranz is one of the famous music composer in UAE. The
                    challenge was to keep the music environment in the web. It
                    was hard but in the end we provided a good quality website
                    that satisfied the client.
                  </p>
                  <div className="buttons">
                    <a href="#" className="primary-btn">
                      Know More
                    </a>
                    <a href="#" className="primary-btn outline external-link">
                      <span>Preview</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Footer Section --> */}
        <section id="footer">
          <div className="container">
            <footer>
              <div className="col-1">
                <div className="logo">
                  <a href="#">
                    <Image src={LightLogo} alt="" />
                  </a>
                </div>
                <p>
                  A freelance web designer and developer from Chittagong,
                  Bangladesh. I generally make websites that have extraordinary
                  designs and also have a good performance rate.
                </p>
              </div>
              <div className="col-2">
                <h2 className="column-heading">
                  Important
                  <br />
                  Links
                </h2>
                <ul>
                  <li>
                    <a href="./index.html#home">Home</a>
                  </li>
                  <li>
                    <a href="./index.html#about">About</a>
                  </li>
                  <li>
                    <a href="./contact.html">Contact</a>
                  </li>
                  <li>
                    <a href="./index.html#Project">Project</a>
                  </li>
                  <li>
                    <a href="./index.html#testimonial">Testimonial</a>
                  </li>
                </ul>
              </div>
              <div className="col-3">
                <h2 className="column-heading">
                  Contact
                  <br />
                  Info
                </h2>
                <ul>
                  <li>
                    <a href="#">Webcifar@gmail.com</a>
                  </li>
                  <li>
                    <a href="#">+192482354</a>
                  </li>
                  <li>
                    <a href="#">Chittagong, Bangladesh</a>
                  </li>
                </ul>
              </div>
              <div className="col-4">
                <h2 className="column-heading">
                  Social
                  <br />
                  Links
                </h2>
                <ul>
                  <li>
                    <a href="#">FB</a>
                  </li>
                  <li>
                    <a href="#">TW</a>
                  </li>
                  <li>
                    <a href="#">IG</a>
                  </li>
                  <li>
                    <a href="#">Li</a>
                  </li>
                </ul>
              </div>
            </footer>
          </div>
        </section>
        <section id="copyright">
          <div className="container">
            <p>&copy; Copyright 2021 AMY. All right Reserved Free To Use</p>
          </div>
        </section>

        {/* <!-- <script src="./app.js"></script> --> */}
      </div>
    </>
  );
};

export default Index;
