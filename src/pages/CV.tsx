import React from "react";
import {useEffect} from "react";
// import {useEffect} from "react";
import {Layout, Divider, Typography} from "antd";
import TalksOnWeb from "../drafts/talks";
const {Paragraph, Text, Title} = Typography;
const {Content, Header, Footer} = Layout;

// const CV: React.FC = () => (
//   <Content id="Misc">
//     <Title level={4}>Presence on the web</Title>
//     <Divider style={{ margin: "0 0 1% 0" }} />
//     <TalksOnWeb></TalksOnWeb>
//   </Content>
// );

// const CVInDom = (
//   <div>
//     <CV />
//   </div>
// );


const CV: React.FC = () => {
  useEffect(() => {
    // ✅ Replace with your actual Google Drive link
    window.location.href = "https://drive.google.com/file/d/1fTkOI9aUt9lptIW9CyHrZKrT1_wAKDIN/view?usp=sharing";
  }, []);

  return <p>Redirecting to Google Drive...</p>;
};

// ✅ Make CVInDom a component (not just JSX)
const CVInDom: React.FC = () => (
  <div>
    <CV />
  </div>
);

export default CVInDom;
