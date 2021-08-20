import "./App.css";
import RetrieveTraffic from "./Component/RetrieveTraffic";
import RetrieveVerse from "./Component/RetriveVerse";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Nav, Navbar, Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Main from "./Component/DisplayStart";
function App() {
  return (
    <div className="App" data-testid="App">
      <BrowserRouter>
        <Navbar expand="sm" className="sticky-top navbar-dark bg-primary">
          <LinkContainer aria-label="main" to="/main">
            <Navbar.Brand> DLM Project </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navfonts" activeClassName="active">
              <LinkContainer aria-label="traffic" to="/traffic">
                <Nav.Link>LTA Traffic Cams</Nav.Link>
              </LinkContainer>
              <LinkContainer aria-label="verse" to="/verse">
                <Nav.Link>Verse Search</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route path="/main" component={Main} />
        <Route path="/traffic" component={RetrieveTraffic} />
        <Route path="/verse" component={RetrieveVerse} />
      </BrowserRouter>
      <Navbar fixed="bottom" className="navbar-dark bg-primary">
        <Row className="footfonts">
          <Col xs={3}>Report Vulnerability</Col>

          <Col xs={2}>Privacy</Col>
          <Col xs={3}>Terms and Condition</Col>

          <Col xs={4}>(C) 2021 Govt of Singapore</Col>
          <Col>Last Updated 20 Aug 2021</Col>
        </Row>
      </Navbar>
    </div>
  );
  // return (
  //   <div className="App">
  //     <div>DLM project</div>
  //     {/*<RetrieveTraffic></RetrieveTraffic>
  //     <RetrieveVerse></RetrieveVerse> */}
  //     <BrowserRouter>
  //       <NavLink className="navfonts" activeClassName="active" to="/traffic">
  //         Retrieve Traffic
  //       </NavLink>

  //       <NavLink className="navfonts" activeClassName="active" to="/verse">
  //         Get Verse
  //       </NavLink>
  //       <Route path="/traffic" component={RetrieveTraffic} />
  //       <Route path="/verse" component={RetrieveVerse} />
  //     </BrowserRouter>
  //   </div>
  // );
}

export default App;
