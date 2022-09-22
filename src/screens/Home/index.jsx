import * as homePageComp from "../../components/";
import { BsChevronDoubleDown } from "react-icons/bs";
import njPic from '../../assets/njPic.jpg'
import { Container } from "./styles";

export const HomePage = () => {
  return (
    <Container>
        <div className="mp_introduction-section mp-vertically-fc">
          <div className="mp_intro-text-section">
            <h4 className="mp_font2 mp-vertically-fc">Hi! I'm Namrata Jain</h4>
              <img src="https://cdn0.iconfinder.com/data/icons/remoji-soft-1/512/emoji-hello-happy-smile.png" width="40" alt="img" />
              <p className="mp_font2">
                  I'm an Adv. Frontend Developer who's always curious to learn crazy stuffs and ready to grab hands-on experience by creating web apps. Besides, i also love to do painting and artwork related stuffs in my spare time.
              </p>
              <a
                  rel="noreferrer"
                  href="https://drive.google.com/file/d/1qp2T-MQV_go7KzF1xAfrkuL-S7V5MU_b/view?usp=sharing"
                  target="_blank">
                  <button className="mp_font2">
                      My Resume
                  </button>
              </a>
          </div>
          <div className="ms_intro-img-section">
              <img src={njPic} alt="pic" />
          </div>
          <BsChevronDoubleDown className="mp_swipe-down-icon" />
        </div>
        <homePageComp.Technologies />
        <homePageComp.Projects />
        <homePageComp.Education />
        <homePageComp.Blogs />
        <homePageComp.Paintings />
    </Container>
  );
};
