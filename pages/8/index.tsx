/* eslint-disable @next/next/no-img-element */
import React from 'react';

import Image from 'next/image';
import homeImg from 'public/images/themes/8theme/img/home.jpg';
import aboutImg from 'public/images/themes/8theme/img/about.jpg';
import testimonial1 from 'public/images/themes/8theme/img/testimonial1.jpg';
import testimonial2 from 'public/images/themes/8theme/img/testimonial2.jpg';
import testimonial3 from 'public/images/themes/8theme/img/testimonial3.jpg';
import work1 from 'public/images/themes/8theme/img/work1.jpg';
import work2 from 'public/images/themes/8theme/img/work2.jpg';
import work3 from 'public/images/themes/8theme/img/work3.jpg';
import work4 from 'public/images/themes/8theme/img/work4.jpg';
import work5 from 'public/images/themes/8theme/img/work5.jpg';
import work6 from 'public/images/themes/8theme/img/work6.jpg';

const Index = () => {
  return (
    <>
      <div className="eightMainPage">
        <div className="eightBody">
          <main className="l-main">
            {/* <!--===== HOME =====--> */}

            <section className="home" id="home">
              <div className="home__container bd-container bd-grid">
                <div className="home__data">
                  <span className="home__greeting">Hello,My name is </span>

                  <h1 className="home__name">Clay Doe</h1>

                  <span className="home__profession">Web Developer</span>
                  <a
                    download="./assets/pdf/Clay-Doe-Cv.pdf"
                    className="button button-light"
                  >
                    Download CV
                  </a>
                </div>

                <div className="home__social">
                  <a href="" className="home__social-icon">
                    <i className="bx bxl-facebook-square"></i>
                  </a>
                  <a href="" className="home__social-icon">
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a href="" className="home__social-icon">
                    <i className="bx bxl-twitter"></i>
                  </a>
                </div>

                <div className="home__img">
                  {/* @ts-ignore */}
                  <Image height="700" width="500" src={homeImg} alt="" />
                </div>
              </div>
            </section>
            {/* <!--===== ABOUT =====--> */}

            <section className="about section bd-container" id="about">
              <span className="section-subtitle">My History</span>
              <h2 className="section-title">ABout me</h2>
              <div className="about__container">
                <div className="about__data">
                  <p className="about__description">
                    <span>
                      Hello , I am <br />{' '}
                    </span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti praesentium amet aut, atque quibusdam quas dolore?
                    Reprehenderit inventore ut doloremque. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Voluptate quasi quaerat
                    nihil, sapiente nam officiis adipisci deserunt illo quisquam
                    natus sunt quis nemo nesciunt sit fuga magni commodi quos!
                    Animi!
                  </p>

                  <div>
                    <div>
                      <span className="about__number">05</span>
                      <span className="about__achievement">
                        Years Of Experience
                      </span>
                    </div>
                    <div>
                      <span className="about__number">29++</span>
                      <span className="about__achievement">
                        Project Completed
                      </span>
                    </div>
                    <div>
                      <span className="about__number">07</span>
                      <span className="about__achievement">
                        Best Work Awards
                      </span>
                    </div>
                  </div>
                  {/* @ts-ignore */}

                  <Image
                    height="700"
                    width="500"
                    src={aboutImg}
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

              <div className="qualification__container bd-grid">
                <div className="qualification__content">
                  <h2 className="qualification__title">
                    <i className="bx bx-briefcase-alt qualification__title-icon"></i>
                    Work Experience
                  </h2>
                  <div className="bd-grid">
                    {/* <!-- qualification card --> */}

                    <div className="qualification__data">
                      <h3 className="qualification__area">
                        Senior Front End Developer
                      </h3>
                      <div className="qualification__box">
                        <span className="qualification__work">
                          <i className="bx bx-briefcase-alt qualification__icon"></i>
                          Adobe - New York
                        </span>
                        <span className="qualification__work">
                          <i className="bx bx-calendar-alt qualification__icon"></i>
                          Jan 2019 - Aug 2019
                        </span>
                      </div>
                    </div>
                    {/* <!-- qualification card --> */}

                    <div className="qualification__data">
                      <h3 className="qualification__area">UI / UX Designer</h3>
                      <div className="qualification__box">
                        <span className="qualification__work">
                          <i className="bx bx-briefcase-alt qualification__icon"></i>
                          Figma - New York
                        </span>
                        <span className="qualification__work">
                          <i className="bx bx-calendar-alt qualification__icon"></i>
                          Jan 2019 - Aug 2019
                        </span>
                      </div>
                    </div>

                    {/* <!-- qualification card --> */}
                    <div className="qualification__data">
                      <h3 className="qualification__area">Content Writer</h3>
                      <div className="qualification__box">
                        <span className="qualification__work">
                          <i className="bx bx-briefcase-alt qualification__icon"></i>
                          Figma - New York
                        </span>
                        <span className="qualification__work">
                          <i className="bx bx-calendar-alt qualification__icon"></i>
                          Jan 2019 - Aug 2019
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="qualification__content">
                  <h2 className="qualification__title">
                    <i className="bx bx-book-bookmark qualification__title-icon"></i>
                    Education
                  </h2>
                  <div className="bd-grid">
                    {/* <!-- qualification card --> */}

                    <div className="qualification__data">
                      <h3 className="qualification__area">
                        Computer Technician
                      </h3>
                      <div className="qualification__box">
                        <span className="qualification__work">
                          <i className="bx bx-book-alt qualification__icon"></i>
                          Husky - Computer Institution
                        </span>
                        <span className="qualification__work">
                          <i className="bx bx-calendar-alt qualification__icon"></i>
                          Jan 2019 - Aug 2019
                        </span>
                      </div>
                    </div>
                    {/* <!-- qualification card --> */}

                    <div className="qualification__data">
                      <h3 className="qualification__area">
                        Master in web developer
                      </h3>
                      <div className="qualification__box">
                        <span className="qualification__work">
                          <i className="bx bx-briefcase-alt qualification__icon"></i>
                          Madrid - Design Institution
                        </span>
                        <span className="qualification__work">
                          <i className="bx bx-calendar-alt qualification__icon"></i>
                          Jan 2019 - Aug 2019
                        </span>
                      </div>
                    </div>

                    {/* <!-- qualification card --> */}
                    <div className="qualification__data">
                      <h3 className="qualification__area">Content Writer</h3>
                      <div className="qualification__box">
                        <span className="qualification__work">
                          <i className="bx bx-briefcase-alt qualification__icon"></i>
                          Figma - New York
                        </span>
                        <span className="qualification__work">
                          <i className="bx bx-calendar-alt qualification__icon"></i>
                          Jan 2019 - Aug 2019
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <!--===== SERVICES =====--> */}

            <section className="services section bd-container" id="services">
              <span className="section-subtitle">What I offer</span>
              <h2 className="section-title">Services</h2>

              <div className="services__container bd-grid">
                <div className="services__data">
                  <i className="bx bx-palette services__icon"></i>
                  <h3 className="services__title">UI/Ux Design</h3>
                  <p className="services__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quidem itaque possimus nostrum eos corrupti sit iusto
                    ratione laudantium vitae distinctio!
                  </p>
                  <a href="#" className="button">
                    Know more
                  </a>
                </div>
                <div className="services__data">
                  <i className="bx bx-laptop services__icon"></i>
                  <h3 className="services__title">Web Development</h3>
                  <p className="services__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quidem itaque possimus nostrum eos corrupti sit iusto
                    ratione laudantium vitae distinctio!
                  </p>
                  <a href="#" className="button">
                    Know more
                  </a>
                </div>
                <div className="services__data">
                  <i className="bx bx-pen services__icon"></i>
                  <h3 className="services__title">Graphics Design</h3>
                  <p className="services__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quidem itaque possimus nostrum eos corrupti sit iusto
                    ratione laudantium vitae distinctio!
                  </p>
                  <a href="#" className="button">
                    Know more
                  </a>
                </div>
              </div>
            </section>

            {/* <!--===== PROJECT IN MIND =====--> */}
            <section className="project section bd-container">
              <div className="project__container bd-grid">
                <div className="project__data">
                  <i className="bx bx-chat project__icon"> </i>

                  <div>
                    <h2 className="project__title">Project in mind</h2>
                    <p className="project__description">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Laborum similique, repellat harum cupiditate consectetur
                      sunt quos eaque autem perferendis delectus?
                    </p>
                  </div>

                  <div>
                    <a href="" className="button button-white">
                      Hire me
                    </a>
                  </div>
                </div>
              </div>
            </section>
            {/* <!--===== PORTFOLIO =====--> */}
            <section className="portfolio section bd-container" id="portfolio">
              <span className="section-subtitle">My recent works</span>
              <h2 className="section-title">Portfolio</h2>

              <div className="portfolio__nav">
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
              </div>
              <div className="portfolio__container bd-grid">
                {/* <!-- portfolio box  --> */}
                <div className="portfolio__content mix web">
                  <a href="">
                    {/* @ts-ignore */}

                    <Image
                      height="1000"
                      width="1000"
                      src={work1}
                      alt=""
                      className="portfolio__img"
                    />
                  </a>
                  <div className="portfolio__data">
                    <span className="portfolio__subtitle">
                      {' '}
                      Web Development{' '}
                    </span>

                    <a href="">
                      <h2 className="portfolio__title">
                        New Portfolio work done for a client.
                      </h2>
                    </a>
                    <a href="" className="button button-link">
                      View Details
                    </a>
                  </div>
                </div>

                {/* <!-- portfolio box  --> */}
                <div className="portfolio__content mix ux">
                  <a href="">
                    {/* @ts-ignore */}

                    <Image
                      height="1000"
                      width="1000"
                      src={work2}
                      alt=""
                      className="portfolio__img"
                    />
                  </a>
                  <div className="portfolio__data">
                    <span className="portfolio__subtitle">
                      {' '}
                      Web Development{' '}
                    </span>

                    <a href="">
                      <h2 className="portfolio__title">
                        New Portfolio work done for a client.
                      </h2>
                    </a>
                    <a href="" className="button button-link">
                      View Details
                    </a>
                  </div>
                </div>
                {/* <!-- portfolio box  --> */}
                <div className="portfolio__content mix app">
                  <a href="">
                    {/* @ts-ignore */}

                    <Image
                      height="1000"
                      width="1000"
                      src={work3}
                      alt=""
                      className="portfolio__img"
                    />
                  </a>
                  <div className="portfolio__data">
                    <span className="portfolio__subtitle">
                      {' '}
                      Web Development{' '}
                    </span>

                    <a href="">
                      <h2 className="portfolio__title">
                        New Portfolio work done for a client.
                      </h2>
                    </a>
                    <a href="" className="button button-link">
                      View Details
                    </a>
                  </div>
                </div>
                {/* <!-- portfolio box  --> */}
                <div className="portfolio__content mix app">
                  <a href="">
                    {/* @ts-ignore */}

                    <Image
                      height="1000"
                      width="1000"
                      src={work4}
                      alt=""
                      className="portfolio__img"
                    />
                  </a>
                  <div className="portfolio__data">
                    <span className="portfolio__subtitle">
                      {' '}
                      Web Development{' '}
                    </span>

                    <a href="">
                      <h2 className="portfolio__title">
                        New Portfolio work done for a client.
                      </h2>
                    </a>
                    <a href="" className="button button-link">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* <!--===== TESTIMONIAL =====--> */}

            {/* <!--===== CONTACTME =====--> */}

            <section className="contact section bd-container" id="contact">
              <span className="section-subtitle">For projects</span>
              <h2 className="section-title">Contact</h2>

              <div className="contact__container bd-grid">
                <div className="contact__content bd-grid">
                  <div className="contact__box">
                    <i className="bx bx-home contact__icon"></i>
                    <h3 className="contact__title">Location</h3>
                    <span className="contact__description">
                      #123 lima -peru
                    </span>
                  </div>
                  <div className="contact__box">
                    <i className="bx bx-phone contact__icon"></i>
                    <h3 className="contact__title">Phone</h3>
                    <span className="contact__description">977845686</span>
                  </div>
                  <div className="contact__box">
                    <i className="bx bx-envelop contact__icon"></i>
                    <h3 className="contact__title">Gmail</h3>
                    <span className="contact__description">abc@gmail.com</span>
                  </div>
                  <div className="contact__box">
                    <i className="bx bx-chat contact__icon"></i>
                    <h3 className="contact__title">Chat</h3>

                    <div>
                      <a href="#" className="contact__social">
                        <i className="bx bxl-whatsapp-square contact__icon"></i>
                      </a>
                      <a href="#" className="contact__social">
                        <i className="bx bxl-telegram contact__icon"></i>
                      </a>
                      <a href="#" className="contact__social">
                        <i className="bx bxl-messenger contact__icon"></i>
                      </a>
                    </div>
                  </div>
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
              <h1 className="footer__title">Clay Doe</h1>
              <p className="footer__description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
                excepturi eligendi, soluta unde architecto cum illo tempora
                alias vitae numquam?
              </p>
              <div className="footer__social">
                <a href="" className="footer__link">
                  <i className="bx bxl-linkedin"></i>
                </a>
                <a href="" className="footer__link">
                  <i className="bx bxl-github"></i>
                </a>
                <a href="" className="footer__link">
                  <i className="bx bxl-dribble"></i>
                </a>
              </div>

              <p className="footer__copy">
                Contact Me for further details @Kshtiiz
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Index;
