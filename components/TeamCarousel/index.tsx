import React from 'react';
import { Button } from '@nextui-org/react';
import { Heart, Work } from 'react-iconly';

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
                  <img
                    src="https://scontent.fktm1-2.fna.fbcdn.net/v/t1.15752-9/272773064_627681405010414_1657976025951488449_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_ohc=t7jzEGz0VNYAX8ijfyn&_nc_ht=scontent.fktm1-2.fna&oh=03_AVJYIO5SucH-lRhvLFILRILPbc10d3I0Lxk8pwyms3HeVQ&oe=6226257D"
                    alt=""
                  />
                  -
                </div>
                <div className="details">
                  <div className="name">Nicole Lewis</div>
                  <div className="job">Web Devloper</div>
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
                >
                  View Profile
                </Button>
                <Button
                  shadow
                  icon={
                    <Work
                      //  @ts-ignore
                      fill="currentColor"
                      filled
                    />
                  }
                  color="secondary"
                >
                  Hire Me
                </Button>
              </div>
            </div>
            {/* //! card - 2 */}

            <div className="card">
              <div className="content">
                <div className="img">
                  <img
                    src="https://scontent.fktm1-2.fna.fbcdn.net/v/t1.15752-9/272773064_627681405010414_1657976025951488449_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_ohc=t7jzEGz0VNYAX8ijfyn&_nc_ht=scontent.fktm1-2.fna&oh=03_AVJYIO5SucH-lRhvLFILRILPbc10d3I0Lxk8pwyms3HeVQ&oe=6226257D"
                    alt=""
                  />
                  -
                </div>
                <div className="details">
                  <div className="name">Nicole Lewis</div>
                  <div className="job">Web Devloper</div>
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
                >
                  View Profile
                </Button>
                <Button
                  shadow
                  icon={
                    <Work
                      //  @ts-ignore
                      fill="currentColor"
                      filled
                    />
                  }
                  color="secondary"
                >
                  Hire Me
                </Button>
              </div>
            </div>

            <div className="card">
              <div className="content">
                <div className="img">
                  <img
                    src="https://scontent.fktm1-2.fna.fbcdn.net/v/t1.15752-9/272773064_627681405010414_1657976025951488449_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_ohc=t7jzEGz0VNYAX8ijfyn&_nc_ht=scontent.fktm1-2.fna&oh=03_AVJYIO5SucH-lRhvLFILRILPbc10d3I0Lxk8pwyms3HeVQ&oe=6226257D"
                    alt=""
                  />
                  -
                </div>
                <div className="details">
                  <div className="name">Nicole Lewis</div>
                  <div className="job">Web Devloper</div>
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
                >
                  View Profile
                </Button>
                <Button
                  shadow
                  icon={
                    <Work
                      //  @ts-ignore
                      fill="currentColor"
                      filled
                    />
                  }
                  color="secondary"
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
                  <img
                    src="https://scontent.fktm1-2.fna.fbcdn.net/v/t1.15752-9/272773064_627681405010414_1657976025951488449_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_ohc=t7jzEGz0VNYAX8ijfyn&_nc_ht=scontent.fktm1-2.fna&oh=03_AVJYIO5SucH-lRhvLFILRILPbc10d3I0Lxk8pwyms3HeVQ&oe=6226257D"
                    alt=""
                  />
                  -
                </div>
                <div className="details">
                  <div className="name">Nicole Lewis</div>
                  <div className="job">Web Devloper</div>
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
                >
                  View Profile
                </Button>
                <Button
                  shadow
                  icon={
                    <Work
                      //  @ts-ignore
                      fill="currentColor"
                      filled
                    />
                  }
                  color="secondary"
                >
                  Hire Me
                </Button>
              </div>
            </div>
            {/* //!Card */}
            <div className="card">
              <div className="content">
                <div className="img">
                  <img
                    src="https://scontent.fktm1-2.fna.fbcdn.net/v/t1.15752-9/272773064_627681405010414_1657976025951488449_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_ohc=t7jzEGz0VNYAX8ijfyn&_nc_ht=scontent.fktm1-2.fna&oh=03_AVJYIO5SucH-lRhvLFILRILPbc10d3I0Lxk8pwyms3HeVQ&oe=6226257D"
                    alt=""
                  />
                  -
                </div>
                <div className="details">
                  <div className="name">Nicole Lewis</div>
                  <div className="job">Web Devloper</div>
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
                >
                  View Profile
                </Button>
                <Button
                  shadow
                  icon={
                    <Work
                      //  @ts-ignore
                      fill="currentColor"
                      filled
                    />
                  }
                  color="secondary"
                >
                  Hire Me
                </Button>
              </div>
            </div>
            {/* //!Card */}

            <div className="card">
              <div className="content">
                <div className="img">
                  <img
                    src="https://scontent.fktm1-2.fna.fbcdn.net/v/t1.15752-9/272773064_627681405010414_1657976025951488449_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_ohc=t7jzEGz0VNYAX8ijfyn&_nc_ht=scontent.fktm1-2.fna&oh=03_AVJYIO5SucH-lRhvLFILRILPbc10d3I0Lxk8pwyms3HeVQ&oe=6226257D"
                    alt=""
                  />
                  -
                </div>
                <div className="details">
                  <div className="name">Nicole Lewis</div>
                  <div className="job">Web Devloper</div>
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
                >
                  View Profile
                </Button>
                <Button
                  shadow
                  icon={
                    <Work
                      //  @ts-ignore
                      fill="currentColor"
                      filled
                    />
                  }
                  color="secondary"
                >
                  Hire Me
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="button">
          <label htmlFor="one" className="active one"></label>
          <label htmlFor="two" className="two"></label>
        </div>
      </div>
    </div>
  );
};

export default index;
