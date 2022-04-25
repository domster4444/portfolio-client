import React, { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    alert('javascript executed');
    let menu = document.querySelector('#menu-btn');
    let header = document.querySelector('.header');
    // @ts-ignore
    menu.onclick = () => {
      // @ts-ignore
      menu.classList.toggle('fa-times');
      // @ts-ignore
      header.classList.toggle('active');
    };

    // @ts-ignore
    window.onscroll = () => {
      // @ts-ignore
      menu.classList.remove('fa-times');
      // @ts-ignore
      header.classList.remove('active');
    };

    // @ts-ignore
    let themeToggler = document.querySelector('#theme-toggler');
    // @ts-ignore

    // @ts-ignore
    themeToggler.onclick = () => {
      // @ts-ignore
      themeToggler.classList.toggle('fa-sun');
      // @ts-ignore
      if (themeToggler.classList.contains('fa-sun')) {
        // @ts-ignore
        document.body.classList.add('active');
        // @ts-ignore
      } else {
        document.body.classList.remove('active');
      }
    };
  }, []);

  return (
    <>
      <div id="fourteenMainPage">
        {/* <!-- header section starts  --> */}

        <header className="header">
          <div className="user">
            <img src="image/user-img.png" alt="" />
            <h3>shaikh anas</h3>
            <p>front-end developer</p>
          </div>

          <nav className="navbar">
            <a href="#home">home</a>
            <a href="#about">about</a>
            <a href="#services">services</a>
            <a href="#portfolio">portfolio</a>
            <a href="#contact">contact</a>
          </nav>
        </header>

        {/* <!-- header section ends --> */}

        <div id="menu-btn" className="fas fa-bars"></div>

        {/* <!-- theme toggler  --> */}

        <div id="theme-toggler" className="fas fa-moon"></div>

        {/* <!-- home section starts  --> */}

        <section className="home" id="home">
          <div className="content">
            <h3>shaikh anas</h3>
            <p>i am a front-end developer</p>
            <a href="#" className="btn">
              download CV
            </a>
          </div>

          <div className="share">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
            <a href="#" className="fab fa-pinterest"></a>
          </div>
        </section>

        {/* <!-- home section ends --> */}

        {/* <!-- about section starts  --> */}

        <section className="about" id="about">
          <h1 className="heading">
            {' '}
            <span>about</span> me{' '}
          </h1>

          <div className="row">
            <div className="box-container">
              <div className="box">
                <h3>2+</h3>
                <p>years of experience</p>
              </div>
              <div className="box">
                <h3>450+</h3>
                <p>satisfied clients</p>
              </div>
              <div className="box">
                <h3>190+</h3>
                <p>working hours</p>
              </div>
              <div className="box">
                <h3>10+</h3>
                <p>awards won</p>
              </div>
            </div>

            <div className="content">
              <h3>
                my name is <span>shaikh anas</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                hic eum magnam, ea nulla sit cumque explicabo dolorem illo
                itaque?
              </p>
              <a href="#" className="btn">
                contact me
              </a>
            </div>
          </div>

          <div className="row">
            <div className="progress">
              <h3>
                {' '}
                web design <span>90%</span>{' '}
              </h3>
              <div className="bar bar-1-1">
                <span></span>
              </div>
              <h3>
                {' '}
                graphic design <span>75%</span>{' '}
              </h3>
              <div className="bar bar-1-2">
                <span></span>
              </div>
              <h3>
                {' '}
                UI/UX design <span>80%</span>{' '}
              </h3>
              <div className="bar bar-1-3">
                <span></span>
              </div>
            </div>

            <div className="progress">
              <h3>
                {' '}
                HTML <span>95%</span>{' '}
              </h3>
              <div className="bar bar-2-1">
                <span></span>
              </div>
              <h3>
                {' '}
                CSS <span>80%</span>{' '}
              </h3>
              <div className="bar bar-2-2">
                <span></span>
              </div>
              <h3>
                {' '}
                javascript <span>65%</span>{' '}
              </h3>
              <div className="bar bar-2-3">
                <span></span>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- about section ends --> */}

        {/* <!-- services section starts  --> */}

        <section className="services" id="services">
          <h1 className="heading">
            {' '}
            my <span>services</span>{' '}
          </h1>

          <div className="box-container">
            <div className="box">
              <i className="fas fa-code"></i>
              <h3>web design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem quas delectus, laboriosam nulla dolore in.
              </p>
            </div>

            <div className="box">
              <i className="fas fa-paint-brush"></i>
              <h3>graphic design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem quas delectus, laboriosam nulla dolore in.
              </p>
            </div>

            <div className="box">
              <i className="fas fa-mobile"></i>
              <h3>responsive design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem quas delectus, laboriosam nulla dolore in.
              </p>
            </div>

            <div className="box">
              <i className="fas fa-bullhorn"></i>
              <h3>digital marketing</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem quas delectus, laboriosam nulla dolore in.
              </p>
            </div>

            <div className="box">
              <i className="fas fa-search-dollar"></i>
              <h3>SEO marketing</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem quas delectus, laboriosam nulla dolore in.
              </p>
            </div>

            <div className="box">
              <i className="fab fa-wordpress"></i>
              <h3>wordpress</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem quas delectus, laboriosam nulla dolore in.
              </p>
            </div>
          </div>
        </section>

        {/* <!-- services section ends --> */}

        {/* <!-- portfolio section starts  --> */}

        <section className="portfolio" id="portfolio">
          <h1 className="heading">
            {' '}
            my <span>portfolio</span>{' '}
          </h1>

          <div className="box-container">
            <div className="box">
              <img src="image/img-1.jpg" alt="" />
              <div className="content">
                <h3>project 01</h3>
              </div>
            </div>

            <div className="box">
              <img src="image/img-2.jpg" alt="" />
              <div className="content">
                <h3>project 02</h3>
              </div>
            </div>

            <div className="box">
              <img src="image/img-3.jpg" alt="" />
              <div className="content">
                <h3>project 03</h3>
              </div>
            </div>

            <div className="box">
              <img src="image/img-4.jpg" alt="" />
              <div className="content">
                <h3>project 04</h3>
              </div>
            </div>

            <div className="box">
              <img src="image/img-5.jpg" alt="" />
              <div className="content">
                <h3>project 05</h3>
              </div>
            </div>

            <div className="box">
              <img src="image/img-6.jpg" alt="" />
              <div className="content">
                <h3>project 06</h3>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- portfolio section ends --> */}

        {/* <!-- contact section starts --> */}

        <section className="contact" id="contact">
          <h1 className="heading">
            {' '}
            <span>contact</span> me{' '}
          </h1>

          <form action="">
            <input type="text" placeholder="your name" className="box" />
            <input type="email" placeholder="your email" className="box" />
            <input type="text" placeholder="subject" className="box" />
            <textarea
              name=""
              className="box"
              placeholder="your message"
              id=""
              cols={30}
              rows={10}
            ></textarea>
            <input type="submit" value="send message" className="btn" />
          </form>
        </section>

        {/* <!-- contact section ends --> */}

        <div className="credits">
          {' '}
          created by <span>mr. web designer</span> | all rights reserved{' '}
        </div>

        {/* <!-- custom js file link  --> */}
        {/* <script src="js/script.js"></script> */}
      </div>
    </>
  );
};

export default Index;
