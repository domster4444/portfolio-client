import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Avatar, Text } from '@nextui-org/react';

const Navbar: React.FC = () => {
  const defaultUserPhoto =
    "'https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png'";
  const [userPhoto, setUserPhoto] = React.useState<string>(defaultUserPhoto);
  const [userName, setUserName] = React.useState<string>('anonymous');

  const axiosinstance = axios.create({
    baseURL: 'https://www.portfoliosite.me',
  });

  function getUserPhoto() {
    axiosinstance.get('/api/auth/me').then(({ data }) => {
      //   console.log(data.email);
      //   console.log(data.email_verified);
      //   console.log(data.nickname);
      //   console.log(data.picture);
      setUserPhoto(data.picture);
      setUserName(data.nickname);
    });
  }

  useEffect(() => {
    getUserPhoto();
  }, []);

  return (
    <>
      <header>
        <nav
          style={{
            padding: '0.5rem 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <Text size="1.25rem" style={{ margin: '0rem 0.5rem' }}>
            {userName}
          </Text>
          <Avatar
            style={{ cursor: 'pointer' }}
            size="lg"
            src={userPhoto}
            zoomed
            bordered
            color="gradient"
          />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
