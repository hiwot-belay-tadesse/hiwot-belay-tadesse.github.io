import { Space, Typography, Image, Divider, Layout } from "antd";

import PersonalInfo from "../modules/info";
import Selfie from "../assets/profile.png";
const { Text, Paragraph, Title } = Typography;

const PersonalIntrouction = () => {
  return (
    <PersonalInfo
      portrait={Selfie}
      name="Hiwot Belay Tadesse"
      affiliation="Harvard University"
      location="Cambridge, MA"
      // googleScholar="https://scholar.google.com/citations?user=djakdjfkla"
      github="https://github.com/hiwot-belay-tadesse"
      linkedin="https://www.linkedin.com/in/hibt/"
      email="mailto:Hiwotbelaytadesse@g.harvard.edu"
      // orcid="https://orcid.org/0000-0000-0000-0000"
      personalStatement={<>
        <Paragraph>
          Hi there! I’m Hiwot Belay, a Ph.D. student at{" "}
          <a
            href="https://dtak.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Harvard's Data to Actionable Knowledge Lab
          </a>, advised by{" "}
          <a
            href="https://finale.seas.harvard.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Finale Doshi-Velez
          </a>.
          Before starting my Ph.D., I completed my undergraduate studies in Computer
          Engineering at Benedict College. I also spent some time at IBM Research
          as a research software engineer, where I worked on geospatial modeling workflows.
        </Paragraph>

        <Paragraph>
          My research focuses on Explainable Artificial Intelligence (XAI), aiming to develop transparent and trustworthy explanations for machine learning models.
          I’m interested in designing explanation methods that adapt to the needs of the end users, and support informed decision-making.
          I enjoy meeting new people and learning about their research, so feel free to{" "}
          <a href="mailto:your.email@domain.com">reach out</a> if you want to chat!
        </Paragraph>
        </>
      }
    ></PersonalInfo>
  );
};

export default PersonalIntrouction;
