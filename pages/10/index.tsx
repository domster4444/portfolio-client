/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const Index = () => {
  return (
    <div id="tenMainPage">
      <div className="header-container">
        <div className="header-details-container">
          <div className="header-details">
            <h1>JOHN SMITH</h1>
            <h2>GRAPHIC DESIGNER</h2>
            <p>
              <span>I'm John smith</span> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dicta corrupti ducimus maiores incidunt, quas
              consequuntur non ratione harum quasi necessitatibus molestias
              obcaecati assumenda optio inventore vel magnam illum aliquam sit?
            </p>
          </div>
          <div className="main-skill-container">
            <div className="main-skill">
              <div className="icon-box">
                <i className="fas fa-crop-alt"></i>
              </div>
              <div className="main-skill-item">
                <h4>PHOTOSHOP</h4>
                <h5>65%</h5>
              </div>
            </div>
            <div className="main-skill">
              <div className="icon-box">
                <i className="fas fa-laptop"></i>
              </div>
              <div className="main-skill-item">
                <h4>ART DESIGN</h4>
                <h5>35%</h5>
              </div>
            </div>
            <div className="main-skill">
              <div className="icon-box">
                <i className="fas fa-camera-retro"></i>
              </div>
              <div className="main-skill-item">
                <h4>PHOTOGRAPHY</h4>
                <h5>45%</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="img-box">
          <img
            src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div className="body-container">
        <div className="side-section">
          <div className="followme">
            <h3 id="followme">FOLLOW ME</h3>
            <hr />
            <a href="#">
              <div className="icon-box-small">
                <i className="fab fa-behance"></i>
              </div>{' '}
              behance.net/username
            </a>
            <a href="#">
              <div className="icon-box-small">
                <i className="fab fa-linkedin-in"></i>
              </div>
              linkedin.com/username
            </a>
          </div>
          <div className="contact">
            <h3 id="contact">CONTACT</h3>
            <hr />
            <a href="#">
              <div className="icon-box-small">
                <i className="fas fa-phone-alt"></i>
              </div>{' '}
              +94 77 0123456
            </a>
            <a href="#">
              <div className="icon-box-small">
                <i className="fas fa-envelope"></i>
              </div>{' '}
              robertsmith@gmail.com
            </a>
            <a href="#">
              <div className="icon-box-small">
                <i className="fas fa-globe-asia"></i>
              </div>{' '}
              www.websitename.com
            </a>
            <a href="#">
              <div className="icon-box-small">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              Ur Street name 12/B, <br />
              ABC City, <br /> United Kingdom
            </a>
          </div>
          <div className="skills">
            <h3>SKILLS</h3>
            <hr />
            <div className="skill">
              <p>Communication</p>
              <div className="skill-progress-cover">
                <div id="communication"></div>
              </div>
            </div>
            <div className="skill">
              <p>Creativity</p>
              <div className="skill-progress-cover">
                <div id="creativity"></div>
              </div>
            </div>
            <div className="skill">
              <p>Teamwork</p>
              <div className="skill-progress-cover">
                <div id="teamwork"></div>
              </div>
            </div>
            <div className="skill">
              <p>Organization</p>
              <div className="skill-progress-cover">
                <div id="organization"></div>
              </div>
            </div>
          </div>
          <div className="hobbies">
            <h3>HOBBIES</h3>
            <hr />
            <div className="hobby">
              <p>Road Trips</p>
              <div className="icon-box">
                <i className="fas fa-motorcycle"></i>
              </div>
            </div>
            <div className="hobby">
              <p>Photography</p>
              <div className="icon-box">
                <i className="fas fa-camera-retro"></i>
              </div>
            </div>
            <div className="hobby">
              <p>Football</p>
              <div className="icon-box">
                <i className="fas fa-futbol"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="main-section">
          <div className="educations">
            <h3 id="education">EDUCATION</h3>
            <hr />
            <div className="education">
              <div className="year">2020/2022</div>
              <div className="education-content">
                <p className="title">Master of Science</p>
                <p>Faculty of Engineering & Design, University of Totonto</p>
              </div>
            </div>
            <div className="education">
              <div className="year">2016/2020</div>
              <div className="education-content">
                <p className="title">Master of Science</p>
                <p>Faculty of Engineering & Design, University of Totonto</p>
              </div>
            </div>
          </div>
          <div className="experiences">
            <h3>EXPERIENCES</h3>
            <hr />
            <div className="experience">
              <h4>Senior Graphic Designer</h4>
              <h5>Company | www.company.com</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
                dignissimos delectus sit. Nobis accusamus reiciendis ducimus
                architecto sint, id necessitatibus?
              </p>
              <p className="date">01.2020 - present</p>
            </div>
            <div className="experience">
              <h4>Junior Graphic Designer</h4>
              <h5>Company | www.company.com</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
                dignissimos delectus sit. Nobis accusamus reiciendis ducimus
                architecto sint, id necessitatibus?
              </p>
              <p className="date">01.2018 - 01.2020</p>
            </div>
            <div className="experience">
              <h4>Trainee Graphic Designer</h4>
              <h5>Company | www.company.com</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
                dignissimos delectus sit. Nobis accusamus reiciendis ducimus
                architecto sint, id necessitatibus?
              </p>
              <p className="date">01.2016 - 01.2018</p>
            </div>
          </div>
          <div className="interests-languages">
            <div className="interests">
              <h3 id="interests">INTERESTS</h3>
              <hr />
              <div className="interest-container">
                <div className="interest">
                  <div className="icon-box">
                    <i className="fas fa-pencil-ruler"></i>
                  </div>
                  <p>
                    Infographic <br />
                    Design
                  </p>
                </div>
                <div className="interest">
                  <div className="icon-box">
                    <i className="fas fa-spa"></i>
                  </div>
                  <p>
                    Ecology <br />
                    Design
                  </p>
                </div>
                <div className="interest">
                  <div className="icon-box">
                    <i className="fas fa-plane"></i>
                  </div>
                  <p>Traveling</p>
                </div>
              </div>
            </div>
            <div className="languages">
              <h3 id="languages">LANGUAGES</h3>
              <hr />
              <div className="language-container">
                <div className="language">
                  <p>English</p>
                  <p className="icons">
                    <i className="fas fa-circle"></i>
                    <i className="fas fa-circle"></i>
                    <i className="fas fa-circle"></i>
                    <i className="fas fa-circle"></i>
                    <i className="far fa-circle"></i>
                  </p>
                </div>
                <div className="language">
                  <p>Spanish</p>
                  <p className="icons">
                    <i className="fas fa-circle"></i>
                    <i className="fas fa-circle"></i>
                    <i className="fas fa-circle"></i>
                    <i className="far fa-circle"></i>
                    <i className="far fa-circle"></i>
                  </p>
                </div>
                <div className="language">
                  <p>French</p>
                  <p className="icons">
                    <i className="fas fa-circle"></i>
                    <i className="fas fa-circle"></i>
                    <i className="fas fa-circle"></i>
                    <i className="far fa-circle"></i>
                    <i className="far fa-circle"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
