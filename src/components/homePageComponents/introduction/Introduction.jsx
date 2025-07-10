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
            width="40"
            alt="img"
          />
        </h4>
        <p className="mp_font2">
          I'm a Software engineer with hands-on experience on market-leading
          technologies. I have professionally worked on android, IOS, and web
          development. I am currently serving at PensionBox.
        </p>
        <a
          rel="noreferrer"
          href="https://flowcv.com/resume/97swshms4s"
          target="_blank"
        >
          <button className="mp_font2">My Resume</button>
        </a>
      </div>
      <div className="ms_intro-img-section">
        <img src={njPic} alt="pic" />
      </div>
      <BsChevronDoubleDown className="mp_swipe-down-icon" />
    </div>
  );
};

export { Introduction };
