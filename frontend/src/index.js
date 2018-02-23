import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import registerServiceWorker from "./registerServiceWorker";
// import components
import Main from "./component/Main";
import Single from "./component/Single";
import PostList from "./component/PostList";
// import react-router deps
import { Router, Route, IndexRoute, browserHistory } from "react-router";

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PostList} />
      <Route path="/view/:postId" component={Single} />
    </Route>
  </Router>
);

ReactDOM.render(router, document.getElementById("root"));
registerServiceWorker();
