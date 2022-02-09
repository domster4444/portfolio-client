/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import kshitiz from 'public/images/themes/2theme/img/kshitiz.png';
import one from 'public/images/themes/2theme/img/one.png';
import two from 'public/images/themes/2theme/img/two.png';
import three from 'public/images/themes/2theme/img/three.png';
import four from 'public/images/themes/2theme/img/four.png';
import projectOne from 'public/images/themes/2theme/img/projectOne.png';
import projectTwo from 'public/images/themes/2theme/img/projectTwo.png';
import projectThree from 'public/images/themes/2theme/img/projectThree.png';
import mom from 'public/images/themes/2theme/img/mom.png';
import statisticsLogoOne from 'public/images/themes/2theme/img/statistics-logo-one.png';
import statisticsLogoTwo from 'public/images/themes/2theme/img/statistics-logo-two.png';
import statisticsLogoThree from 'public/images/themes/2theme/img/statistics-logo-three.png';
import statisticsLogoFour from 'public/images/themes/2theme/img/statistics-logo-four.png';
import bookPotrait from 'public/images/themes/2theme/img/book-potrait.png';
import Image from 'next/image';

const Index = () => {
  useEffect(() => {
    //?---------------------------- SIDEBAR+HAMBURGER+BLURSCREEN
    let blurblank: HTMLElement | null = document.getElementById('blurblank');
    let cross: HTMLElement | null = document.getElementById('exit-aside');
    let hamburger: HTMLElement | null = document.getElementById('hamburger');
    let aside: HTMLElement | null = document.getElementById('sideBar');
    //  @ts-ignore
    hamburger.addEventListener('click', () => {
      //  @ts-ignore
      aside.style.visibility = `visible`;
      //  @ts-ignore
      aside.style.height = `100vh`;
      //  @ts-ignore
      blurblank.style.display = 'block';
    });
    //  @ts-ignore
    blurblank.addEventListener('click', () => {
      //  @ts-ignore
      aside.style.visibility = `hidden`;
      //  @ts-ignore
      aside.style.height = `40vh`;
      //  @ts-ignore
      blurblank.style.display = 'none';
    });

    //  @ts-ignore
    cross.addEventListener('click', () => {
      //  @ts-ignore
      aside.style.visibility = `hidden`;
      //  @ts-ignore
      aside.style.height = `40vh`;
      //  @ts-ignore
      blurblank.style.display = 'none';
    });

    //?---------------------------- SIDEBAR+HAMBURGER+BLURSCREEN

    // -----------------------------------------SECTION2 SWITCHING IN BIOGRAPHY SECTION

    // menus  to add event listeners
    let aboutmeMenu = document.getElementById('aboutmeMenu');
    let beginningMenu = document.getElementById('beginningMenu');
    let thefirstMenu = document.getElementById('thefirstMenu');
    let careerMenu = document.getElementById('careerMenu');

    // -----------------------INFORMATIONS-----------------
    let aboutme = document.getElementById('aboutme');
    let beginning = document.getElementById('beginning');
    let thefirst = document.getElementById('thefirst');
    let career = document.getElementById('career');
    //  @ts-ignore
    beginning.style.display = 'none';
    //  @ts-ignore
    thefirst.style.display = 'none';
    //  @ts-ignore
    career.style.display = 'none';
    //  @ts-ignore
    aboutmeMenu.addEventListener('click', () => {
      //  @ts-ignore
      // ?---added--
      //  @ts-ignore
      aboutme.style.display = 'block';
      //?removed

      //  @ts-ignore
      thefirst.style.display = 'none';
      //  @ts-ignore
      career.style.display = 'none';
      //  @ts-ignore
      beginning.style.display = 'none';
    });

    //  @ts-ignore
    beginningMenu.addEventListener('click', () => {
      //  @ts-ignore
      //  @ts-ignore
      // ?---added--
      beginning.style.display = 'block';
      //?removed
      //  @ts-ignore
      aboutme.style.display = 'none';
      //  @ts-ignore
      thefirst.style.display = 'none';
      //  @ts-ignore
      career.style.display = 'none';
    });

    //  @ts-ignore
    thefirstMenu.addEventListener('click', () => {
      // ?---added--
      //  @ts-ignore
      thefirst.style.display = 'block';
      //?removed
      //  @ts-ignore
      aboutme.style.display = 'none';
      //  @ts-ignore
      beginning.style.display = 'none';
      //  @ts-ignore
      career.style.display = 'none';
    });

    //  @ts-ignore
    careerMenu.addEventListener('click', () => {
      // ?---added--
      //  @ts-ignore
      career.style.display = 'block';
      //  @ts-ignore
      career.style.marginTop = '1rem';
      //  @ts-ignore
      //?removed
      aboutme.style.display = 'none';
      //  @ts-ignore
      beginning.style.display = 'none';
      //  @ts-ignore
      thefirst.style.display = 'none';
    });
  });
  return (
    <>
      <main id="body">
        <div id="blurblank"></div>
        <nav id="toolbar">
          <ul id="toolbar-ul">
            <li
              id="name-logo"
              className="montserrat_300  animate__animated animate__fadeInLeft"
            >
              KSHITIZ <span>SHAH</span>
            </li>
            <li id="hamburger-container">
              <div id="hamburger">
                <div className="line" id="line-one"></div>
                <div className="line" id="line-two"></div>
                <div className="line" id="line-three"></div>
              </div>

              <aside id="sideBar">
                <div id="exit-aside">
                  <div id="upper-cross"></div>
                  <div id="lower-cross"></div>
                </div>
                <ul className="playfair_300">
                  <li>
                    <a href="#heroSection">HOME</a>
                  </li>
                  <li>
                    <a href="#BiographySection">ABOUT</a>
                  </li>
                  <li>
                    <a href="#projectsDivision">WORKS</a>
                  </li>
                  <li>
                    <a href="#projectSection">PROJECTS</a>
                  </li>
                  <li>
                    <a href="#interestBlock">INTERESTS</a>
                  </li>
                  <li>
                    <a href="#contactMeSectionContainer">CONTACT</a>
                  </li>
                </ul>
              </aside>
            </li>
          </ul>
        </nav>
        <section id="heroSection">
          <Image src={kshitiz} alt="kshitiz potrait" id="myPotrait"></Image>
          <article>
            <div
              id="my-introduction-heading"
              className="animate__animated animate__fadeInDown"
            >
              <h2 className="playfair_italic_500">
                <i>Kshitiz</i>
              </h2>
              <h1 className="playfair_300">SHAH</h1>
              <h4 className="montserrat_300">WEBSITE OF THE Developer</h4>
            </div>
          </article>
        </section>

        <section id="BiographySection">
          <div id="biography--left-Division">
            <Image src={one} alt="number one potrait"></Image>
            <ul className="montserrat_300">
              <li className="active">
                <a id="aboutmeMenu" href="##biography--right-Division">
                  ABOUT ME
                </a>
              </li>
              <li>
                <a id="beginningMenu" href="##biography--right-Division">
                  BEGINNING
                </a>
              </li>
              <li>
                <a id="thefirstMenu" href="##biography--right-Division">
                  THE FIRST BOOK
                </a>
              </li>
              <li>
                <a id="careerMenu" href="#biography--right-Division">
                  MY CAREER
                </a>
              </li>
            </ul>
          </div>
          <div id="biography--right-Division">
            <ul>
              <li id="aboutme">
                <h4 className="montserrat_300">ABOUT ME</h4>
                <h1 className="playfair_300">My biography</h1>
                <hr></hr>
                <div className="blue-line-box"></div>
                <article>
                  <p className="lato_400">
                    Hey! My name is Kshitiz and I'm front-end Webdeveloper. I
                    develop high quality websites,webapp.I am expert in
                    HTML,CSS,SCSS,React,Javascript.I express
                    feelings,expressions,and quality through my websites.I find
                    my inspiration in diving into people's eyes,souls,during our
                    communication with each other.My works are full of
                    breathtaking quality and strongly near to perfection.
                  </p>
                  <br></br>
                  <p className="lato_400">
                    I was born in Kathmandu,Nepal and have been living here for
                    18 years.I studied Computer Science (Physics Major) in
                    Little Angel's College,Hattiban. From the age of 15 I
                    decided to be the FRONT END DEVELOPER.I managed to land my
                    job at the age of 16 for an Educational Organization with a
                    website for a secondary school of my home town.From that
                    time I have worked for 3 clients for their startups and
                    working on other projects.
                  </p>
                </article>
              </li>

              {/* -----------------------------------BEGINING-------------------------  */}
              <li id="beginning">
                <h4 className="montserrat_300">BEGINNING</h4>
                <h1 className="playfair_300">My biography</h1>
                <hr></hr>
                <div className="blue-line-box"></div>
                <article>
                  <p className="lato_400">this is the beginnning</p>
                  <br></br>
                  <p className="lato_400">
                    I was born in Kathmandu,Nepal and have been living here for
                    18 years.I studied Computer Science (Physics Major) in
                    Little Angel's College,Hattiban. From the age of 15 I
                    decided to be the FRONT END DEVELOPER.I managed to land my
                    job at the age of 16 for an Educational Organization with a
                    website for a secondary school of my home town.From that
                    time I have worked for 3 clients for their startups and
                    working on other projects.
                  </p>
                </article>
              </li>
              {/* -------------------------------------------------First Project-----------------  */}

              <li id="thefirst">
                <h4 className="montserrat_300">FIRST PROJECT</h4>
                <h1 className="playfair_300">My biography</h1>
                <hr></hr>
                <div className="blue-line-box"></div>
                <article>
                  <p className="lato_400">
                    Hey! My name is Kshitiz and I'm front-end Webdeveloper. I
                    THIS IS FIRST
                  </p>
                  <br></br>
                  <p className="lato_400">
                    I was born in Kathmandu,Nepal and have been living here for
                    18 years.I studied Computer Science (Physics Major) in
                    Little Angel's College,Hattiban. From the age of 15 I
                    decided to be the FRONT END DEVELOPER.I managed to land my
                    job at the age of 16 for an Educational Organization with a
                    website for a secondary school of my home town.From that
                    time I have worked for 3 clients for their startups and
                    working on other projects.
                  </p>
                </article>
              </li>
              {/* ---------------------------------------------------My Career-------------------   */}
              <li id="career">
                <h4 className="montserrat_300">MY CAREER</h4>
                <h1 className="playfair_300">My biography</h1>
                <hr></hr>
                <div className="blue-line-box"></div>
                <article>
                  <p className="lato_400">THIS IS CAREER</p>
                  <br></br>
                  <p className="lato_400">
                    I was born in Kathmandu,Nepal and have been living here for
                    18 years.I studied Computer Science (Physics Major) in
                    Little Angel's College,Hattiban. From the age of 15 I
                    decided to be the FRONT END DEVELOPER.I managed to land my
                    job at the age of 16 for an Educational Organization with a
                    website for a secondary school of my home town.From that
                    time I have worked for 3 clients for their startups and
                    working on other projects.
                  </p>
                </article>
              </li>
            </ul>
          </div>
        </section>
        {/* ------------------------------------------------------  */}
        <section id="bestWorkSection">
          <div id="leftSection">
            <article>
              <h4 className="montserrat_300">LATEST WORKS</h4>
              <h1 className="playfair_300">MY BESTWORKS</h1>
              <hr></hr>
              <div id="blueRectForTwo"></div>
            </article>
          </div>
          <div id="rightSection">
            <Image src={two} alt=" number two potrait"></Image>
          </div>
        </section>
        {/* -----------------------------------------------------------------  */}
        <section id="projectSection">
          <div id="projectsDivision">
            <div className="card">
              <Image src={projectOne} alt="first project potrait"></Image>
              <h4 className="montserrat_300">LATEST WORKS</h4>
              <h1 className="playfair_300">MY BESTWORKS</h1>
              <hr></hr>
              <h3 className="montserrat_300">LATEST WORKS</h3>
            </div>
            <div className="card">
              <Image src={projectTwo} alt="first project potrait"></Image>
              <h4 className="montserrat_300">LATEST WORKS</h4>
              <h1 className="playfair_300">MY BESTWORKS</h1>
              <hr></hr>
              <h3 className="montserrat_300">LATEST WORKS</h3>
            </div>
            <div className="card">
              <Image src={projectThree} alt="first project potrait"></Image>
              <h4 className="montserrat_300">LATEST WORKS</h4>
              <h1 className="playfair_300">MY BESTWORKS</h1>
              <hr></hr>
              <h3 className="montserrat_300">LATEST WORKS</h3>
            </div>
          </div>
          <div id="viewAllBtnDivision">
            <button>VIEW ALL</button>
          </div>
        </section>

        {/* ----------------------------------------------------------------  */}
        <div id="contactMeSectionContainer" className="container_contact_me">
          <section id="contactMeSection">
            <div id="leftSection">
              <h3 className="playfair_italic_500">
                <i>Reach me out</i>
              </h3>
              <h1 className="playfair_400">
                <b>Contact me</b>
              </h1>
              <h2 className="montserrat_300">kshitiz.stha11@gmail.com</h2>
              <h4>7am - 11pm</h4>
            </div>
            <div id="rightSection">
              <Image src={mom} alt="stylish person potrait"></Image>
            </div>
          </section>
        </div>
        {/* -----------------------------------------------------------------------------------  */}

        <section id="BiographySection">
          <div id="biography--left-Division">
            <Image src={three} alt="number one potrait"></Image>
          </div>
          <div id="biography--right-Division">
            <ul>
              <li id="aboutme">
                <h4 className="montserrat_300">WORK SECTION</h4>
                <h1 className="playfair_300">REAL LIFE PROJECTS</h1>
                <hr></hr>
                <div className="blue-line-box"></div>
                <article>
                  <p className="lato_400">
                    Hey! My name is Kshitiz and I'm front-end Webdeveloper. I
                    develop high quality websites,webapp.I am expert in
                    HTML,CSS,SCSS,React,Javascript.I express
                    feelings,expressions,and quality through my websites.I find
                    my inspiration in diving into people's eyes,souls,during our
                    communication with each other.My works are full of
                    breathtaking quality and strongly near to perfection.
                  </p>
                </article>
              </li>
            </ul>
          </div>
        </section>

        <section id="statistics-section">
          <div className="statistics-card">
            <p className="number">35</p>
            <div className="blueVerticleLineContainer">
              <div className="blueVerticleLine"></div>
            </div>
            <div className="logoContainer">
              <Image src={statisticsLogoOne} alt="icon potrait"></Image>
            </div>
            <h2 className="poppins_300">TOTAL WEBSITES</h2>
          </div>
          <div className="statistics-card">
            <p className="number">4</p>
            <div className="blueVerticleLineContainer">
              <div className="blueVerticleLine"></div>
            </div>
            <div className="logoContainer">
              <Image src={statisticsLogoTwo} alt="icon potrait"></Image>
            </div>
            <h2 className="poppins_300">CLIENTS</h2>
          </div>
          <div className="statistics-card">
            <p className="number">153</p>
            <div className="blueVerticleLineContainer">
              <div className="blueVerticleLine"></div>
            </div>
            <div className="logoContainer">
              <Image src={statisticsLogoThree} alt="icon potrait"></Image>
            </div>
            <h2 className="poppins_300">WORKING HOURS</h2>
          </div>
          <div className="statistics-card">
            <p className="number">356</p>
            <div className="blueVerticleLineContainer">
              <div className="blueVerticleLine"></div>
            </div>
            <div className="logoContainer">
              <Image src={statisticsLogoFour} alt="icon potrait"></Image>
            </div>
            <h2 className="poppins_300">COFFEE</h2>
          </div>
        </section>

        <section id="bestWorkSection">
          <div id="leftSection">
            <article>
              <h4 className="montserrat_300">ABOUT ME</h4>
              <h1 className="playfair_300">INTERESTS</h1>
              <hr></hr>
              <div id="blueRectForTwo"></div>
            </article>
          </div>
          <div id="rightSection">
            <Image src={four} alt=" number two potrait"></Image>
          </div>
        </section>
        <section id="interestContainer">
          <div id="interestBlock">
            <div id="leftContainer">
              <Image src={bookPotrait} alt="book hold by single hand"></Image>
            </div>
            <div id="rightContainer">
              <h1 className="playfair_300">
                FROM TROUBLED DREAMS.
                <br />I FOUND MYSELF TRANSFORMED <br />
                IN MY PASSION INTO
              </h1>
            </div>
          </div>
        </section>
        <footer id="theme2_footer">
          <h3>GET IN TOUCH</h3>
          <h2 className="playfair_300">CONTACT ME</h2>
          <hr></hr>
          <div className="footer_rect"></div>
          <input></input>
          <div id="buttonContainer">
            <a href="https://www.facebook.com/ks.hitiz.735/">
              <button id="fbBtn" className="socialBtn"></button>
            </a>

            <a href="https://www.instagram.com/this_is_kshitiz/">
              <button id="instaBtn" className="socialBtn"></button>
            </a>
            {/* <h4>2021 Powered by:Crocoblock</h4>
      <h5>
        Inspired By @&nbsp;
        <a href="https://demo.crocoblock.com/rg/">demo.crocoblock.com</a>
      </h5>
      <h1>BUILT BY KSHTIZ</h1> */}
          </div>
        </footer>
      </main>
    </>
  );
};

export default Index;
