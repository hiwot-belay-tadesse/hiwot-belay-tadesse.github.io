import React from "react";
import { Layout, Divider, Typography } from "antd";
import TalksOnWeb from "../drafts/talks";
const { Paragraph, Text, Title } = Typography;
const { Content, Header, Footer } = Layout;

const Test: React.FC = () => (
  <Content id="Misc">
    <Title level={4}>Presence on the web</Title>
    <Divider style={{ margin: "0 0 1% 0" }} />
    <TalksOnWeb></TalksOnWeb>
  </Content>
);

const TestInDom = (
  <div>
    <Test />
  </div>
);

export default TestInDom;
