/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0';
import { Loading } from '@nextui-org/react';
import SideDrawer from 'components/DashboardLayout/SideDrawer/SideDrawer';
import Navbar from 'components/DashboardLayout/Navbar/Navbar';
import NoticeCard from 'components/NoticeCard/NoticeCard';

type Props = {
  children: JSX.Element;
};

// @ts-ignore
const DashboardLayout: React.FC<Props> = ({ children }) => {
  const { user, error, isLoading } = useUser();

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
        <NoticeCard />

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
