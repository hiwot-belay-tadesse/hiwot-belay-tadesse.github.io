import type { MenuProps } from "antd";


const baseServerAddress = process.env.PUBLIC_URL;

const items: MenuProps["items"] = [
  {
    label: <a href={baseServerAddress + "/"}>Home</a>,
    key: "Home",
    children: [
      {
        key: "About",
        label: <a href={baseServerAddress + "/#About"}>About</a>,
      },
      {
        key: "Updates",
        label: <a href={baseServerAddress + "/#Updates"}>Updates</a>,
      },
      {
        key: "Publications",
        label: <a href={baseServerAddress + "/#Publications"}>Publications</a>,
      },
    ],
  },
  {
    label: <a href={baseServerAddress + "/test"}>Test</a>,
    key: "Test",
  },
  {
    label: <a href={baseServerAddress + "/misc"}>Misc</a>,
    key: "Misc",
  },
];

export default items;