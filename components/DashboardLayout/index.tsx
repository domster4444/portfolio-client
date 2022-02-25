/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0';
import { Loading } from '@nextui-org/react';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { setLoggedInUser } from 'reduxSlice/loggedInUserSlice';

import SideDrawer from 'components/DashboardLayout/SideDrawer/SideDrawer';
import Navbar from 'components/DashboardLayout/Navbar/Navbar';
import NoticeCard from 'components/NoticeCard/NoticeCard';

import { axiosInstance } from 'lib/utilities/api/api';

type Props = {
  children: JSX.Element;
};

// @ts-ignore
const DashboardLayout: React.FC<Props> = ({ children }) => {
  const dispatch = useDispatch();
  const { user, error, isLoading } = useUser();
  //! Set loggedInUserState to redux store if user is logged in & auth0 returns user's data
  useEffect(() => {
    if (user) {
      console.log(user);
      console.log('🅰️uth 0 state from DashboardLayout', user);
      dispatch(setLoggedInUser(user));
    }
  }, [user]);

  //  ! CREATE ACCOUNT
  type auth0userCredentialPropType = {
    email: string | null | undefined;
    sub: string | null | undefined;
    nickName: string | null | undefined;
    picture: string | null | undefined;
  };

  let auth0UserCredential: auth0userCredentialPropType;
  if (user) {
    auth0UserCredential = {
      email: user.email,
      sub: user.sub,
      nickName: user.nickname,
      picture: user.picture,
    };
    console.log(
      '🔽data of auth0UserCredentaialVariable assigned from auth0',
      auth0UserCredential
    );
  }

  const createAccount: () => Promise<void> = async () => {
    axiosInstance
      .post('/api/v1/users/create', auth0UserCredential)

      .then((res: any) => {
        console.log('💚axios dashboardlayout', res.data);
      })
      .catch((error) => {
        console.log(' 🟠axios dashboardlayout error', error);
      });
  };

  const router = useRouter();
  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          height: '100vh',
          width: '100vw',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Loading size="xl" />
      </div>
    );
  }

  if (error) return <div>{error.message}</div>;
  if (user) {
    return (
      <>
        {/* @ts-ignore */}
        <NoticeCard createAccount={createAccount} />

        {/* //?making extra component for sidedrawer to avoid using useeffect using inside this component */}
        {/* //?using useeffect here & doing conditional rendering brings error so it's been done this way */}
        <SideDrawer />
        {/*//!BODY OF DASHBOARD  */}
        <section className="home-section">
          <Navbar />
          {children}
        </section>
        {/*//!BODY OF DASHBOARD  */}
      </>
    );
  } else if (!user) {
    router.back(); //!history will have "/about" only ,everything else will be removed from history,if you get back you will end in  chrome daily dev home page cozz, there is no history before "/about" */}
    return null;
  } else {
    return <div>SOMETHING WENT WRONG IN DASHBOARD Lay...</div>;
  }
};

export default DashboardLayout;
