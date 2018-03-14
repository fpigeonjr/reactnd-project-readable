import React, { Component } from "react";
import Post from "./Post";
import Comments from "./Comments";
class Single extends Component {
  render() {
    // index of post
    const i = this.props.posts.findIndex(
      post => post.id === this.props.params.postId
    );
    // get us the post
    const post = this.props.posts[i];

    return (
      <div className="single-post">
        <Post i={i} post={post} {...this.props} />
        <Comments />
      </div>
    );
  }
}

export default Single;
