import React, { useEffect } from 'react';

const Index = () => {
  return (
    <>
      <div className="elevenMainPage">
        {/* <div className="cursor-1"></div>
        <div className="cursor-2"></div> */}

        {/* <div id="menu-bars" className="fas fa-bars"></div> */}

        {/* <header>
          <a href="#" className="logo">
            {' '}
            <span>shaikh</span> anas{' '}
          </a>

          <nav className="navbar">
            <a href="#home">home</a>
            <a href="#about">about</a>
            <a href="#service">service</a>
            <a href="#experience">experience</a>
            <a href="#portfolio">portfolio</a>
            <a href="#contact">contact</a>
          </nav>

          <div className="follow">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
        </header> */}

        <section className="home" id="home">
          <div className="content">
            <span className="hi"> hi there... </span>
            <h3>
              i am
              <span id="highlight"> Kshitiz </span>
              Don
            </h3>
            <p className="info">i am a front-end developer</p>
            {/* <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              quas reiciendis dolorum deleniti repellat atque amet, commodi
              voluptas illum culpa?
            </p> */}
            <a href="#about" className="btn">
              about me
            </a>
          </div>

          <div
            className="image"
            style={{
              margin: '2rem 0rem',
              borderRadius: '1rem',
              overflow: 'hidden',
            }}
          >
            <img
              src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </section>

        <section className="about" id="about">
          <h1 className="heading">
            about <span id="highlight"> me </span>
          </h1>

          <div className="row-1">
            <div className="image">
              <img
                src="
           
                https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
                "
                alt=""
              />
            </div>

            <div className="content">
              <h3>
                my name is <span id="highlight"> Kshitiz </span>& i am a
                font-end developer
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                error molestias impedit officia! Exercitationem dignissimos esse
                eos quas nisi impedit delectus, voluptate ullam iste nostrum at.
                Dolor culpa eaque omnis.
              </p>
              <div className="box-container">
                <div className="box">
                  <p>
                    <span> age : </span> 19
                  </p>
                  <p>
                    <span> gender : </span> male
                  </p>
                  <p>
                    <span> language : </span> hindi, english
                  </p>
                  <p>
                    <span> work : </span> front-end developer
                  </p>
                </div>
                <div className="box">
                  <p>
                    <span> freelance : </span> available
                  </p>
                  <p>
                    <span> phone : </span> +987456241822
                  </p>
                  <p>
                    <span> email : </span> kshitizdon@gmail.com
                  </p>
                  <p>
                    <span> country : </span> india
                  </p>
                </div>
              </div>
              <a href="#" className="btn">
                download CV
              </a>
              <a href="#" className="btn">
                hire me
              </a>
            </div>
          </div>

          <h1 className="heading">
            <span> my </span> skills
          </h1>

          <div className="row-2">
            <div className="skills">
              <div className="progress">
                <h3>
                  web design <span> 95% </span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>
              <div className="progress">
                <h3>
                  web development <span> 80% </span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>
              <div className="progress">
                <h3>
                  UI design <span> 75% </span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>
              <div className="progress">
                <h3>
                  seo marketing <span> 85% </span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>
            </div>

            <div className="box-container">
              <div className="box">
                <h3> 2+</h3>
                <p>years of experience</p>
              </div>
              <div className="box">
                <h3> 250+</h3>
                <p>happy clients</p>
              </div>
              <div className="box">
                <h3> 150+</h3>
                <p>projects completed</p>
              </div>
              <div className="box">
                <h3> 12+</h3>
                <p>awards won</p>
              </div>
            </div>
          </div>
        </section>

        <section className="service" id="service">
          <h1 className="heading">
            <span> my </span> services
          </h1>

          <div className="box-container">
            <div className="box">
              <i
                className="bx bx-donate-heart"
                style={{
                  fontSize: '5rem',
                  color: 'black',
                }}
              ></i>
              <h3>web design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                facere?
              </p>
            </div>
            <div className="box">
              <i
                className="bx bx-donate-heart"
                style={{
                  fontSize: '5rem',
                  color: 'black',
                }}
              ></i>
              <h3>web design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                facere?
              </p>
            </div>
            <div className="box">
              <i
                className="bx bx-donate-heart"
                style={{
                  fontSize: '5rem',
                  color: 'black',
                }}
              ></i>
              <h3>web design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                facere?
              </p>
            </div>
            <div className="box">
              <i
                className="bx bx-donate-heart"
                style={{
                  fontSize: '5rem',
                  color: 'black',
                }}
              ></i>
              <h3>web design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                facere?
              </p>
            </div>
            <div className="box">
              <i
                className="bx bx-donate-heart"
                style={{
                  fontSize: '5rem',
                  color: 'black',
                }}
              ></i>
              <h3>web design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                facere?
              </p>
            </div>
            <div className="box">
              <i
                className="bx bx-donate-heart"
                style={{
                  fontSize: '5rem',
                  color: 'black',
                }}
              ></i>
              <h3>web design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                facere?
              </p>
            </div>
            <div className="box">
              <i
                className="bx bx-donate-heart"
                style={{
                  fontSize: '5rem',
                  color: 'black',
                }}
              ></i>
              <h3>web design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                facere?
              </p>
            </div>
          </div>
        </section>

        <section className="experience" id="experience">
          <h1 className="heading">
            <span> my </span> experience
          </h1>

          <div className="box-container">
            {/* // experience box */}
            <div className="box">
              <div className="content">
                <span
                  style={{
                    color: 'black',
                  }}
                >
                  {' '}
                  2015 - 2016{' '}
                </span>
                <h3>front-end development</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  vel quasi consectetur expedita ipsam similique maiores ipsa?
                  Error, debitis ullam.
                </p>
              </div>
            </div>

            {/* // experience box */}
            <div className="box">
              <div className="content">
                <span
                  style={{
                    color: 'black',
                  }}
                >
                  {' '}
                  2015 - 2016{' '}
                </span>
                <h3>front-end development</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  vel quasi consectetur expedita ipsam similique maiores ipsa?
                  Error, debitis ullam.
                </p>
              </div>
            </div>

            {/* // experience box */}
            <div className="box">
              <div className="content">
                <span
                  style={{
                    color: 'black',
                  }}
                >
                  {' '}
                  2015 - 2016{' '}
                </span>
                <h3>front-end development</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  vel quasi consectetur expedita ipsam similique maiores ipsa?
                  Error, debitis ullam.
                </p>
              </div>
            </div>

            {/* // experience box */}
            <div className="box">
              <div className="content">
                <span
                  style={{
                    color: 'black',
                  }}
                >
                  {' '}
                  2015 - 2016{' '}
                </span>
                <h3>front-end development</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  vel quasi consectetur expedita ipsam similique maiores ipsa?
                  Error, debitis ullam.
                </p>
              </div>
            </div>

            {/* // experience box */}
            <div className="box">
              <div className="content">
                <span
                  style={{
                    color: 'black',
                  }}
                >
                  {' '}
                  2015 - 2016{' '}
                </span>
                <h3>front-end development</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  vel quasi consectetur expedita ipsam similique maiores ipsa?
                  Error, debitis ullam.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio" id="portfolio">
          <h1 className="heading">
            <span> my </span> portfolio
          </h1>

          <div className="box-container">
            {/* //! box  start */}
            <div className="box">
              <img
                src="https://images.pexels.com/photos/1419923/pexels-photo-1419923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />

              <h3>project 01</h3>
              <div className="icons">
                <a
                  href="#"
                  className="bx bx-video"
                  style={{
                    color: '#e38528',
                    fontSize: '2rem',
                  }}
                ></a>

                <a
                  href="#"
                  className="
                bx bx-link"
                  style={{
                    color: '#e38528',
                    fontSize: '2rem',
                  }}
                ></a>
                <a
                  href="#"
                  className="bx bxs-file-doc"
                  style={{
                    color: '#e38528',
                    fontSize: '2rem',
                  }}
                ></a>
              </div>
            </div>
            {/* //! box ends here  */}

            {/* //! box  start */}
            <div className="box">
              <img
                src="https://images.pexels.com/photos/1419923/pexels-photo-1419923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />

              <h3>project 01</h3>
              <div className="icons">
                <a
                  href="#"
                  className="bx bx-video"
                  style={{
                    color: '#e38528',
                    fontSize: '2rem',
                  }}
                ></a>

                <a
                  href="#"
                  className="
                bx bx-link"
                  style={{
                    color: '#e38528',
                    fontSize: '2rem',
                  }}
                ></a>
                <a
                  href="#"
                  className="bx bxs-file-doc"
                  style={{
                    color: '#e38528',
                    fontSize: '2rem',
                  }}
                ></a>
              </div>
            </div>
            {/* //! box ends here  */}

            {/* //! box  start */}
            <div className="box">
              <img
                src="https://images.pexels.com/photos/1419923/pexels-photo-1419923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />

              <h3>project 01</h3>
              <div className="icons">
                <a
                  href="#"
                  className="bx bx-video"
                  style={{
                    color: '#e38528',
                    fontSize: '2rem',
                  }}
                ></a>

                <a
                  href="#"
                  className="
                bx bx-link"
                  style={{
                    color: '#e38528',
                    fontSize: '2rem',
                  }}
                ></a>
                <a
                  href="#"
                  className="bx bxs-file-doc"
                  style={{
                    color: '#e38528',
                    fontSize: '2rem',
                  }}
                ></a>
              </div>
            </div>
            {/* //! box ends here  */}

            {/* //! box  start */}
            <div className="box">
              <img
                src="https://images.pexels.com/photos/1419923/pexels-photo-1419923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />

              <h3>project 01</h3>
              <div className="icons">
                <a
                  href="#"
                  className="bx bx-video"
                  style={{
                    color: '#e38528',
                    fontSize: '2rem',
                  }}
                ></a>

                <a
                  href="#"
                  className="
                bx bx-link"
                  style={{
                    color: '#e38528',
                    fontSize: '2rem',
                  }}
                ></a>
                <a
                  href="#"
                  className="bx bxs-file-doc"
                  style={{
                    color: '#e38528',
                    fontSize: '2rem',
                  }}
                ></a>
              </div>
            </div>
            {/* //! box ends here  */}

            {/* //! box  start */}
            <div className="box">
              <img
                src="https://images.pexels.com/photos/1419923/pexels-photo-1419923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />

              <h3>project 01</h3>
              <div className="icons">
                <a
                  href="#"
                  className="bx bx-video"
                  style={{
                    color: '#e38528',
                    fontSize: '2rem',
                  }}
                ></a>

                <a
                  href="#"
                  className="
                bx bx-link"
                  style={{
                    color: '#e38528',
                    fontSize: '2rem',
                  }}
                ></a>
                <a
                  href="#"
                  className="bx bxs-file-doc"
                  style={{
                    color: '#e38528',
                    fontSize: '2rem',
                  }}
                ></a>
              </div>
            </div>
            {/* //! box ends here  */}
          </div>
        </section>

        <section className="contact" id="contact">
          <h1 className="heading">
            contact <span> me </span>
          </h1>

          <div className="icons-container">
            <div className="icons">
              <i
                className="bx bxl-gmail"
                style={{
                  fontSize: '4rem',
                  color: '#e38528',
                }}
              ></i>
              <h3>my email</h3>
              <p>kshitiz@gmail.com</p>
              <p>kshitizDon@gmail.com</p>
            </div>

            <div className="icons">
              <i
                className="bx bx-phone-call"
                style={{
                  fontSize: '4rem',
                  color: '#e38528',
                }}
              ></i>
              <h3>my number</h3>
              <p>+98745652154</p>
              <p>+981878458488</p>
            </div>

            <div className="icons">
              <i
                className="bx bxl-instagram"
                style={{
                  fontSize: '4rem',
                  color: '#e38528',
                }}
              ></i>
              <h3>Social Handling</h3>
              <p>Kathmandu Sahar</p>
            </div>
          </div>

          <div className="row">
            <form action="">
              <input type="text" placeholder="name" className="box" />
              <input type="email" placeholder="email" className="box" />
              <input type="number" placeholder="number" className="box" />

              <textarea
                name=""
                placeholder="message"
                id=""
                cols={30}
                rows={10}
              ></textarea>

              <input type="submit" className="btn" value="send message" />
            </form>

            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1625069635379!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </section>

        {/* <!-- contact section ends --> */}

        {/* <!-- footer section  --> */}
        <footer className="footer">
          created by <span> mr. Kshitiz Don </span> | all rights reserved!
        </footer>

        {/* <!-- custom js file link  --> */}
        {/* <script src="js/script.js"></script> */}
      </div>
    </>
  );
};

export default Index;
