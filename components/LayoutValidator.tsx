// ?MAking extra layer to avoid rendering of public pages before being redirected to DASHBOARD PAGE
import React from 'react';
import styled from 'styled-components';
import { useUser } from '@auth0/nextjs-auth0';
import { Loading } from '@nextui-org/react';
import { useRouter } from 'next/router';
import Layout from './Layout';
const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Block = styled.div`
  width: 85%;
`;

type Props = {
  children: JSX.Element;
};
// @ts-ignore
const LayoutValidator: React.FC<Props> = ({ children }) => {
  const { user, error, isLoading } = useUser();

  const router = useRouter();
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

  if (user) {
    router.push('/dashboard/home'); //!history will have "/about" only ,everything else will be removed from history,if you get back you will end in  chrome daily dev home page cozz, there is no history before "/about" */}
    return null;
  } else {
    return <Layout>{children}</Layout>;
  }
};

export default LayoutValidator;
