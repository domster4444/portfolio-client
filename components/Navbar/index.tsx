/**
 * @params : expects props, menus={['About', 'Home']}
 * @returns : returns a Navbar component
 * @description : This is a Navbar component
 * @author : Kshitiz Shah
 */

import LogoImg from 'public/images/Logo.svg';
import React from 'react';
import Link from 'next/link';
import type { PropsTypes } from './types';
import Image from 'next/image';

import { Nav, Menu } from './style';
import Dropdown from './components/Dropdown';

const Navbar = (props: PropsTypes): JSX.Element => {
  const { logo, isLoggedIn, menus } = props;

  return (
    <Nav>
      <ul>
        <li className="Nav__leftDivision">
          <Image
            height="45"
            width="45"
            src={logo !== '' ? logo : LogoImg}
            alt="logo"
          />
        </li>
        <li className="Nav__rightDivision">
          {menus.map((menuItem: string, index: number) => (
            <React.Fragment key={index}>
              {menuItem === 'Login' && isLoggedIn === false ? (
                <Link passHref href="/api/auth/login">
                  <Menu>Login</Menu>
                </Link>
              ) : menuItem === 'Logout' && isLoggedIn === true ? (
                <Link passHref href="/api/auth/logout">
                  <Menu>Logout</Menu>
                </Link>
              ) : menuItem !== 'Login' && menuItem !== 'Logout' ? (
                <Link passHref href={menuItem.toLowerCase()}>
                  <Menu key={menuItem}>{menuItem}</Menu>
                </Link>
              ) : null}
            </React.Fragment>
          ))}

          <Menu
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '1.25rem',
              padding: '0.3rem 0.5rem',
            }}
          >
            <div
              style={{
                height: '1.75rem',
                width: '1.75rem',
                borderRadius: '0.25rem',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 128 128"
                style={{
                  height: '1.5rem',
                  width: '1.5rem',
                  fill: '#717171',
                  margin: '0 0.1rem',
                }}
              >
                <path
                  className="cls-1"
                  d="M63.98625,1.50086A62.49915,62.49915,0,1,0,126.51289,64,62.58552,62.58552,0,0,0,63.98625,1.50086Zm54.06517,58.37832H101.5408A95.38986,95.38986,0,0,0,96.59568,32.407h11.42851A53.85161,53.85161,0,0,1,118.05142,59.87918ZM100.7165,24.16538H93.464c-1.31878-2.99454-2.63739-5.68676-3.90117-7.99432A53.62127,53.62127,0,0,1,100.7165,24.16538ZM68.10707,9.96233a53.41726,53.41726,0,0,1,8.68129,1.37361c.05483.08233.10983.19233.16483.27465a77.06114,77.06114,0,0,1,7.39,12.55479H68.10707Zm0,22.4447h19.725a88.36906,88.36906,0,0,1,5.4671,27.47215H68.10707ZM51.01948,11.61059a1.676,1.676,0,0,0,.19233-.27465,52.61315,52.61315,0,0,1,8.65363-1.37361V24.16538h-16.236A79.50809,79.50809,0,0,1,51.01948,11.61059Zm8.846,20.79644V59.87918H34.701A88.40216,88.40216,0,0,1,40.14044,32.407Zm-21.45574-16.236c-1.23628,2.30757-2.55489,4.99978-3.8735,7.99432H27.2835A53.45007,53.45007,0,0,1,38.40969,16.17106ZM20.14081,32.1872a3.81491,3.81491,0,0,0,1.26361.21982h9.9724a95.42208,95.42208,0,0,0-4.91745,27.47215H9.94858A53.62586,53.62586,0,0,1,20.14081,32.1872Zm0,63.62559a53.62586,53.62586,0,0,1-10.19223-27.692H26.45937A95.42208,95.42208,0,0,0,31.37682,95.593h-9.9724A3.81491,3.81491,0,0,0,20.14081,95.8128Zm7.14269,8.02182h7.25269c1.31861,2.99454,2.63722,5.68676,3.8735,7.99432A53.45007,53.45007,0,0,1,27.2835,103.83462Zm32.58193,14.20305a52.61314,52.61314,0,0,1-8.65363-1.37361,1.676,1.676,0,0,0-.19233-.27465,79.50808,79.50808,0,0,1-7.39-12.55479h16.236Zm0-22.4447h-19.725A88.40216,88.40216,0,0,1,34.701,68.12082H59.86543Zm17.08776,20.79644c-.055.08233-.11.19233-.16483.27465a53.41725,53.41725,0,0,1-8.68129,1.37361V103.83462H84.34321A77.06114,77.06114,0,0,1,76.95319,116.38941ZM68.10707,95.593V68.12082H93.29915A88.36906,88.36906,0,0,1,87.83206,95.593Zm21.45574,16.236c1.26378-2.30757,2.58239-4.99978,3.90117-7.99432h7.25252A53.62127,53.62127,0,0,1,89.56282,111.82894Zm18.46137-16.236H96.59568a95.38986,95.38986,0,0,0,4.94512-27.47215h16.51062A53.85161,53.85161,0,0,1,108.02419,95.593Z"
                />
              </svg>
            </div>
          </Menu>

          <Dropdown />
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;
