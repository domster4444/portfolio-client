import styled from 'styled-components';
export const Nav = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  justify-content: space-between;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  background-color: white;
  z-index: 1;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 0;
    width: 100%;
  }
  .Nav__leftDivision {
    img {
      height: 45px !important;
      width: 45px !important;
    }
  }
  .Nav__rightDivision {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    font-size: 1.6rem;
  }
`;

export const Menu = styled.menu`
  padding: 0.7rem 0.6rem;
  border-radius: 0.85rem;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;
