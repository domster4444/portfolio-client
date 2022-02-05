import { AppProps } from 'next/dist/shared/lib/router/router';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Block = styled.div`
  width: 85%;
`;

const Layout = ({ children }: any) => {
  return (
    <Container>
      <Block>{children}</Block>
    </Container>
  );
};

export default Layout;
