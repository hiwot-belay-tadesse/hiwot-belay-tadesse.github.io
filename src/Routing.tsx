import React from "react";
import {Route, Routes} from "react-router-dom";
import MiscInDom from "./pages/misc";
import HomepageInDom from "./pages/home";
import CVInDom from "./pages/CV";



export default function Routing() {
  return (
    <Routes>
      <Route path={"/"} element={HomepageInDom} />
      {/* <Route path={"/CV"} element={CVInDom} /> */}
      <Route path={"/CV"} element={<CVInDom />} />
      {/* <Route path={"/misc"} element={MiscInDom} /> */}
    </Routes>
  );
}
