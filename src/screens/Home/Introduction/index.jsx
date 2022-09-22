import { BsChevronDoubleDown } from "react-icons/bs";
import njPic from "../../../assets/njPic.jpg";
import {
  BoxIconDown,
  BoxImage,
  ContainerIntro,
  ContentDescriptionResum,
  ContentInfo,
  ContentIntro,
  ContentTitle,
  Title,
} from "./styles";

export const IntroductionComponet = () => (
  <ContainerIntro>
    <ContentIntro>
      <ContentInfo>
        <ContentTitle>
          <Title>Hi! I'm Namrata Jain</Title>
          <img
            src="https://cdn0.iconfinder.com/data/icons/remoji-soft-1/512/emoji-hello-happy-smile.png"
            width="40"
            alt="img"
          />
        </ContentTitle>
        <ContentDescriptionResum>
          <p>
            I'm an Adv. Frontend Developer who's always curious to learn crazy
            stuffs and ready to grab hands-on experience by creating web apps.
            Besides, i also love to do painting and artwork related stuffs in my
            spare time.
          </p>
          <a
            rel="noreferrer"
            href="https://drive.google.com/file/d/1qp2T-MQV_go7KzF1xAfrkuL-S7V5MU_b/view?usp=sharing"
            target="_blank"
          >
            My Resume
          </a>
        </ContentDescriptionResum>
      </ContentInfo>
      <BoxImage img={njPic} />
    </ContentIntro>
    <BoxIconDown>
      <BsChevronDoubleDown size={35} color="#fff" />
    </BoxIconDown>
  </ContainerIntro>
);
