import React from "react";
import { Layout, Divider, Space, Typography } from "antd";
import PublicationDisplayList from "../drafts/publications";
import Teaching from "../drafts/teaching";
import NewsDisplayList from "../drafts/updates";
import PersonalIntrouction from "../drafts/introduction";
const { Paragraph, Text, Title } = Typography;
const { Content, Header, Footer } = Layout;

const Homepage: React.FC = () => (
  <Content id="About">
    {/* <HeaderAnchor></HeaderAnchor> */}
    <br />
    <PersonalIntrouction></PersonalIntrouction>
    {/* <Title level={4} id="Updates">
      Updates
    </Title> */}
    {/* <Divider style={{ margin: "0 0 1% 0" }} />
    <NewsDisplayList></NewsDisplayList> */}
    <Title level={4} id="Publications">
      Publications
    </Title>
    <Divider style={{ margin: "0 0 1% 0" }} />
    <PublicationDisplayList></PublicationDisplayList>
    <Title level={4} id="Teaching">
      Teaching
    </Title>
    <Divider style={{margin: "0 0 1% 0"}} />
    <Teaching></Teaching>
  </Content>
);

const HomepageInDom = (
  <div>
    <Homepage />
  </div>
);

export default HomepageInDom;
