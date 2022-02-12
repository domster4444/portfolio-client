/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import Hamburger from 'public/images/themes/3theme/img/hamberger.svg';
import Times from 'public/images/themes/3theme/img/times.svg';
import Logo from 'public/images/themes/3theme/img/logo.svg';
import Man from 'public/images/themes/3theme/img/man.jpg';
import Man2 from 'public/images/themes/3theme/img/man-2.png';
import Website from 'public/images/themes/3theme/img/website.svg';
import Facebook from 'public/images/themes/3theme/img/facebook.svg';
import Twitter from 'public/images/themes/3theme/img/twitter.svg';
import Pininterest from 'public/images/themes/3theme/img/pintrest.svg';
import Brush from 'public/images/themes/3theme/img/brush.svg';
import Instagram from 'public/images/themes/3theme/img/instagram.svg';
import Map from 'public/images/themes/3theme/img/map.svg';
import Msg from 'public/images/themes/3theme/img/msg.svg';
import Phone2 from 'public/images/themes/3theme/img/phone-2.svg';
import ArticlePh1 from 'public/images/themes/3theme/img/article-ph-1.png';
import Media from 'public/images/themes/3theme/img/media.svg';
import Phone from 'public/images/themes/3theme/img/phone.svg';
import Desktop from 'public/images/themes/3theme/img/desktop.svg';
import Bag from 'public/images/themes/3theme/img/bag.svg';
import Code from 'public/images/themes/3theme/img/code.svg';
import Lady from 'public/images/themes/3theme/img/lady.png';
import Ph1 from 'public/images/themes/3theme/img/ph-1.png';
import Logo2 from 'public/images/themes/3theme/img/logo-2.svg';
import { NextPage } from 'next';

const index: NextPage = () => {
  return (
    <>
      <main id="theme3">
        <div className="site-main-wrapper">
          <button className="hamberger">
            <Image src={Hamburger} alt="" />
          </button>

          <div className="mobile-nav">
            <button className="times">
              <Image src={Times} alt="" />
            </button>
            <ul className="navMenu__container">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Work</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <header>
            <div className="container">
              <nav id="main-nav" className="flex items-center justify-between">
                <div className="left flex items-center">
                  <div className="branding">
                    <Image src={Logo} alt="" />
                  </div>
                  <div>
                    <a href="#">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#work">Work</a>
                    <a href="#blog">Blog</a>
                  </div>
                </div>
                <div className="right">
                  <button className="btn btn-primary">Contact</button>
                </div>
              </nav>
              <div className="hero flex items-center justify-between">
                <div className="left flex-1 flex justify-center">
                  <Image className="hero__img" src={Man} alt="" />
                </div>
                <div className="right flex-1">
                  <h6>Johnathan Vics</h6>
                  <h1>
                    I’m a Creative <span>Designer</span>
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </p>
                  <div>
                    <button className="btn btn-secondary">DOWNLOAD CV</button>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section id="about" className="about">
            <div className="container flex items-center about-inner-wrap">
              <div className="flex-1">
                <Image className="about-me-img" src={Man2} alt="" />
              </div>
              <div className="flex-1 right">
                <h1>
                  About <span>Me</span>
                </h1>
                <h3>Hello! i’m Johnathan Vics.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam quis nostrud exercitation ullamco laboris
                </p>
                <div className="social">
                  <a href="#">
                    <Image src={Website} alt="" />
                  </a>
                  <a href="https://www.facebook.com/codersgyan">
                    <Image src={Facebook} alt="" />
                  </a>
                  <a href="https://twitter.com/CoderGyan">
                    <Image src={Twitter} alt="" />
                  </a>
                  <a href="#">
                    {' '}
                    <Image src={Pininterest} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section id="services" className="services">
            <div className="container">
              <h1 className="section-heading">
                <span>Our </span>Services
              </h1>
              <p>
                We provide high standar clean website for your business
                solutions
              </p>
              <div className="card-wrapper">
                <div className="card">
                  <Image src={Brush} alt="" />
                  <h2>Graphic Design</h2>
                  <p>
                    There are many variations of passages of but the majority
                    have suffered alteration in some form.
                  </p>
                </div>
                <div className="card">
                  <Image src={Code} alt="" />
                  <h2>Graphic Design</h2>
                  <p>
                    There are many variations of passages of but the majority
                    have suffered alteration in some form.
                  </p>
                </div>
                <div className="card">
                  <Image src={Bag} alt="" />
                  <h2>Graphic Design</h2>
                  <p>
                    There are many variations of passages of but the majority
                    have suffered alteration in some form.
                  </p>
                </div>
                <div className="card">
                  <Image src={Desktop} alt="" />
                  <h2>Graphic Design</h2>
                  <p>
                    There are many variations of passages of but the majority
                    have suffered alteration in some form.
                  </p>
                </div>
                <div className="card">
                  <Image src={Media} alt="" />
                  <h2>Graphic Design</h2>
                  <p>
                    There are many variations of passages of but the majority
                    have suffered alteration in some form.
                  </p>
                </div>
                <div className="card">
                  <Image src={Phone} alt="" />
                  <h2>Graphic Design</h2>
                  <p>
                    There are many variations of passages of but the majority
                    have suffered alteration in some form.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="freelancer">
            <h1>I Am Available For Freelancer.</h1>
            <p>
              We provide high standar clean website for your business solutions
            </p>
            <button className="btn btn-primary">Download CV</button>
          </section>
          <section className="reviews">
            <div className="container">
              <h1 className="section-heading">
                <span>Job</span> Experience
              </h1>
              <p>
                We provide high standar clean website for your business
                solutions
              </p>
              <div className="slider">
                <div className="slide">
                  <Image src={Lady} alt="" />
                  <p>
                    "Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum"
                  </p>
                  <span>- John Doel, Company ABC</span>
                </div>
                <div className="slide">
                  <Image src={Lady} alt="" />
                  <p>
                    "Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum"
                  </p>
                  <span>- John Doel, Company ABC</span>
                </div>
                <div className="slide">
                  <Image src={Lady} alt="" />
                  <p>
                    "Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum"
                  </p>
                  <span>- John Doel, Company ABC</span>
                </div>
              </div>
              <div className="slider-dots"></div>
            </div>
          </section>

          <section id="work" className="work">
            <div className="container">
              <h1 className="section-heading">
                <span>Our</span> Works
              </h1>
              <p>
                We provide high standar clean website for your business
                solutions
              </p>

              <div className="card-wrapper">
                <div className="card">
                  <div className="overlay">
                    <span>Category</span>
                    <a href="#">Web development</a>
                  </div>
                  <Image src={Ph1} alt="" />
                </div>
                <div className="card">
                  <div className="overlay">
                    <span>Category</span>
                    <a href="#">Web development</a>
                  </div>
                  <Image src={Ph1} alt="" />
                </div>
                <div className="card">
                  <div className="overlay">
                    <span>Category</span>
                    <a href="#">Web development</a>
                  </div>
                  <Image src={Ph1} alt="" />
                </div>
                <div className="card">
                  <div className="overlay">
                    <span>Category</span>
                    <a href="#">Web development</a>
                  </div>
                  <Image src={Ph1} alt="" />
                </div>
                <div className="card">
                  <div className="overlay">
                    <span>Category</span>
                    <a href="#">Web development</a>
                  </div>
                  <Image src={Ph1} alt="" />
                </div>
                <div className="card">
                  <div className="overlay">
                    <span>Category</span>
                    <a href="#">Web development</a>
                  </div>
                  <Image src={Ph1} alt="" />
                </div>
              </div>
            </div>
          </section>
          <section id="blog" className="blog">
            <div className="container">
              <h1 className="section-heading">
                <span>Our</span> Blog
              </h1>
              <p>
                We provide high standar clean website for your business
                solutions
              </p>

              <div className="card-wrapper">
                <div className="card">
                  <div className="img-wrapper">
                    <Image src={ArticlePh1} alt="" />
                  </div>
                  <div className="card-content">
                    <a href="#">
                      <h1>Occusamus et iusto odio</h1>
                    </a>
                    <span>May 12, 2017</span>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
                <div className="card">
                  <div className="img-wrapper">
                    <Image src={ArticlePh1} alt="" />
                  </div>
                  <div className="card-content">
                    <a href="#">
                      <h1>Occusamus et iusto odio</h1>
                    </a>
                    <span>May 12, 2017</span>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
                <div className="card">
                  <div className="img-wrapper">
                    <Image src={ArticlePh1} alt="" />
                  </div>
                  <div className="card-content">
                    <a href="#">
                      <h1>Occusamus et iusto odio</h1>
                    </a>
                    <span>May 12, 2017</span>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="contact">
            <div className="container">
              <h1 className="section-heading">
                Contact <span>Us</span>
              </h1>
              <p>
                We provide high standar clean website for your business
                solutions
              </p>
              <div className="card-wrapper">
                <div className="card">
                  <Image src={Phone2} alt="" />
                  <h1>Call Us On</h1>
                  <h6>+985 123 7856</h6>
                </div>
                <div className="card">
                  <Image src={Msg} alt="" />
                  <h1>Email Us At</h1>
                  <h6>support@companyname.com</h6>
                </div>
                <div className="card">
                  <Image src={Map} alt="" />
                  <h1>Visit Office</h1>
                  <h6>99 S.t Jomblo Park Pekanbaru 28292. Indonesia</h6>
                </div>
              </div>

              {/* <form action="">
                <div className="input-wrap">
                  <input type="text" placeholder="Your Name *" />
                  <input type="email" placeholder="Your Email *" />
                </div>
                <div className="input-wrap-2">
                  <input type="text" placeholder="Your Subject..." />
                  <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={10}
                    placeholder="Your Message..."
                  ></textarea>
                </div>
                <div className="btn-wrapper">
                  <button className="btn btn-primary">Send Message</button>
                </div>
              </form> */}
            </div>
          </section>
          <footer>
            <Image className="footer-logo" src={Logo2} alt="" />
            <div className="footer-socials">
              <a href="#">
                <Image src={Website} alt="" />
              </a>
              <a href="https://www.facebook.com/codersgyan">
                <Image src={Facebook} alt="" />
              </a>
              <a href="https://twitter.com/CoderGyan">
                <Image src={Twitter} alt="" />
              </a>
              <a href="#">
                {' '}
                <Image src={Pininterest} alt="" />
              </a>
              <a href="https://www.instagram.com/codersgyan/">
                <Image src={Instagram} alt="" />
              </a>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
};

export default index;
