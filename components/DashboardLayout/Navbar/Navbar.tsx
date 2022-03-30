import React, { useEffect } from 'react';
import { globalConstant } from 'constant/constant';
import axios from 'axios';
import { Avatar, Text } from '@nextui-org/react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const logoutSubmitHandler = () => {
    console.log('logout successfull');
  };

  const defaultUserPhoto =
    'https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png';
  const [userPhoto, setUserPhoto] = React.useState<string>(defaultUserPhoto);
  const [userName, setUserName] = React.useState<string>('anonymous');

  useEffect(() => {
    const axiosinstanceI = axios.create({
      baseURL: globalConstant.baseURL,
    });

    axiosinstanceI.get('/api/auth/me').then(({ data }) => {
      //   console.log(data.email);
      //   console.log(data.email_verified);
      //   console.log(data.nickname);
      console.log(data.picture);
      setUserPhoto(data.picture);
      setUserName(data.nickname);
    });
  }, []);

  return (
    <>
      <header>
        <nav
          style={{
            padding: '1rem 1rem 0rem 0rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          {/* nav - avatar start */}

          <span className="dropDownI">
            <span className="wrapper">
              <span className="jumbotron">
                {/* <!-- Dropdown --> */}
                <label className="drop">
                  <input type="checkbox" id="target-drop-example" />
                  {/* <!-- Toggle Drop --> */}
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {/* //! user name */}
                    <Text size="2rem" style={{ margin: '0rem 0.5rem' }}>
                      {userName}
                    </Text>
                    {/* //! user avatar */}

                    <Avatar
                      style={{ cursor: 'pointer' }}
                      size="xl"
                      src={userPhoto}
                      zoomed
                      bordered
                      color="gradient"
                    />
                  </span>
                  {/* <!-- Fake button --> */}

                  {/* <!-- Items --> */}
                  <ul className="drop-items">
                    <Link passHref href="/dashboard/home">
                      <li className="item-drop">
                        <a
                          className="poppins_regular_500"
                          target="_blank"
                          href="https://codepen.io/robsonklein23"
                          rel="noreferrer"
                        >
                          Profile
                        </a>
                      </li>
                    </Link>

                    <Link passHref href="/dashboard/support">
                      <li className="item-drop">
                        <a
                          className="poppins_regular_500"
                          target="_blank"
                          href="https://codepen.io/robsonklein23"
                          rel="noreferrer"
                        >
                          Contact
                        </a>
                      </li>
                    </Link>
                    <Link passHref href="/api/auth/logout">
                      <li className="item-drop" onClick={logoutSubmitHandler}>
                        <a
                          className="poppins_regular_500"
                          target="_blank"
                          href="https://codepen.io/robsonklein23"
                          rel="noreferrer"
                        >
                          Logout
                        </a>
                      </li>
                    </Link>
                  </ul>

                  {/* <!-- Alternative to close dropdown with click out --> */}
                  <label
                    htmlFor="target-drop-example"
                    className="overlay-close"
                  ></label>
                </label>
                {/* <!-- END -- Dropdown --> */}
              </span>
            </span>
          </span>

          {/* nav - avatar end */}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
