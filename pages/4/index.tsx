import React, { useEffect } from 'react';
import Img1 from 'public/images/themes/4theme/img/img-1.jpg';
import Img2 from 'public/images/themes/4theme/img/img-2.jpg';
import Image from 'next/image';

const Index = () => {
  useEffect(() => {
    const hamburger_icon = document.querySelector(
      '#nav-bar .nav-bar .nav-list .hamburger'
    );
    const nav_list = document.querySelector('#nav-bar .nav-bar .nav-list');
    // @ts-ignore
    hamburger_icon.addEventListener('click', () => {
      // @ts-ignore
      nav_list.classList.toggle('open');
      // @ts-ignore
      hamburger_icon.classList.toggle('active');
    });
  }, []);
  return (
    <>
      <main className="theme4__main">
        <section id="nav-bar" className="container">
          <header className="nav-bar">
            <div className="brand">
              <a href="#hero">
                <h1>Web Cifar</h1>
              </a>
            </div>
            <div className="nav-list">
              <div className="hamburger">
                <div className="bar"></div>
              </div>
              <ul>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">services</a>
                </li>
                <li>
                  <a href="#hire">Hire Me</a>
                </li>
              </ul>
            </div>
          </header>
        </section>

        <section id="hero" className="hero container">
          <div className="hero-info">
            <h1 className="hero-info-heading">
              I Design <br />
              Your Dream
            </h1>
            <p className="hero-info-subheading">I am a web designer</p>
            <a href="#" type="button" className="hero-info-button">
              Portfolio
            </a>
          </div>
          <div className="hero-img">
            <Image src={Img1} alt="" />
          </div>
        </section>

        <section id="about" className="about container">
          <div className="about-info">
            <h1 className="about-info-heading">About Me</h1>
            <p className="about-info-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              suscipit quidem ullam voluptates repellendus explicabo placeat,
              expedita ratione saepe eaque dolorum sed deleniti, odit numquam,
              nostrum tempore quos corrupti rem.
            </p>
            <a href="#" type="button" className="about-info-button">
              Download Resume
            </a>
          </div>
          <div className="about-img">
            <div className="about-img-wrapper">
              <Image src={Img2} alt="" />
            </div>
          </div>
        </section>

        <section id="services" className="services container">
          <div className="services-header">
            <h1 className="services-header-heading">services</h1>
            <p className="services-header-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
              temporibus, omnis illum ipsa reiciendis illo eos odio possimus
              voluptatibus architecto.
            </p>
          </div>
          <div className="services-info">
            <div className="service">
              <div className="service-card">
                <div className="service-front">
                  <i className="fa fa-palette"></i>
                  <h1 className="service-front-heading">Web Design</h1>
                </div>
                <div className="service-back">
                  <h1 className="service-back-heading">Web Design</h1>
                  <p className="service-back-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    aut dolor voluptatem incidunt placeat impedit laboriosam
                    quam consequatur quasi nihil libero ad, quaerat, alias illum
                    excepturi. Iste quo repellendus consequuntur asperiores
                    dignissimos, quaerat obcaecati officiis repudiandae fugit
                    tenetur nulla impedit!
                  </p>
                </div>
              </div>
            </div>
            <div className="service">
              <div className="service-card">
                <div className="service-front">
                  <i className="fa fa-laptop-code"></i>
                  <h1 className="service-front-heading">Font End Dev</h1>
                </div>
                <div className="service-back">
                  <h1 className="service-back-heading">Front End Dev</h1>
                  <p className="service-back-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    aut dolor voluptatem incidunt placeat impedit laboriosam
                    quam consequatur quasi nihil libero ad, quaerat, alias illum
                    excepturi. Iste quo repellendus consequuntur asperiores
                    dignissimos, quaerat obcaecati officiis repudiandae fugit
                    tenetur nulla impedit!
                  </p>
                </div>
              </div>
            </div>
            <div className="service">
              <div className="service-card">
                <div className="service-front">
                  <i className="fa fa-building"></i>
                  <h1 className="service-front-heading">Branding</h1>
                </div>
                <div className="service-back">
                  <h1 className="service-back-heading">Branding</h1>
                  <p className="service-back-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    aut dolor voluptatem incidunt placeat impedit laboriosam
                    quam consequatur quasi nihil libero ad, quaerat, alias illum
                    excepturi. Iste quo repellendus consequuntur asperiores
                    dignissimos, quaerat obcaecati officiis repudiandae fugit
                    tenetur nulla impedit!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="hire" className="hire container">
          <h1 className="hire-heading">Hire me to build your dream website</h1>
          <a href="#" type="button" className="hire-button">
            Hire Me !!
          </a>
        </section>

        <footer id="footer" className="footer container">
          <div className="footer-contact">
            <h1 className="footer-contact-heading">Contact With Me</h1>
            <p className="footer-contact-info">Email: yourname@gamil.com</p>
            <p className="footer-contact-info">Mobile: 234 234 2342</p>
          </div>
          <div className="footer-social-follow">
            <h1 className="footer-social-follow-heading">Follow Me</h1>
            <div className="footer-social-icon">
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram-square"></i>
              </a>
              <a href="#">
                <i className="fab fa-behance-square"></i>
              </a>
              <a href="#">
                <i className="fab fa-dribbble-square"></i>
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Index;
