import "./footer.css";
import { footerLinks } from "../../constants/footer";

const Footer = () => {
    return (
        <div className="mp_footer-section mp_fc mp_font2">
            <p>Find me on:</p>
            <div className="mp-vertically-fc">
                {
                    footerLinks.map((link, index) =>
                        <a
                            className="mp_footer-link"
                            key={index}
                            href={link.link}>
                            {link.linkIcon}
                        </a>
                    )
                }
            </div>
            <p>2022 © Made By {"<Namrata Jain />"}</p>
        </div>
    );
}

export { Footer };