import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import posts from "./posts";
import comments from "./comments";
import categories from "./categories";

const rootReducer = combineReducers({
  posts,
  comments,
  categories,
  routing: routerReducer
});

export default rootReducer;
