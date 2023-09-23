import { Typography } from "antd";
import TimeEntry from "../modules/group_items/time_entry";
import TimedPubList from "../modules/timed_list";
const { Title, Paragraph, Text, Link } = Typography;

const updatesList = [
  <TimeEntry
    startTime="August 26, 2023"
    content={
      <>
        Meeting new friends at{" "}
        <a href="http://github.com/" target="_blank" rel="noreferrer noopener">
          GitHub
        </a>
        !
      </>
    }
  />,
  <TimeEntry
    startTime="August 26, 2023"
    endTime="August 27, 2023"
    content={
      <>
        Meeting new friends at{" "}
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Linkdin
        </a>
        !
      </>
    }
  />,
  <TimeEntry
    startTime="August 26, 2023"
    content={
      <>Attending AAAI 2023!</>
    }
    annotation={
      <>Our group have 10 paper accepted at AAAI 2023!</>
    }
  />,
  <TimeEntry
    startTime="August 26, 2023"
    content={
      <>
        Meeting new friends at{" "}
        <a href="http://github.com/" target="_blank" rel="noreferrer noopener">
          GitHub
        </a>
        !
      </>
    }
  />,
];

const NewsDisplayList = () => {
  return <TimedPubList itemList={updatesList} displayLength={2}/>;
};

export default NewsDisplayList;
