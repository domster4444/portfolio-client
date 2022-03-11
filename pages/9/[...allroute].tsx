/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { NextPage } from 'next';
import ProjectImg1 from 'public/images/themes/9theme/img/project-img-1.jpg';
import ProjectImg2 from 'public/images/themes/9theme/img/project-img-2.jpg';
import ProjectImg3 from 'public/images/themes/9theme/img/project-img-3.jpg';
import ProjectImg4 from 'public/images/themes/9theme/img/project-img-4.jpg';
import HeroProfileImg from 'public/images/themes/9theme/img/my-photo.jpg';
import Image from 'next/image';
const Index: NextPage = () => {
  useEffect(() => {
    const navBtn = document.querySelector('#navbar-toggler');
    const navDiv = document.querySelector('.navbar-collapse');
    // @ts-ignore
    navBtn.addEventListener('click', () => {
      // @ts-ignore
      navDiv.classList.toggle('showNav');
    });

    // @ts-ignore
    // stopping animation and transition during window resizing
    let resizeTimer;
    window.addEventListener('resize', () => {
      document.body.classList.add('resize-animation-stopper');
      // @ts-ignore
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
      }, 400);
    });
  }, []);

  return (
    <>
      <div className="theme9">
        {/* <!-- navbar section --> */}
        <nav className="navbar">
          <div className="container">
            <div className="brand-and-toggler">
              <a href="index.html" className="navbar-brand">
                kshitiz
              </a>
              <button
                type="button"
                className="navbar-toggler"
                id="navbar-toggler"
              >
                <span>
                  click me
                  {/* <!-- <i className="fas fa-bars"></i> --> */}
                </span>
              </button>
            </div>

            <div className="navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item nav-active">
                  <a href="#home" className="nav-link">
                    home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="about.html" className="nav-link">
                    about
                  </a>
                </li>
                <li className="nav-item">
                  <a href="resume.html" className="nav-link">
                    resume
                  </a>
                </li>
                <li className="nav-item">
                  <a href="services.html" className="nav-link">
                    services
                  </a>
                </li>
                <li className="nav-item">
                  <a href="skills.html" className="nav-link">
                    skills
                  </a>
                </li>
                <li className="nav-item">
                  <a href="projects.html" className="nav-link">
                    projects
                  </a>
                </li>

                <li className="nav-item">
                  <a href="contact.html" className="nav-link">
                    contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <!-- end of navbar section --> */}

        {/* <!-- home page --> */}
        <section className="home container">
          <div className="row">
            <div className="row-left">
              <h3>hello!</h3>
              <h1>
                i'm <span>kshitiz Don</span>
              </h1>
              <h2>a freelance web designer</h2>
              <div className="home-pg-btn">
                <button type="button" className="btn">
                  hire me
                </button>
                <button type="button" className="btn">
                  my works
                </button>
              </div>
            </div>

            <div className="row-right">
              <div className="img-border">
                <div className="img-container">
                  <Image src={HeroProfileImg} alt="my photo" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- end of home page --> */}

        {/* <!-- project section --> */}
        <section className="projects container">
          <div className="title">
            <h2>projects</h2>
            <div>
              <h2>our projects</h2>
            </div>
          </div>

          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            perspiciatis accusantium eligendi aliquam excepturi dolores
            obcaecati eveniet inventore aut? Voluptas assumenda obcaecati
            dignissimos animi incidunt?
          </p>
          {/* //! ________________________________ITEM */}
          {/* //! ________________________________ITEM */}
          {/* //! ________________________________ITEM */}
          {/* //! ________________________________ITEM */}
          {/* //! ________________________________ITEM */}
          <div className="row">
            <div className="item">
              <Image src={ProjectImg1}></Image>
              <div className="item-overlay">
                <a href="#">branding & illustration design</a>
                <h3>web design</h3>
              </div>
            </div>

            <div className="item">
              <Image src={ProjectImg2}></Image>
              <div className="item-overlay">
                <a href="#">branding & illustration design</a>
                <h3>web design</h3>
              </div>
            </div>
            <div className="item">
              <Image src={ProjectImg3}></Image>
              <div className="item-overlay">
                <a href="#">branding & illustration design</a>
                <h3>web design</h3>
              </div>
            </div>

            <div className="item">
              <Image src={ProjectImg4}></Image>
              <div className="item-overlay">
                <a href="#">branding & illustration design</a>
                <h3>web design</h3>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- project section end --> */}

        {/* <!-- about  --> */}
        <section className="about container">
          <div className="title">
            <h2>about</h2>
            <div>
              <h2>about me</h2>
            </div>
          </div>

          <div className="row">
            <div className="row-left">
              <Image src={HeroProfileImg} alt="about photo" />
            </div>

            <div className="row-right">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                praesentium numquam alias soluta incidunt? Similique assumenda,
                voluptatibus saepe quae iusto ratione dicta consectetur nesciunt
                perspiciatis!
              </p>
              <div className="about-content">
                <ul>
                  <li className="text">
                    <span>Name: </span>
                    <span>kshitiz Don</span>
                  </li>
                  <li className="text">
                    <span>Date of Birth: </span>
                    <span>January 01, 1980</span>
                  </li>
                  <li className="text">
                    <span>Address: </span>
                    <span>New York CA 829 USA</span>
                  </li>
                  <li className="text">
                    <span>Email: </span>
                    <span>kshitizwill@gmail.com</span>
                  </li>
                  <li className="text">
                    <span>Zip code: </span>
                    <span>758844</span>
                  </li>
                  <li className="text">
                    <span>Phone: </span>
                    <span>+4854 384 0000</span>
                  </li>
                </ul>
              </div>

              <h3>
                120 <span>Project complete</span>
              </h3>
              <button type="button" className="btn">
                download cv
              </button>
            </div>
          </div>
        </section>
        {/* <!-- about end --> */}

        {/* <!-- resume  --> */}
        <section className="resume container">
          <div className="title">
            <h2>resume</h2>
            <div>
              <h2>resume</h2>
            </div>
          </div>

          <p className="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
            consequatur ipsum dolores? Et consequuntur error, atque aliquid
            molestias, possimus sunt praesentium dolore, nam tenetur dicta!
          </p>

          <div className="row">
            <div className="item">
              <div className="icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <span>2018 - present</span>
              <h2>
                web developer - <span>envato</span>
              </h2>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit non porro nisi, vitae accusamus sapiente!
              </p>
            </div>

            <div className="item">
              <div className="icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <span>2015</span>
              <h2>
                computer engineering - <span>MIT</span>
              </h2>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit non porro nisi, vitae accusamus sapiente!
              </p>
            </div>

            <div className="item">
              <div className="icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <span>2013 - 2018</span>
              <h2>
                ui/ux designer - <span>codeburst</span>
              </h2>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit non porro nisi, vitae accusamus sapiente!
              </p>
            </div>

            <div className="item">
              <div className="icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <span>2012</span>
              <h2>
                masters in IT - <span>mit</span>
              </h2>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit non porro nisi, vitae accusamus sapiente!
              </p>
            </div>

            <div className="item">
              <div className="icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <span>2005 - 2013</span>
              <h2>
                consultant - <span>videohive</span>
              </h2>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit non porro nisi, vitae accusamus sapiente!
              </p>
            </div>

            <div className="item">
              <div className="icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <span>2009</span>
              <h2>
                high school - <span>tunis high school</span>
              </h2>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit non porro nisi, vitae accusamus sapiente!
              </p>
            </div>
          </div>
        </section>
        {/* <!-- resume end --> */}

        {/* <!-- services  --> */}

        <section className="services container">
          <div className="title">
            <h2>services</h2>
            <div>
              <h2>services</h2>
            </div>
          </div>

          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            voluptatum cumque quaerat consequatur, laboriosam, nemo deleniti
            perferendis veniam amet labore nobis fugit voluptate sint omnis.
          </p>

          <div className="row">
            <div className="item">
              <span>
                <i className="fab">1</i>
              </span>
              <h2>web design</h2>
            </div>

            <div className="item">
              <span>
                <i className="fab">2</i>
              </span>
              <h2>photography</h2>
            </div>

            <div className="item">
              <span>
                <i className="fab">3</i>
              </span>
              <h2>web developer</h2>
            </div>

            <div className="item">
              <span>
                <i className="fab">4</i>
              </span>
              <h2>branding</h2>
            </div>

            <div className="item">
              <span>
                <i className="fab">5</i>
              </span>
              <h2>app developing</h2>
            </div>

            <div className="item">
              <span>
                <i className="fab">6</i>
              </span>
              <h2>product strategy</h2>
            </div>
          </div>

          <button type="button" className="btn">
            view more
          </button>
        </section>
        {/* <!-- services end --> */}

        {/* <!-- skills  --> */}
        <section className="skills container">
          <div className="title">
            <h2>skills</h2>
            <div>
              <h2>my skills</h2>
            </div>
          </div>

          <p className="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod ab
            laudantium possimus molestias sapiente, saepe facilis dolore autem
            repellat, quo iure tempore nisi perspiciatis. Quasi?
          </p>

          <div className="row">
            <div className="item">
              <div className="item-text">
                <span>Photoshop</span>
                <span className="w-90">90%</span>
              </div>
              <div className="progress">
                <div className="progress-bar w-90"></div>
              </div>
            </div>

            <div className="item">
              <div className="item-text">
                <span>jQuery</span>
                <span className="w-75">75%</span>
              </div>
              <div className="progress">
                <div className="progress-bar w-75"></div>
              </div>
            </div>

            <div className="item">
              <div className="item-text">
                <span>HTML5</span>
                <span className="w-85">85%</span>
              </div>
              <div className="progress">
                <div className="progress-bar w-85"></div>
              </div>
            </div>

            <div className="item">
              <div className="item-text">
                <span>CSS3</span>
                <span className="w-80">80%</span>
              </div>
              <div className="progress">
                <div className="progress-bar w-80"></div>
              </div>
            </div>

            <div className="item">
              <div className="item-text">
                <span>Wordpress</span>
                <span className="w-60">60%</span>
              </div>
              <div className="progress">
                <div className="progress-bar w-60"></div>
              </div>
            </div>

            <div className="item">
              <div className="item-text">
                <span>PHP</span>
                <span className="w-68">68%</span>
              </div>
              <div className="progress">
                <div className="progress-bar w-68"></div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- skills end --> */}

        {/* <!-- contact section --> */}
        <section className="contact container">
          <div className="title">
            <h2>contact</h2>
            <div>
              <h2>get in touch</h2>
            </div>
          </div>

          <p className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
            tempore, et dolores eum voluptas iusto voluptate, dicta iure
            mollitia atque, exercitationem deserunt laborum libero natus!
          </p>

          <div className="row">
            <div className="col-left">
              <h2>feel free to ask us!</h2>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                soluta mollitia suscipit maxime sunt dolore deleniti quam nihil
                repellendus perferendis.
              </p>

              <div className="contact-info">
                <span>
                  <i className="fas fa-envelope-open"></i>
                </span>
                <h3>
                  <span className="text">mail me</span> <br />
                  kshitiz@gmail.com
                </h3>
              </div>

              <div className="contact-info">
                <span>
                  <i className="fas fa-phone-square-alt"></i>
                </span>
                <h3>
                  <span className="text">call me</span> <br />+ 2382 383 0002
                </h3>
              </div>

              <div className="contact-social-links">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>

            <div className="col-right">
              <form className="contact-form">
                <div className="form-group">
                  <input type="text" placeholder="your name" />
                  <input type="email" placeholder="your email" />
                  <input type="text" placeholder="your subject" />
                </div>
                <textarea rows={5}></textarea>
                <button type="submit" className="btn">
                  send message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
