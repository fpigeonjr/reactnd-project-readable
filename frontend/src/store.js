import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";
// import { normalize, schema } from "normalizr";
// import the root reducer
import rootReducer from "./reducers/index";

// import static data TODO: replace with api
import comments from "./data/comments";
import posts from "./data/posts";
import categories from "./data/categories";

// import comments
// get data from API
// const myHeaders = new Headers();

// myHeaders.append("Authorization", "reduxRocks");
// const myInit = {
//   method: "GET",
//   headers: myHeaders
// };
// import posts
// let posts = null;
// fetch("http://localhost:3001/posts", myInit)
//   .then(response => {
//     if (!response.ok) {
//       throw Error("Error");
//     }
//     return response;
//   })
//   .then(data => data.json())
//   .then(data => {
//     posts = data;
//   });

// import categories
// let categories = null;

// fetch("http://localhost:3001/categories", myInit)
//   .then(response => {
//     if (!response.ok) {
//       throw Error("Error");
//     }
//     return response;
//   })
//   .then(data => data.json())
//   .then(data => {
//     categories = data;
//   });

// create an object for the default data
const defaultState = {
  posts,
  comments,
  categories
};

//normalize data
// Define a posts schema
// const author = new schema.Entity("authors");

// // Define your comments schema
// const comment = new schema.Entity("comments", {
//   commenter: author
// });

// // Define your post
// const post = new schema.Entity("posts", {
//   author: author,
//   comments: [comment]
// });
// const normalizedData = normalize(defaultState, post);
// console.log(normalizedData);

const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
