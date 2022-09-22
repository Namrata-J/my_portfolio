import * as homePageComp from "../../components/";
import { Container, Section } from "./styles";
import { ContainerMaxWidth } from "../../utils/styles";
import { IntroductionComponet } from "./Introduction";

export const HomePage = () => {
  return (
    <Container>
      <ContainerMaxWidth>
        <Section>
          <IntroductionComponet />
        </Section>
        <homePageComp.Technologies />
        <homePageComp.Projects />
        <homePageComp.Education />
        <homePageComp.Blogs />
        <homePageComp.Paintings />
      </ContainerMaxWidth>
    </Container>
  );
};
