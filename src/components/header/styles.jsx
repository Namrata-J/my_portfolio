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

  @media screen and (max-width: 890px) {
    display: none;
  }
`;

export const ItemLink = styled.a`
  font-family: "Aboreto", cursive;
  font-weight: 600;
  font-size: 16px;
  color: #fff;
  letter-spacing: 2px;
  cursor: pointer;

  :hover {
    color: #dbdbdb;
  }
`;

// SIDEBAR MENU
export const SideBarMenu = styled.div`
  position: relative;

  @media screen and (min-width: 890px) {
    display: none;
  }
`;

export const ButtonMenu = styled.button`
  background: transparent;
  border: none;
  outline: none;

  cursor: pointer;

  :hover svg {
    fill: #d8d8d8;
  }
`;

export const ContentSideBar = styled.div`
  position: fixed;
  top: 100px;
  background: #1c2a38;
  right: ${({ open }) => (open ? 0 : "-100%")};

  max-width: 600px;
  width: 100%;
  height: calc(100vh - 100px);
  z-index: 9;
  transition: 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  padding: 50px 0;

  @media screen and (max-width: 700px) {
    max-width: initial;
    width: calc(100% - 60px);
  }
`;

export const ListItem = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 280px;
`;

export const ExitSideBarMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #00000088;
  backdrop-filter: blur(4px);
  z-index: 9;
`;
