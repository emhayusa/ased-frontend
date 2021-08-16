import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Container from 'react-bootstrap/Container'


import { HashRouter as Router, Switch, Route } from "react-router-dom";
import TopMenu from "./TopMenu"
import Home from "./Home"
import About from "./About"
import Members from "./Members"
import Links from "./Links"
import Publications from "./Publications"
import NotFound from "./NotFound"

function App() {
  return (
    <Container fluid className="bg-white">
      <TopMenu />
      <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/members">
          <Members />
        </Route>
        <Route path="/links">
          <Links />
        </Route>
        <Route path="/publications">
          <Publications />
        </Route>     
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>

    </Container>
  );
}

export default App;
