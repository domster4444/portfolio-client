import styled from 'styled-components';
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;

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
