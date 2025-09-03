import { Typography } from "antd";
import PubList from "../modules/pub_list";
import PubEntry from "../modules/group_items/pub_entry_spec";

const { Title, Paragraph, Text, Link } = Typography;

const publicationList = [
  <PubEntry
    paperTitle="Transparent Trade-offs between Properties of Explanations:"
    authors={
      <>
        <b>Hiwot Belay Tadesse</b>,{" "}
        <a href="https://alihanhyk.github.io" target="_blank" rel="noopener noreferrer">A Hüyük</a>,{" "}
        <a href="https://yanivyacoby.github.io" target="_blank" rel="noopener noreferrer">Y Yacoby</a>,{" "}
        <a href="https://onefishy.github.io" target="_blank" rel="noopener noreferrer">W Pan</a>, and{" "}
        <a href="https://finale.seas.harvard.edu" target="_blank" rel="noopener noreferrer">F Doshi-Velez</a>
      </>
    }
    venueType="Conference"
    venueShort="UAI 2025"
    venueFull="Proceedings of the Forty-first Conference on Uncertainty in Artificial Intelligence, PMLR 286:4092-4112"
    paperLink="https://openreview.net/pdf?id=VviAbE2nrH"
    // exploreLink="https://google.com/"
    codeLink="https://github.com/dtak/POE"
    abstractContent={
      <>
        Transparent Trade-offs between Properties of Explanations:
        <li> Hiwot Belay Tadesse;</li>
        <li> An excellent template.</li>
      </>
    }
  />,
  <PubEntry
    paperTitle="Optimizing Explanations: Nuances Matter When Evaluation Metrics Become Loss Functions"
    authors={
      <>
        Jonas B. Raedler,<b> Hiwot Belay Tadesse</b>,{" "}
        <a href="https://onefishy.github.io" target="_blank" rel="noopener noreferrer">W. Pan</a>, and{" "}
        <a href="https://finale.seas.harvard.edu" target="_blank" rel="noopener noreferrer">F. Doshi-Velez</a>
      </>
    }
    venueType="Conference"
    venueShort="ICML'25 MOSS Workshop"
    venueFull="ICML'25 Methods and Opportunities at Small Scale (MOSS) Workshop"
    paperLink="https://openreview.net/forum?id=HUq8YbDpFt"
    // exploreLink="https://google.com/"
    // codeLink="https://github.com/"
  />,

  <PubEntry
    paperTitle="Directly Optimizing Explanations"
    authors={
      <>
        <b>Hiwot Belay Tadesse</b>,{" "}
        <a href="https://yanivyacoby.github.io" target="_blank" rel="noopener noreferrer">Y. Yacoby</a>,{" "}
        <a href="https://onefishy.github.io" target="_blank" rel="noopener noreferrer">W. Pan</a>, and{" "}
        <a href="https://finale.seas.harvard.edu" target="_blank" rel="noopener noreferrer">F. Doshi-Velez</a>
      </>
    }
    venueType="Conference"
    venueShort="ICML'24 HADS Workshop"
    venueFull="ICML Workshop on Humans, Algorithmic Decision-Making and Society: Modeling Interactions and Impact, 2024"
    // paperLink="https://arxiv.org/"
    exploreLink="https://icml.cc/virtual/2024/38218"
    // codeLink="https://github.com/"
    // awardName="Best Paper (top 1%)"
  />,

  <PubEntry
    paperTitle="Variational Exploration Module VEM: A Cloud-Native Optimization and Validation Tool for Geospatial Modeling and AI Workflows"
    authors={
      <>
        Julian Kuehnert, <b>Hiwot Belay Tadesse</b>, Chris Dearden, Rosie Lickorish, Paolo Fraccaro, Anne Jones, Blair Edwards, Sekou L Remy, Peter Melling
      </>
    }
    venueType="arXiv"
    venueShort="arXiv"
    venueFull="arXiv preprint arXiv:2311.16196"
    paperLink="https://arxiv.org/abs/2311.16196"
    // exploreLink="https://google.com/"
    // codeLink="https://github.com/"
  />,
];

const PublicationDisplayList = () => {
  return <PubList itemList={publicationList} />;
};

export default PublicationDisplayList;