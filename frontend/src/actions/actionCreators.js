// increment voteScore
export function increment(id) {
  return {
    type: "INCREMENT_VOTESCORE",
    id
  };
}

// decrement voteScore
export function decrement(id) {
  return {
    type: "DECREMENT_VOTESCORE",
    id
  };
}
// add comment
export function addComment(postId, author, comment) {
  return {
    type: "ADD_COMMENT",
    postId,
    author,
    comment
  };
}
// edit comment

// remove comment
export function removeComment(parentId, id) {
  return {
    type: "REMOVE_COMMENT",
    parentId,
    id
  };
}

// add post

// edit post

// remove post
