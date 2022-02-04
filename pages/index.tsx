import type { NextPage } from 'next';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';

import styled from 'styled-components';

const PrimaryButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const Home: NextPage = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        Welcome {user.name}! <Link href="/api/auth/logout">Logout</Link>
      </div>
    );
  }

  return (
    <Link href="/api/auth/login">
      <PrimaryButton>Login</PrimaryButton>
    </Link>
  );
};

export default Home;
