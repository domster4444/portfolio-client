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
          <Image src={logo !== '' ? logo : LogoImg} alt="logo" />
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
              }}
            >
              <i
                style={{ fontSize: '1.75rem', color: '#717171' }}
                className="bx bx-globe"
              />
            </div>
          </Menu>

          <Dropdown />
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;
