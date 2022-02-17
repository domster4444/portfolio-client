import React from 'react';
import { Button } from '@nextui-org/react';
import { Heart, Work } from 'react-iconly';
import Image from 'next/image';
import member1 from 'public/images/members/member1.jpg';

const index: React.FC = () => {
  return (
    <div className="teamCarousel">
      <div className="container">
        <input type="radio" name="dot" id="one" />
        <input type="radio" name="dot" id="two" />
        <div className="main-card">
          <div className="cards">
            {/* //! card - 1 */}
            <div className="card">
              <div className="content">
                <div className="img">
                  <Image
                    height={124}
                    width={124}
                    src={member1}
                    alt="team members"
                  />
                  -
                </div>
                <div className="details">
                  <div className="name poppins_medium_500 ">Nicole Lewis</div>
                  <div className="job poppins_regular_400">Web Devloper</div>
                </div>
                <div className="media-icons">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>

                <Button
                  size="xl"
                  shadow
                  style={{ margin: '0.45rem 0rem' }}
                  icon={
                    <Heart
                      //  @ts-ignore
                      fill="currentColor"
                      filled
                    />
                  }
                  color="error"
                  className="poppins_regular_400"
                >
                  View Profile
                </Button>
                <Button
                  size="xl"
                  shadow
                  icon={
                    <Work
                      //  @ts-ignore
                      fill="currentColor"
                      filled
                    />
                  }
                  color="secondary"
                  className="poppins_regular_400"
                >
                  Hire Me
                </Button>
              </div>
            </div>
            {/* //! card - 2 */}

            <div className="card">
              <div className="content">
                <div className="img">
                  <Image
                    height={124}
                    width={124}
                    src={member1}
                    alt="team members"
                  />
                  -
                </div>
                <div className="details">
                  <div className="name poppins_medium_500 ">Nicole Lewis</div>
                  <div className="job poppins_regular_400">Web Devloper</div>
                </div>
                <div className="media-icons">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>

                <Button
                  size="xl"
                  shadow
                  style={{ margin: '0.45rem 0rem' }}
                  icon={
                    <Heart
                      //  @ts-ignore
                      fill="currentColor"
                      filled
                    />
                  }
                  color="error"
                  className="poppins_regular_400"
                >
                  View Profile
                </Button>
                <Button
                  size="xl"
                  shadow
                  icon={
                    <Work
                      //  @ts-ignore
                      fill="currentColor"
                      filled
                    />
                  }
                  color="secondary"
                  className="poppins_regular_400"
                >
                  Hire Me
                </Button>
              </div>
            </div>

            <div className="card">
              <div className="content">
                <div className="img">
                  <Image
                    height={124}
                    width={124}
                    src={member1}
                    alt="team members"
                  />
                  -
                </div>
                <div className="details">
                  <div className="name poppins_medium_500 ">Nicole Lewis</div>
                  <div className="job poppins_regular_400">Web Devloper</div>
                </div>
                <div className="media-icons">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>

                <Button
                  size="xl"
                  shadow
                  style={{ margin: '0.45rem 0rem' }}
                  icon={
                    <Heart
                      //  @ts-ignore
                      fill="currentColor"
                      filled
                    />
                  }
                  color="error"
                  className="poppins_regular_400"
                >
                  View Profile
                </Button>
                <Button
                  size="xl"
                  shadow
                  icon={
                    <Work
                      //  @ts-ignore
                      fill="currentColor"
                      filled
                    />
                  }
                  color="secondary"
                  className="poppins_regular_400"
                >
                  Hire Me
                </Button>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card">
              <div className="content">
                <div className="img">
                  <Image
                    height={124}
                    width={124}
                    src={member1}
                    alt="team members"
                  />
                  -
                </div>
                <div className="details">
                  <div className="name poppins_medium_500 ">Nicole Lewis</div>
                  <div className="job poppins_regular_400">Web Devloper</div>
                </div>
                <div className="media-icons">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>

                <Button
                  size="xl"
                  shadow
                  style={{ margin: '0.45rem 0rem' }}
                  icon={
                    <Heart
                      //  @ts-ignore
                      fill="currentColor"
                      filled
                    />
                  }
                  color="error"
                  className="poppins_regular_400"
                >
                  View Profile
                </Button>
                <Button
                  size="xl"
                  shadow
                  icon={
                    <Work
                      //  @ts-ignore
                      fill="currentColor"
                      filled
                    />
                  }
                  color="secondary"
                  className="poppins_regular_400"
                >
                  Hire Me
                </Button>
              </div>
            </div>
            {/* //!Card */}
            <div className="card">
              <div className="content">
                <div className="img">
                  <Image
                    height={124}
                    width={124}
                    src={member1}
                    alt="team members"
                  />
                  -
                </div>
                <div className="details">
                  <div className="name poppins_medium_500 ">Nicole Lewis</div>
                  <div className="job poppins_regular_400">Web Devloper</div>
                </div>
                <div className="media-icons">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>

                <Button
                  size="xl"
                  shadow
                  style={{ margin: '0.45rem 0rem' }}
                  icon={
                    <Heart
                      //  @ts-ignore
                      fill="currentColor"
                      filled
                    />
                  }
                  color="error"
                  className="poppins_regular_400"
                >
                  View Profile
                </Button>
                <Button
                  size="xl"
                  shadow
                  icon={
                    <Work
                      //  @ts-ignore
                      fill="currentColor"
                      filled
                    />
                  }
                  color="secondary"
                  className="poppins_regular_400"
                >
                  Hire Me
                </Button>
              </div>
            </div>
            {/* //!Card */}

            <div className="card">
              <div className="content">
                <div className="img">
                  <Image
                    height={124}
                    width={124}
                    src={member1}
                    alt="team members"
                  />
                  -
                </div>
                <div className="details">
                  <div className="name poppins_medium_500 ">Nicole Lewis</div>
                  <div className="job poppins_regular_400">Web Devloper</div>
                </div>
                <div className="media-icons">
                  <a
                    href="https://facebook.com"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon facebook grayscale"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://twitter.com"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon twitter grayscale"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>

                  <a
                    href="https://instagram.com"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon instagram grayscale"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://linkedin.com"
                    aria-label="Linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon youtube grayscale"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>

                <Button
                  size="xl"
                  shadow
                  style={{ margin: '0.45rem 0rem' }}
                  icon={
                    <Heart
                      //  @ts-ignore
                      fill="currentColor"
                      filled
                    />
                  }
                  color="error"
                  className="poppins_regular_400"
                >
                  View Profile
                </Button>
                <Button
                  size="xl"
                  shadow
                  icon={
                    <Work
                      //  @ts-ignore
                      fill="currentColor"
                      filled
                    />
                  }
                  color="secondary"
                  className="poppins_regular_400"
                >
                  Hire Me
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="button">
          <label htmlFor="one" className="active one">
            <span style={{ color: 'transparent' }}>first page</span>
          </label>
          <label htmlFor="two" className="two">
            <span style={{ color: 'transparent' }}>second page</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default index;
