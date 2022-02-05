import React from 'react';
import type { NextPage } from 'next';

// components

//pages
import HomePage from './home';

const Home: NextPage = () => {
  // if (user) {
  //   return (
  //     <div>
  //       <Navbar
  //         isLoggedIn={user ? true : false}
  //         logo=""
  //         menus={['About', 'Home']}
  //       />
  //       Welcome {user.name}!
  //     </div>
  //   );
  // }
  return (
    <>
      <HomePage />
    </>
  );
};

export default Home;
