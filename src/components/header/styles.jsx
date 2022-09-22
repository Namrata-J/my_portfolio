import styled from "styled-components";

export const Header = styled.header`
  background: #283847;
  position: fixed;
  box-shadow: 0 -1px 8px #1c2a38;
  width: 100%;
  z-index: 99;
`;

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 100px;
  justify-content: space-between;
`;

export const ContentLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.div`
  width: 80px;
  height: 80px;
  background-image: url(${({ img }) => img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Title = styled.h1`
  font-family: "Aboreto", cursive;
  font-size: 22px;
  letter-spacing: 2px;
  color: #fff;
  margin-left: 20px;
`;

export const NavList = styled.nav`
  max-width: 500px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ItemLink = styled.a`
  font-family: "Aboreto", cursive;
  font-weight: 600;
  font-size: 18px;
  color: #fff;
  cursor: pointer;

  :hover {
    color: #dbdbdb;
  }
`;
