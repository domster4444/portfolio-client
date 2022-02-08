import React from 'react';
import styled from 'styled-components';

import { useUser } from '@auth0/nextjs-auth0';
import { Loading } from '@nextui-org/react';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import { useRouter } from 'next/router';


const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Block = styled.div`
  width: 85%;
`;

const Layout: React.FC = ({ children }: any) => {
  const { user, error, isLoading } = useUser();


 const router = useRouter();
if(user){
      router.replace('/dashboard'); //!history will have "/about" only ,everything else will be removed from history,if you get back you will end in  chrome daily dev home page cozz, there is no history before "/about" */}
}  


  if (error) return <div>{error.message}</div>;
  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          position: 'absolute',
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
  if(user){
  }
  return (
    <Container>
      <Block>
        <Navbar
          isLoggedIn={user ? true : false}
          logo=""
          menus={['About', 'Home', 'Logout']}
        />

        {children}
      </Block>
      <Footer />
    </Container>
  );
};

export default Layout;
