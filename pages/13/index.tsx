import React, { useState } from 'react';

const Index = () => {
  const [selectedMenu, setSelectedMenu] = useState(false);
  return (
    <div id="thirteenMainPage">
      <div>
        {/* <!--=============== HEADER ===============--> */}
        <header className="profile container">
          {/* <!-- Theme button --> */}
          <i className="ri-moon-line change-theme" id="theme-button"></i>

          <div className="profile__container grid">
            <div className="profile__data">
              <div className="profile__border">
                <div className="profile__perfil">
                  {/* <!-- Insert your image, according to the example size of the portfolio --> */}
                  <img src="https://i.imgur.com/ByHvfP0.png" alt="" />
                </div>
              </div>

              <h2 className="profile__name">Gianell Vusy</h2>
              <h3 className="profile__profession">Web developer</h3>

              <ul className="profile__social">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="profile__social-link"
                >
                  <i className="bx bxl-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="profile__social-link"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="profile__social-link"
                >
                  <i className="bx bxl-github"></i>
                </a>
              </ul>
            </div>

            <div className="profile__info grid">
              <div className="profile__info-group">
                <h3 className="profile__info-number">7</h3>
                <p className="profile__info-description">
                  Years of <br /> work
                </p>
              </div>
              <div className="profile__info-group">
                <h3 className="profile__info-number">+124</h3>
                <p className="profile__info-description">
                  Completed <br /> projects
                </p>
              </div>
              <div className="profile__info-group">
                <h3 className="profile__info-number">96</h3>
                <p className="profile__info-description">
                  Satisfied <br /> customers
                </p>
              </div>
            </div>

            <div className="profile__buttons">
              {/* <!-- Insert your CV --> */}
              <a
                download=""
                href="assets/pdf/Gianell-Cv.pdf"
                className="button"
              >
                Download CV <i className="bx bx-right-arrow-alt"></i>
              </a>

              <div className="profile__buttons-small">
                {/* <!-- Insert a real number plus country code --> */}
                <a
                  href="https://api.whatsapp.com/send?phone=51123456789&text=Hello, more information!"
                  target="_blank"
                  rel="noreferrer"
                  className="button button__small button__gray"
                >
                  <i className="bx bxl-twitter"></i>
                </a>
                {/* <!-- Insert your brand name or profile --> */}
                <a
                  href="https://m.me/bedimcode"
                  target="_blank"
                  rel="noreferrer"
                  className="button button__small button__gray"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* <!--=============== MAIN ===============--> */}
        <main className="main">
          <section className="filters container">
            {/* <!--=============== FILTERS TABS ===============--> */}
            <ul className="filters__content">
              <button
                className={
                  selectedMenu === true
                    ? ` filters__button`
                    : ` filters__button filter-tab-active`
                }
                data-target="#projects"
                onClick={() => {
                  setSelectedMenu(false);
                }}
              >
                Projects
              </button>
              <button
                className={
                  selectedMenu === false
                    ? ` filters__button`
                    : ` filters__button filter-tab-active`
                }
                data-target="#skills"
                onClick={() => {
                  setSelectedMenu(true);
                }}
              >
                Skills
              </button>
            </ul>

            <div className="filters__sections">
              {/* <!--=============== PROJECTS ===============--> */}

              {(() => {
                if (selectedMenu === false) {
                  return (
                    <div
                      className="projects__content grid filters__active"
                      data-content
                      id="projects"
                    >
                      <article className="projects__card">
                        {/* <!-- Insert your image in a rectangular format (Ex: 600 x 400, 1000 x 800, 1200 x 1000, etc) --> */}
                        <img
                          src="https://images.pexels.com/photos/1193335/pexels-photo-1193335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt=""
                          className="projects__img"
                        />

                        <div className="projects__modal">
                          <div>
                            <span className="projects__subtitle">Web</span>
                            <h3 className="projects__title">Payment Site</h3>
                            <a
                              href="#"
                              className="projects__button button button__small"
                            >
                              <i className="ri-link"></i>
                            </a>
                          </div>
                        </div>
                      </article>
                      <article className="projects__card">
                        {/* <!-- Insert your image in a rectangular format (Ex: 600 x 400, 1000 x 800, 1200 x 1000, etc) --> */}
                        <img
                          src="https://images.pexels.com/photos/1193335/pexels-photo-1193335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt=""
                          className="projects__img"
                        />

                        <div className="projects__modal">
                          <div>
                            <span className="projects__subtitle">Web</span>
                            <h3 className="projects__title">Payment Site</h3>
                            <a
                              href="#"
                              className="projects__button button button__small"
                            >
                              <i className="ri-link"></i>
                            </a>
                          </div>
                        </div>
                      </article>
                      <article className="projects__card">
                        {/* <!-- Insert your image in a rectangular format (Ex: 600 x 400, 1000 x 800, 1200 x 1000, etc) --> */}
                        <img
                          src="https://images.pexels.com/photos/1193335/pexels-photo-1193335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt=""
                          className="projects__img"
                        />

                        <div className="projects__modal">
                          <div>
                            <span className="projects__subtitle">Web</span>
                            <h3 className="projects__title">Payment Site</h3>
                            <a
                              href="#"
                              className="projects__button button button__small"
                            >
                              <i className="ri-link"></i>
                            </a>
                          </div>
                        </div>
                      </article>
                      <article className="projects__card">
                        {/* <!-- Insert your image in a rectangular format (Ex: 600 x 400, 1000 x 800, 1200 x 1000, etc) --> */}
                        <img
                          src="https://images.pexels.com/photos/1193335/pexels-photo-1193335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt=""
                          className="projects__img"
                        />

                        <div className="projects__modal">
                          <div>
                            <span className="projects__subtitle">Web</span>
                            <h3 className="projects__title">Payment Site</h3>
                            <a
                              href="#"
                              className="projects__button button button__small"
                            >
                              <i className="ri-link"></i>
                            </a>
                          </div>
                        </div>
                      </article>
                    </div>
                  );
                } else {
                  return (
                    <>
                      <div
                        className="skills__content grid"
                        data-content
                        id="skills"
                      >
                        <div className="skills__area">
                          <h3 className="skills__title">Frontend Developer</h3>

                          <div className="skills__box">
                            <div className="skills__group">
                              <div className="skills__data">
                                <i className="bx bx-check-circle"></i>

                                <div>
                                  <h3 className="skills__name">HTML</h3>
                                  <span className="skills__level">Basic</span>
                                </div>
                              </div>

                              <div className="skills__data">
                                <i className="bx bx-check-circle"></i>

                                <div>
                                  <h3 className="skills__name">CSS</h3>
                                  <span className="skills__level">
                                    Advanced
                                  </span>
                                </div>
                              </div>

                              <div className="skills__data">
                                <i className="bx bx-check-circle"></i>

                                <div>
                                  <h3 className="skills__name">JavaScript</h3>
                                  <span className="skills__level">
                                    Intermediate
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="skills__group">
                              <div className="skills__data">
                                <i className="bx bx-check-circle"></i>

                                <div>
                                  <h3 className="skills__name">React</h3>
                                  <span className="skills__level">
                                    Intermediate
                                  </span>
                                </div>
                              </div>

                              <div className="skills__data">
                                <i className="bx bx-check-circle"></i>

                                <div>
                                  <h3 className="skills__name">Bootstrap</h3>
                                  <span className="skills__level">
                                    Intermediate
                                  </span>
                                </div>
                              </div>

                              <div className="skills__data">
                                <i className="bx bx-check-circle"></i>

                                <div>
                                  <h3 className="skills__name">Git</h3>
                                  <span className="skills__level">
                                    Intermediate
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="skills__area">
                          <h3 className="skills__title">Backend Developer</h3>

                          <div className="skills__box">
                            <div className="skills__group">
                              <div className="skills__data">
                                <i className="bx bx-check-circle"></i>

                                <div>
                                  <h3 className="skills__name">PHP</h3>
                                  <span className="skills__level">
                                    Intermediate
                                  </span>
                                </div>
                              </div>

                              <div className="skills__data">
                                <i className="bx bx-check-circle"></i>

                                <div>
                                  <h3 className="skills__name">MySQL</h3>
                                  <span className="skills__level">Advance</span>
                                </div>
                              </div>

                              <div className="skills__data">
                                <i className="bx bx-check-circle"></i>

                                <div>
                                  <h3 className="skills__name">Firebase</h3>
                                  <span className="skills__level">
                                    Intermediate
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="skills__group">
                              <div className="skills__data">
                                <i className="bx bx-check-circle"></i>

                                <div>
                                  <h3 className="skills__name">Python</h3>
                                  <span className="skills__level">Basic</span>
                                </div>
                              </div>

                              <div className="skills__data">
                                <i className="bx bx-check-circle"></i>

                                <div>
                                  <h3 className="skills__name">Node Js</h3>
                                  <span className="skills__level">
                                    Intermediate
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                }
              })()}
            </div>
          </section>
        </main>

        {/* <!--=============== FOOTER ===============--> */}
        <footer className="footer container">
          <span className="footer__copy">
            Want me to work for you?{' '}
            <a href="#contact" className="hire-btn">
              Contact me
            </a>
          </span>
        </footer>

        {/* <!--=============== SCROLLREVEAL ===============--> */}
        {/* <script src="assets/js/scrollreveal.min.js"></script> */}

        {/* <!--=============== MAIN JS ===============--> */}
        {/* <script src="assets/js/main.js"></script> */}
      </div>
    </div>
  );
};

export default Index;
