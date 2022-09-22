import { GiHamburgerMenu } from "../../utils/icons";
import { headerList } from "../../constants/headerLinks";
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
  SideBarMenu,
  ButtonMenu,
  ContentSideBar,
  ExitSideBarMenu,
  ListItem,
} from "./styles";
import { navList } from "./data/nav-list";
import { useNavigate } from "react-router-dom";
import { ContainerMaxWidth } from "../../utils/styles";
import { MdOutlineClose } from "react-icons/md";

const dIcon = { size: 35, color: "#fff" };

export const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
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

            <SideBarMenu>
              <ButtonMenu onClick={() => setIsOpen(!isOpen)} type="button">
                {isOpen ? (
                  <MdOutlineClose {...dIcon} />
                ) : (
                  <GiHamburgerMenu {...dIcon} />
                )}
              </ButtonMenu>

              <ContentSideBar open={isOpen}>
                <ListItem>
                  {headerList.map((item, index) => (
                    <ItemLink
                      className="sidebar"
                      onClick={() => {
                        navigate(item.pageLink);
                        setIsOpen(false);
                      }}
                      key={index}
                    >
                      {item.pageName}
                    </ItemLink>
                  ))}
                </ListItem>
              </ContentSideBar>
            </SideBarMenu>
          </HeaderContent>
        </ContainerMaxWidth>
      </Header>
      {isOpen && <ExitSideBarMenu onClick={() => setIsOpen(false)} />}
    </>
  );
};
