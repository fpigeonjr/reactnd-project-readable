import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";

// import the root reducer
import rootReducer from "./reducers/index";

// import comments
import comments from "./data/comments"; // old static way

// get data from API
const myHeaders = new Headers();

myHeaders.append("Authorization", "reduxRocks");
const myInit = {
  method: "GET",
  headers: myHeaders
};
// import posts
//import posts from "./data/posts";
let posts = null;
fetch("http://localhost:3001/posts", myInit)
  .then(response => {
    if (!response.ok) {
      throw Error("Error");
    }
    return response;
  })
  .then(data => data.json())
  .then(data => {
    posts = data;
  });

// import categories
let categories = null;

fetch("http://localhost:3001/categories", myInit)
  .then(response => {
    if (!response.ok) {
      throw Error("Error");
    }
    return response;
  })
  .then(data => data.json())
  .then(data => {
    categories = data;
  });

// create an object for the default data
const defaultState = {
  posts,
  comments,
  categories
};

const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
