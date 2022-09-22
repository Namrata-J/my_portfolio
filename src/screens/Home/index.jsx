import * as homePageComp from "../../components/";
import { Container, Section } from "./styles";
import { ContainerMaxWidth } from "../../utils/styles";
import { IntroductionComponet } from "./Introduction";
import { technologiesList } from "../../constants/technologies";

export const HomePage = () => {
  return (
    <Container>
      <ContainerMaxWidth>
        <Section>
          <IntroductionComponet />
        </Section>
        <Section></Section>
        <homePageComp.Projects />
        <homePageComp.Education />
        <homePageComp.Blogs />
        <homePageComp.Paintings />
      </ContainerMaxWidth>
    </Container>
  );
};
