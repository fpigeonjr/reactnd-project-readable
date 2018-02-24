import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";

// import the root reducer
import rootReducer from "./reducers/index";

// get data from API
// import posts
import posts from "./data/posts";
// import comments
import comments from "./data/comments";
// import categories
import categories from "./data/categories";

// create an object for the dfault data
const defaultState = {
  posts,
  comments,
  categories
};

const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
