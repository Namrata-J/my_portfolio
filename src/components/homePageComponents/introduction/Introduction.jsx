import "./introduction.css";
import njPic from "../../../assets/njPic.jpg";
import { BsChevronDoubleDown } from "../../../utils/icons";

const Introduction = () => {
    return (
        <div className="mp_introduction-section mp-vertically-fc">
            <div className="mp_intro-text-section">
                <h4 className="mp_font2 mp-vertically-fc">
                    Hi! I'm Namrata Jain
                    <img
                        src="https://cdn0.iconfinder.com/data/icons/remoji-soft-1/512/emoji-hello-happy-smile.png"
                        width="40" />
                </h4>
                <p className="mp_font2">
                    I'm an Adv. Frontend Developer who's always curious to learn crazy stuffs and ready to grab hands-on experience by creating web apps.
                </p>
            </div>
            <div className="ms_intro-img-section">
                <img src={njPic} />
            </div>
            <BsChevronDoubleDown className="mp_swipe-down-icon" />
        </div>
    );
}

export { Introduction };