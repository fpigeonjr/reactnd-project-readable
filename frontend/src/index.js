import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/index.css";
import registerServiceWorker from "./registerServiceWorker";
// import components
import App from "./component/App";
import Single from "./component/Single";
import PostList from "./component/PostList";
// import react-router deps
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux";
import store, { history } from "./store";

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PostList} />
        <Route path="/view/:postId" component={Single} />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById("root"));
registerServiceWorker();
