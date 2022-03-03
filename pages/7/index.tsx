/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
// @ts-ignore
// import mixitup from 'mixitup';
import Image from 'next/image';
import Script from 'next/script';
// @ts-ignore
import profile from 'public/images/themes/6theme/img/perfil.png';
// @ts-ignore
import about from 'public/images/themes/6theme/img/about.jpg';
// @ts-ignore
import work1 from 'public/images/themes/6theme/img/work1.jpg';
const Index = () => {
  useEffect(() => {
    const themeButton = document.getElementById('theme-button');
    const lightTheme = 'light-theme';
    const iconTheme = 'bx-sun';

    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');

    // We obtain the current theme that the interface has by validating the light-theme class
    const getCurrentTheme = () =>
      document.body.classList.contains(lightTheme) ? 'dark' : 'light';
    const getCurrentIcon = () =>
      // @ts-ignore
      themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';

    // We validate if the user previously chose a topic
    if (selectedTheme) {
      // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
        lightTheme
      );
      // @ts-ignore
      themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](
        iconTheme
      );
    }

    // * mix it up
    // let mixerPortfolio = mixitup('.work__container', {
    //   selectors: {
    //     target: '.work__card',
    //   },
    //   animation: {
    //     duration: 300,
    //   },
    // });

    //*____ Activate / deactivate the theme manually with the button
    // @ts-ignore
    themeButton.addEventListener('click', () => {
      // Add or remove the  light / icon theme
      // @ts-ignore
      document.body.classList.toggle(lightTheme);
      // @ts-ignore
      themeButton.classList.toggle(iconTheme);
      // We save the theme and the current icon that the user chose
      localStorage.setItem('selected-theme', getCurrentTheme());
      localStorage.setItem('selected-icon', getCurrentIcon());
    });

    //* active link ____

    const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close');

    // @ts-ignore
    let modal = function (modalClick) {
      modalViews[modalClick].classList.add('active-modal');
    };

    modalBtns.forEach((mb, i) => {
      mb.addEventListener('click', () => {
        modal(i);
      });
    });

    modalClose.forEach((mc) => {
      mc.addEventListener('click', () => {
        modalViews.forEach((mv) => {
          mv.classList.remove('active-modal');
        });
      });
    });

    const linkWork = document.querySelectorAll('.work__item');
    function activeWork() {
      linkWork.forEach((l) => l.classList.remove('active-work'));
      // @ts-ignore
      this.classList.add('active-work');
    }
    linkWork.forEach((l) => l.addEventListener('click', activeWork));
  }, []);

  return (
    <div id="theme7" className="dark-theme">
      {/* <!--=============== HEADER ===============--> */}

      <header className="header" id="header">
        <nav className="nav container">
          <a href="" className="nav__logo">
            Ansel
          </a>

          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                  <i className="bx bx-home-alt"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="bx bx-user"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <i className="bx bx-book"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#work" className="nav__link">
                  <i className="bx bx-briefcase-alt-2"> </i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="bx bx-message-square-detail"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Theme change button --> */}
          <i className="bx bx-moon change-theme" id="theme-button"></i>
        </nav>
      </header>

      {/* main  */}
      <main className="main">
        {/* home  */}
        <section className="home section" id="home">
          <div className="home__container container grid">
            <div className="home__data">
              <span className="home__greeting">Hello, I'm</span>
              <h1 className="home__name">Kshitiz Shah</h1>
              <h3 className="home__education">Fullstack Developer</h3>
              <div className="home__buttons">
                <a
                  href="assets/pdf/Ansel-Cv.pdf"
                  className="button button--ghost"
                >
                  Download CV
                </a>
                <a href="#about" className="button">
                  About
                </a>
              </div>
            </div>

            <div className="home__handle">
              <Image src={profile} alt="" className="home__img" />
            </div>

            <div className="home__social">
              <a href="" className="home__social-link">
                <i className="bx bxl-linkedin-square"></i>
              </a>
              <a href="" className="home__social-link">
                <i className="bx bxl-github"></i>
              </a>
              <a href="" className="home__social-link">
                <i className="bx bxl-github"></i>
              </a>
            </div>
            <a href="#about" className="home__scroll">
              <i className="bx bx-mouse"></i>
              <span className="home__scroll-name">Scroll Down</span>
            </a>
          </div>
        </section>
        {/* about  */}
        <section className="about section" id="about">
          <span className="section__subtitle"> My Intro </span>
          <h2 className="section__title">About me</h2>
          <div className="about__container container grid">
            <Image src={about} alt="" className="about__img" />
            <div className="about__data">
              <div className="about__info">
                <div className="about__box">
                  <i className="bx bx-award about__icon"></i>
                  <h3 className="about__title">Experience</h3>
                  <span className="about__subtitle">8 Years Working</span>
                </div>

                <div className="about__box">
                  <i className="bx bx-briefcase-alt about__icon"></i>

                  <h3 className="about__title">Completed</h3>
                  <span className="about__subtitle">48+ Projects</span>
                </div>

                <div className="about__box">
                  <i className="bx bx-support about__icon"></i>
                  <h3 className="about__title">Support</h3>
                  <span className="about__subtitle">Online 24/7</span>
                </div>
              </div>
              <p className="about__description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                aliquid explicabo, maiores dolores eveniet magni perferendis et,
                rerum pariatur alias minima ratione quae dignissimos aperiam
                quasi nesciunt. Repudiandae, vitae nihil.
              </p>
              <a href="#contact" className="button">
                Contact Me
              </a>
            </div>
          </div>
        </section>

        {/* skills  */}
        <section className="skills section" id="skills">
          <span className="section__subtitle">My abilities</span>
          <h2 className="section__title">My Experience</h2>

          <div className="skills__container container grid">
            <div className="skills__content">
              <h3 className="skills__title">Primary Skills</h3>
              <div className="skills__box">
                <div className="skills__group">
                  <div className="skills__data">
                    <i className="bx bxs-badge-check"></i>
                    <div>
                      <h3 className="skills__name">HTML</h3>
                      <h3 className="skills__level">Basic</h3>
                    </div>
                  </div>
                </div>

                <div className="skills__group">
                  <div className="skills__data">
                    <i className="bx bxs-badge-check"></i>
                    <div>
                      <h3 className="skills__name">CSS</h3>
                      <h3 className="skills__level">Basic</h3>
                    </div>
                  </div>
                </div>
                <div className="skills__group">
                  <div className="skills__data">
                    <i className="bx bxs-badge-check"></i>
                    <div>
                      <h3 className="skills__name">CSS</h3>
                      <h3 className="skills__level">Basic</h3>
                    </div>
                  </div>
                </div>
                <div className="skills__group">
                  <div className="skills__data">
                    <i className="bx bxs-badge-check"></i>
                    <div>
                      <h3 className="skills__name">CSS</h3>
                      <h3 className="skills__level">Basic</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skills__content">
              <h3 className="skills__title">Secondary Skills</h3>
              <div className="skills__box">
                <div className="skills__group">
                  <div className="skills__data">
                    <i className="bx bxs-badge-check"></i>
                    <div>
                      <h3 className="skills__name">HTML</h3>
                      <h3 className="skills__level">Basic</h3>
                    </div>
                  </div>
                </div>

                <div className="skills__group">
                  <div className="skills__data">
                    <i className="bx bxs-badge-check"></i>
                    <div>
                      <h3 className="skills__name">CSS</h3>
                      <h3 className="skills__level">Basic</h3>
                    </div>
                  </div>
                </div>
                <div className="skills__group">
                  <div className="skills__data">
                    <i className="bx bxs-badge-check"></i>
                    <div>
                      <h3 className="skills__name">CSS</h3>
                      <h3 className="skills__level">Basic</h3>
                    </div>
                  </div>
                </div>
                <div className="skills__group">
                  <div className="skills__data">
                    <i className="bx bxs-badge-check"></i>
                    <div>
                      <h3 className="skills__name">CSS</h3>
                      <h3 className="skills__level">Basic</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* services  */}
        <section className="services section">
          <span className="section__subtitle"> My Service </span>
          <h2 className="section__title">What I Offer</h2>
          <div className="services__container container grid">
            <div className="services__card">
              <i className="bx bxl-sketch service__card-icon"></i>
              <h3 className="services__title">
                Product <br />
                Designeer
              </h3>

              <span className="services__button">
                See more <i className="bx bx-right-arrow-alt"></i>
              </span>

              <div className="services__modal">
                <div className="services__modal-content">
                  <i className="bx bx-x services__modal-close"></i>
                  <h3 className="services__modal-title">Product Designer</h3>
                  <p className="services__modal-description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla sapiente labore minus, ipsa nisi reiciendis quis
                    facere ab sunt recusandae!
                  </p>
                  <ul className="services__modal-list">
                    <li className="services__modal-item">
                      <i className="bx bx-check services__modal-icon">
                        <p className="services__modal-info">
                          I develop user interface
                        </p>
                      </i>
                    </li>

                    <li className="services__modal-item">
                      <i className="bx bx-check services__modal-icon">
                        <p className="services__modal-info">
                          Web page development
                        </p>
                      </i>
                    </li>
                    <li className="services__modal-item">
                      <i className="bx bx-check services__modal-icon">
                        <p className="services__modal-info">
                          I create ui ux element interaction
                        </p>
                      </i>
                    </li>
                    <li className="services__modal-item">
                      <i className="bx bx-check services__modal-icon">
                        <p className="services__modal-info">
                          I position your company brand
                        </p>
                      </i>
                    </li>
                    <li className="services__modal-item">
                      <i className="bx bx-check services__modal-icon">
                        <p className="services__modal-info">
                          Design & mockups of products for companies
                        </p>
                      </i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="services__card">
              <i className="bx bxl-sketch service__card-icon"></i>
              <h3 className="services__title">
                Product <br />
                Designeer
              </h3>

              <span className="services__button">
                See more <i className="bx bx-right-arrow-alt"></i>
              </span>

              <div className="services__modal">
                <div className="services__modal-content">
                  <i className="bx bx-x services__modal-close"></i>
                  <h3 className="services__modal-title">Product Designer</h3>
                  <p className="services__modal-description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla sapiente labore minus, ipsa nisi reiciendis quis
                    facere ab sunt recusandae!
                  </p>
                  <ul className="services__modal-list">
                    <li className="services__modal-item">
                      <i className="bx bx-check services__modal-icon">
                        <p className="services__modal-info">
                          I develop user interface
                        </p>
                      </i>
                    </li>

                    <li className="services__modal-item">
                      <i className="bx bx-check services__modal-icon">
                        <p className="services__modal-info">
                          Web page development
                        </p>
                      </i>
                    </li>
                    <li className="services__modal-item">
                      <i className="bx bx-check services__modal-icon">
                        <p className="services__modal-info">
                          I create ui ux element interaction
                        </p>
                      </i>
                    </li>
                    <li className="services__modal-item">
                      <i className="bx bx-check services__modal-icon">
                        <p className="services__modal-info">
                          I position your company brand
                        </p>
                      </i>
                    </li>
                    <li className="services__modal-item">
                      <i className="bx bx-check services__modal-icon">
                        <p className="services__modal-info">
                          Design & mockups of products for companies
                        </p>
                      </i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="services__card">
              <i className="bx bxl-sketch service__card-icon"></i>
              <h3 className="services__title">
                Product <br />
                Designeer
              </h3>

              <span className="services__button">
                See more <i className="bx bx-right-arrow-alt"></i>
              </span>

              <div className="services__modal">
                <div className="services__modal-content">
                  <i className="bx bx-x services__modal-close"></i>
                  <h3 className="services__modal-title">Product Designer</h3>
                  <p className="services__modal-description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla sapiente labore minus, ipsa nisi reiciendis quis
                    facere ab sunt recusandae!
                  </p>
                  <ul className="services__modal-list">
                    <li className="services__modal-item">
                      <i className="bx bx-check services__modal-icon">
                        <p className="services__modal-info">
                          I develop user interface
                        </p>
                      </i>
                    </li>

                    <li className="services__modal-item">
                      <i className="bx bx-check services__modal-icon">
                        <p className="services__modal-info">
                          Web page development
                        </p>
                      </i>
                    </li>
                    <li className="services__modal-item">
                      <i className="bx bx-check services__modal-icon">
                        <p className="services__modal-info">
                          I create ui ux element interaction
                        </p>
                      </i>
                    </li>
                    <li className="services__modal-item">
                      <i className="bx bx-check services__modal-icon">
                        <p className="services__modal-info">
                          I position your company brand
                        </p>
                      </i>
                    </li>
                    <li className="services__modal-item">
                      <i className="bx bx-check services__modal-icon">
                        <p className="services__modal-info">
                          Design & mockups of products for companies
                        </p>
                      </i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* work  */}
        <section className="work section" id="work">
          <span className="section__subtitle">My Portfolio</span>
          <h2 className="section__title">Recent Works</h2>
          <div className="work__filters">
            <span className="work__item active-work" data-filter="all">
              All
            </span>
            <span className="work__item" data-filter=".web">
              Web
            </span>
            <span className="work__item" data-filter=".movil">
              Movil
            </span>
            <span className="work__item" data-filter=".design">
              Design
            </span>
          </div>
          <div className="work__container container grid">
            {/* work card  */}
            <div className="work__card mix web">
              <Image src={work1} alt="" className="work__img" />
              <h3 className="work__titWeb Designle"></h3>
              <a href=" " className="work__button">
                Demo <i className="bx bx-right-arrow-alt work__icon"></i>
              </a>
            </div>

            {/* <!-- work card --> */}
            <div className="work__card mix movil">
              <Image src={work1} alt="" className="work__img" />
              <h3 className="work__title">Web Design</h3>
              <a href=" " className="work__button">
                Demo <i className="bx bx-right-arrow-alt work__icon"></i>
              </a>
            </div>

            {/* <!-- work card --> */}
            <div className="work__card mix design">
              <Image src={work1} alt="" className="work__img" />
              <h3 className="work__title">Web Design</h3>
              <a href=" " className="work__button">
                Demo <i className="bx bx-right-arrow-alt work__icon"></i>
              </a>
            </div>

            {/* <!-- work card --> */}
            <div className="work__card mix design">
              <Image src={work1} alt="" className="work__img" />
              <h3 className="work__title">Web Design</h3>
              <a href=" " className="work__button">
                Demo <i className="bx bx-right-arrow-alt work__icon"></i>
              </a>
            </div>
          </div>
        </section>

        {/* testimonial  */}

        {/* contact  */}
        <section className="contact section" id="contact">
          <span className="section__subtitle">Get in touch</span>
          <h2 className="section__title">Contact Me</h2>
          <div className="contact__container container grid">
            <div className="contact__content">
              <h3 className="contact__title">Talk to me</h3>
              <div className="contact__info">
                <div className="contact__card">
                  <i className="bx bx-mail-send contact__card-icon"></i>
                  <h3 className="contact__card-title">Email</h3>
                  <span className="contact__card-data">User@gmail.com</span>
                  <a
                    href="mailto:examplemail@correo.com"
                    target="_blank"
                    className="contact__button"
                    rel="noopener noreferrer"
                  >
                    Write me
                    <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                  </a>
                </div>
                <div className="contact__card">
                  <i className="bx bxl-whatsapp contact__card-icon"></i>
                  <h3 className="contact__card-title">Whats app</h3>
                  <span className="contact__card-data">User@gmail.com</span>
                  <a href="" target="_blank" className="contact__button">
                    Write me
                    <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                  </a>
                </div>
                <div className="contact__card">
                  <i className="bx bxl-messenger contact__card-icon"></i>
                  <h3 className="contact__card-title">Messenger</h3>
                  <span className="contact__card-data">User@gmail.com</span>
                  <a href="" target="_blank" className="contact__button">
                    Write me
                    <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="contact__content">
              <h3 className="contact__title">Write Me Your Project</h3>

              <form action="" className="contact__form">
                <div className="contact__form-div">
                  <label htmlFor="" className="contact__form-tag">
                    Name{' '}
                  </label>
                  <input
                    type="text"
                    placeholder="Insert Your Name"
                    className="contact__form-input"
                  />
                </div>
                <div className="contact__form-div">
                  <label htmlFor="" className="contact__form-tag">
                    Mail{' '}
                  </label>
                  <input
                    type="text"
                    placeholder="Insert Your Email"
                    className="contact__form-input"
                  />
                </div>
                <div className="contact__form-div contact__form-area">
                  <label htmlFor="" className="contact__form-tag">
                    Project{' '}
                  </label>
                  <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={10}
                    placeholder="Write your project"
                    className="contact__form-input"
                  ></textarea>
                </div>
                <button className="button">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* footer  */}
      <footer className="footer">
        <div className="footer__container container">
          <h1 className="footer__title">Ansel</h1>
          <ul className="footer__list">
            <li>
              <a href="#about" className="footer__link">
                {' '}
                About{' '}
              </a>
            </li>
            <li>
              <a href="#work" className="footer__link">
                Projects
              </a>
            </li>
            <li>
              <a href="#testimonial" className="footer__link">
                testimonial__img
              </a>
            </li>
          </ul>

          <ul className="footer__social">
            <a href="" target="_blank" className="footer__social-link">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="" target="_blank" className="footer__social-link">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="" target="_blank" className="footer__social-link">
              <i className="bx bxl-twitter"></i>
            </a>
          </ul>

          <span className="footer__copy">
            {' '}
            &#169; Kshitiz. All rights reserved{' '}
          </span>
        </div>
      </footer>

      <Script src="./swiper-bundle.min.js"></Script>

      <Script src="./mixitup.min.js"></Script>

      {/* <Script src="./main.js"></Script> */}
    </div>
  );
};

export default Index;
