import {Typography} from "antd";
import PubEntry from "../modules/group_items/pub_entry_spec";

const {Title} = Typography;

const Teaching = () => (
    <div>
        {/* <Title level={3}>Teaching</Title> */}
        <PubEntry
            paperTitle="COMPSCI 2822R: Topics in Machine Learning: Computational Properties in Interpretable Machine Learning"
            authors={
                <>
                    <b>Teaching Fellow</b>, Harvard University (Fall 2024)
                </>
            }
            venueType="Course"
            // venueShort="Teaching"
            venueFull="Teaching Experience"
        />
    </div>
);

export default Teaching;