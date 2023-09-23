import { Space, Typography, Image, Divider, Layout } from "antd";

import PersonalInfo from "../modules/info";
import Selfie from "../assets/selfie.jpg";
const { Text, Paragraph, Title } = Typography;

const PersonalIntrouction = () => {
  return (
    <PersonalInfo
      portrait={Selfie}
      name="Lorem ipsum"
      affiliation="Lorem ipsum University"
      location="Xiniuhe State, Moon"
      googleScholar="https://scholar.google.com/citations?user=djakdjfkla"
      github="https://github.com/xxx"
      linkedin="https://www.linkedin.com/in/xxx"
      email="mailto:xxy@abc.com"
      orcid="https://orcid.org/0000-0000-0000-0000"
      personalStatement={
        <>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            ornare aliquet ipsum, ac tempus justo dapibus sit amet. Suspendisse
            condimentum, libero vel tempus mattis, risus risus vulputate libero,
            elementum fermentum mi neque vel nisl. Maecenas facilisis maximus
            dignissim. Curabitur mattis vulputate dui, tincidunt varius libero
            luctus eu. Mauris mauris nulla, scelerisque eget massa id, tincidunt
            congue felis. Sed convallis tempor ipsum rhoncus viverra.
            Pellentesque nulla orci, accumsan volutpat fringilla vitae, maximus
            sit amet tortor.
          </Paragraph>
          <Paragraph>
            My research interest includes NLP and CV. I have published more than
            10000 papers at the top international AI conferences with total
            100000+ citations.
          </Paragraph>
        </>
      }
    ></PersonalInfo>
  );
};

export default PersonalIntrouction;
