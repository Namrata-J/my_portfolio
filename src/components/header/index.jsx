import { GiHamburgerMenu, GrClose } from "../../utils/icons";
import { headerList } from "../../constants/headerLinks";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";
import "./header.css";
import {
  ContentLeft,
  Header,
  LogoImage,
  Title,
  NavList,
  ItemLink,
  HeaderContent,
} from "./styles";
import { navList } from "./data/nav-list";
import { useNavigate } from "react-router-dom";
import { ContainerMaxWidth } from "../../utils/styles";

export const HeaderComponent = () => {
  const getTheLinkStyle = ({ isActive }) => {
    return isActive
      ? {
          color: "var(--secondary-color)",
        }
      : {
          color: "var(--gray-shade)",
        };
  };

  const [hamburgerPopUpDisplay, setHamburgerPopUpDisplay] = useState("none");

  const navigate = useNavigate();

  return (
    <Header>
      <ContainerMaxWidth>
        <HeaderContent>
          <ContentLeft>
            <LogoImage img={logo} alt="logo" />
            <Title>Namrata Jain</Title>
          </ContentLeft>
          <NavList>
            {navList.map((item, index) => (
              <ItemLink onClick={() => navigate(item.pageLink)} key={index}>
                {item.pageName}
              </ItemLink>
            ))}
          </NavList>

          <GiHamburgerMenu
            className="mp_hamburger-icon"
            onClick={() => setHamburgerPopUpDisplay("flex")}
          />
          <div
            className="mp_hamburger-popUp-container mp-vertically-fc"
            style={{ display: hamburgerPopUpDisplay }}
          >
            <div
              className="mp_hamburger-popUp-close-icon-container"
              onClick={() => setHamburgerPopUpDisplay("none")}
            >
              <GrClose className="mp_hamburger-popUp-close-icon" />
            </div>
            {headerList.map((item, index) => (
              <NavLink
                key={index}
                className="mp_header-link mp_font1"
                to={item.pageLink}
                style={getTheLinkStyle}
              >
                {item.pageName}
              </NavLink>
            ))}
          </div>
        </HeaderContent>
      </ContainerMaxWidth>
    </Header>
  );
};
