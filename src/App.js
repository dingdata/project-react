import "./App.css";
import RetrieveTraffic from "./Component/RetrieveTraffic";
import RetrieveVerse from "./Component/RetriveVerse";
import React from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>DLM project</div>
      {/*<RetrieveTraffic></RetrieveTraffic>
      <RetrieveVerse></RetrieveVerse> */}
      <BrowserRouter>
        <NavLink
          activeStyle={{ color: "red", textDecoration: "underline" }}
          style={{ color: "gray" }}
          to="/traffic"
        >
          Retrieve Traffic
        </NavLink>
        <NavLink
          activeStyle={{ color: "red", textDecoration: "underline" }}
          style={{ marginLeft: 10, color: "gray", textDecoration: "none" }}
          to="/verse"
        >
          Verse
        </NavLink>
        <Route path="/traffic" component={RetrieveTraffic} />
        <Route path="/verse" component={RetrieveVerse} />
      </BrowserRouter>
    </div>
  );
}

export default App;
