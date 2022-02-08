import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import DropDown from 'components/Menu/SideDrawerDrop';
import {
  Filter,
  CloseSquare,
  Home,
  User,
  Image,
  Play,
  Buy,
  Logout,
} from 'react-iconly';

const SideDrawer: React.FC = () => {
  const logoutSubmitHandler = () => {
    console.log('logout successfull');
  };

  useEffect(() => {
    function menuBtnChange() {
      //  @ts-ignore
      if (sidebar.classList.contains('open')) {
        //  @ts-ignore
        closeBtn.classList.replace('bx-menu', 'bx-menu-alt-right'); // replacing the iocns class
        //  @ts-ignore

        setTimeout(() => {
          for (let i = 0; i < linkName.length; i++) {
            linkName[i].classList.replace('hideName', 'showName');
          }
        }, 200);
      } else {
        //  @ts-ignore
        closeBtn.classList.replace('bx-menu-alt-right', 'bx-menu'); // replacing the iocns class
        //  @ts-ignore

        for (let i = 0; i < linkName.length; i++) {
          linkName[i].classList.replace('showName', 'hideName');
        }
      }
    }

    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('#btn');
    const linkName = document.querySelectorAll('.links_name');

    //  @ts-ignore
    closeBtn.addEventListener('click', () => {
      //  @ts-ignore
      sidebar.classList.toggle('open');
      menuBtnChange(); // calling the function(optional)
    });
  }, []);

  const [opened, setOpened] = useState(false);

  return (
    <>
      <div className="sidebar">
        <div className="logo-details">
          <i className="bx bxl-c-plus-plus icon" />
          <div className="logo_name">Portfolio</div>
          <i className="bx bx-menu" id="btn">
            <Filter
              // @ts-ignore
              id="hamburger--open"
              set="bold"
              primaryColor="#c4c4c4"
            />
            <CloseSquare
              // @ts-ignore
              id="hamburger--close"
              set="bold"
              primaryColor="white"
            />
          </i>
        </div>
        <ul className="nav-list">
          {/* <li>
          <i className="bx bx-search" />
          <input type="text" placeholder="Search..." />
          <span className="tooltip">Search</span>
        </li> */}
          <Link passHref href="/dashboard/home">
            <li className="dashboardLayout__sideMenus">
              <Home
                // @ts-ignore
                className="sideMenus__icon"
                set="bold"
                primaryColor="#c4c4c4"
              />
              <span className="links_name hideName">Dashboard</span>
            </li>
          </Link>
          <Link passHref href="/dashboard/profile">
            <li className="dashboardLayout__sideMenus">
              <User
                // @ts-ignore
                className="sideMenus__icon"
                set="bold"
                primaryColor="#c4c4c4"
              />
              <span className="links_name hideName">Profile</span>
            </li>
          </Link>
          <Link passHref href="/dashboard/theme">
            <li className="dashboardLayout__sideMenus">
              <Image
                // @ts-ignore
                className="sideMenus__icon"
                set="bold"
                primaryColor="#c4c4c4"
              />
              <span className="links_name hideName">Themes</span>
            </li>
          </Link>
          <Link passHref href="/dashboard/videoguidance">
            <li className="dashboardLayout__sideMenus">
              <Play
                // @ts-ignore
                className="sideMenus__icon"
                set="bold"
                primaryColor="#c4c4c4"
              />
              <span className="links_name hideName">Video Guidance</span>
            </li>
          </Link>
          <Link passHref href="/dashboard/payment">
            <li className="dashboardLayout__sideMenus">
              <Buy
                // @ts-ignore
                className="sideMenus__icon"
                set="bold"
                primaryColor="#c4c4c4"
              />
              <span className="links_name hideName">Payment</span>
            </li>
          </Link>

          <Link passHref href="/api/auth/logout">
            <li className="profile">
              <button
                style={{
                  right: '0',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  padding: '2rem',
                  position: 'absolute',
                }}
                type="button"
                onClick={logoutSubmitHandler}
              >
                <i className="bx  bx-log-out" id="log_out">
                  <Logout set="bold" primaryColor="#c4c4c4" />
                </i>
              </button>
            </li>
          </Link>
          {/* .,.,.,.,.,.,.,.,.,.,....................,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */}

          <li
            onClick={() => {
              setOpened(!opened);
            }}
          >
            <div className="changeColorToBlackOnHover">
              <i className="bx bx-grid-alt" />
              {/* <span className="links_name hideName">Setting</span> */}
              <DropDown opened={opened} />
            </div>
            <span className="tooltip">Setup Details</span>
          </li>
          {/* .,.,.,.,.,.,.,.,.,.,....................,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */}
        </ul>
      </div>
    </>
  );
};

export default SideDrawer;
