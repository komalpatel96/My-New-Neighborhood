import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Info from "./pages/Info"
import Home from "./pages/Home"
import Nav from "./components/Layout/Nav";

const App = () =>

  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
         <Route exact path="/home" component={Home} />
        <Route exact path="/info" component={Info} />
      </Switch>
    </div>
  </Router>;


export default App;
