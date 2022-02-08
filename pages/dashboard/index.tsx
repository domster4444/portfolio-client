import React, { useEffect, useState } from 'react';
import Link from 'next/link';
// import Link from 'next/link';
import DropDown from 'components/Menu/SideDrawerDrop';
import { Filter, Home, User, Image, Play, Buy, Logout } from 'react-iconly';

const Dashboard = () => {
  const logoutSubmitHandler = () => {
    alert('logout');
  };
  useEffect(() => {
    function menuBtnChange() {
      //  @ts-ignore
      if (sidebar.classList.contains('open')) {
        //  @ts-ignore
        closeBtn.classList.replace('bx-menu', 'bx-menu-alt-right'); // replacing the iocns class
      } else {
        //  @ts-ignore
        closeBtn.classList.replace('bx-menu-alt-right', 'bx-menu'); // replacing the iocns class
      }
    }

    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('#btn');
    //  _____________COMMENTED FOR SEARCH
    // const searchBtn = document.querySelector('.bx-search');
    //  _____________COMMENTED FOR SEARCH

    //  @ts-ignore
    closeBtn.addEventListener('click', () => {
      //  @ts-ignore
      sidebar.classList.toggle('open');
      menuBtnChange(); // calling the function(optional)
    });

    //  _____________COMMENTED FOR SEARCH
    // //  @ts-ignore
    // searchBtn.addEventListener('click', () => {
    //   // Sidebar open when you click on the search iocn
    //   //  @ts-ignore
    //   sidebar.classList.toggle('open');
    //   menuBtnChange(); // calling the function(optional)
    // });
    //  _____________COMMENTED FOR SEARCH

    // following are the code to change sidebar button(optional)
  }, []);

  const [opened, setOpened] = useState(false);

  return (
    <>
      <div className="sidebar">
        <div className="logo-details">
          <i className="bx bxl-c-plus-plus icon" />
          <div className="logo_name">DeerPortfolio</div>
          <i className="bx bx-menu" id="btn">
            <Filter set="bold" primaryColor="#c4c4c4" />
          </i>
        </div>
        <ul className="nav-list">
          {/* <li>
          <i className="bx bx-search" />
          <input type="text" placeholder="Search..." />
          <span className="tooltip">Search</span>
        </li> */}
          <li>
            <a href="/welcome">
              <i
                className="bx bx-pie-chart-alt-2"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Home set="bold" primaryColor="#c4c4c4" />
              </i>

              <span className="links_name">Dashboard</span>
            </a>
            <span className="tooltip">Dashboard</span>
          </li>

          <li>
            {/* // eslint-disable-next-line react/jsx-no-undef */}
            <a href="/profile">
              <i
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                className="bx  bx-user"
              >
                <User set="bold" primaryColor="#c4c4c4" />
              </i>
              <span className="links_name">Profile</span>
            </a>
            <span className="tooltip">Profile</span>
          </li>
          <li>
            <a href="/themes">
              <i
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                className="bx  bx-folder"
              >
                <Image set="bold" primaryColor="#c4c4c4" />
              </i>
              <span className="links_name">Themes</span>
            </a>
            <span className="tooltip">Themes</span>
          </li>
          {/* <li>
          <Link  href="/details">
            <i style={{display:'flex',alignItems:'center',justifyContent:'center'}} className="bx  bx-grid-alt" />
            <span className="links_name">My Details</span>
          </Link>
          <span className="tooltip">Details</span>
        </li> */}
          <li>
            <a href="/videoguidance">
              <i
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                className="bx  bx-chat"
              >
                <Play set="bold" primaryColor="#c4c4c4" />
              </i>
              <span className="links_name">Video Guidance</span>
            </a>
            <span className="tooltip">Guidance</span>
          </li>
          <li>
            <a href="/payment">
              <i
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                className="bx  bx-cart-alt"
              >
                <Buy set="bold" primaryColor="#c4c4c4" />
              </i>
              <span className="links_name">Payment</span>
            </a>
            <span className="tooltip">Order</span>
          </li>
          {/* <li>
          <Link  href="https://google.com">
            <i style={{display:'flex',alignItems:'center',justifyContent:'center'}} className="bx  bx-heart" />
            <span className="links_name">Saved</span>
          </Link>
          <span className="tooltip">Saved</span>
        </li> */}
          {/* <li>
          <Link  href="https://google.com">
            <i style={{display:'flex',alignItems:'center',justifyContent:'center'}} className="bx  bx-cog" />
            <span className="links_name">Setting</span>
          </Link>
          <span className="tooltip">Setting</span>
        </li> */}
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
          {/* .,.,.,.,.,.,.,.,.,.,....................,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */}

          <li
            onClick={() => {
              setOpened(!opened);
            }}
          >
            <div className="changeColorToBlackOnHover">
              <i className="bx bx-grid-alt" />
              {/* <span className="links_name">Setting</span> */}
              <DropDown opened={opened} />
            </div>
            <span className="tooltip">Setup Details</span>
          </li>
          {/* .,.,.,.,.,.,.,.,.,.,....................,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */}
        </ul>
      </div>

      <section className="home-section">hello</section>
    </>
  );
};

export default Dashboard;
