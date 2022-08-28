import { GiHamburgerMenu, GrClose } from "../../utils/icons";
import { headerList } from "../../constants/headerLinks";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";
import "./header.css";

const Header = () => {

    const getTheLinkStyle = ({ isActive }) => {
        return isActive ?
            {
                color: "var(--secondary-color)"
            } :
            {
                color: "var(--gray-shade)"
            }
    }

    const [hamburgerPopUpDisplay, setHamburgerPopUpDisplay] = useState("none");

    return (
        <div className="mp_header mp-vertically-fc">
            <div className="mp_header-subcontainer1 mp-vertically-fc">
                <img className="mp_header-logo" src={logo} alt="logo" />
                <h4 className="mp_font1">Namrata Jain</h4>
            </div>
            <div className="mp_header-subcontainer2 mp-vertically-fc">
                {
                    headerList.map((item, index) =>
                        <NavLink
                            key={index}
                            className="mp_header-link mp_font1"
                            to={item.pageLink}
                            style={getTheLinkStyle}
                        >
                            {item.pageName}
                        </NavLink>
                    )
                }
            </div>
            <GiHamburgerMenu
                className="mp_hamburger-icon"
                onClick={() => setHamburgerPopUpDisplay("flex")} />
            <div
                className="mp_hamburger-popUp-container mp-vertically-fc"
                style={{ display: hamburgerPopUpDisplay }}>
                <div
                    className="mp_hamburger-popUp-close-icon-container"
                    onClick={() => setHamburgerPopUpDisplay("none")}>
                    <GrClose className="mp_hamburger-popUp-close-icon" />
                </div>
                {
                    headerList.map((item, index) =>
                        <NavLink
                            key={index}
                            className="mp_header-link mp_font1"
                            to={item.pageLink}
                            style={getTheLinkStyle}
                        >
                            {item.pageName}
                        </NavLink>
                    )
                }
            </div>
        </div>
    );
}

export { Header };