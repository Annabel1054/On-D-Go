import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import homePage from "./homePage.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import usersPage from "./usersPage.js";
import aboutPage from "./aboutPage.js";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={homePage} />
          <Route exact path="/UsersPage" component={usersPage} />
          <Route exact path="/AboutPage" component={aboutPage} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
