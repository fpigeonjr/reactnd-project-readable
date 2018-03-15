import React, { Component } from "react";
import Post from "./Post";
import Comments from "./Comments";
import { Row, Col } from "reactstrap";

class Single extends Component {
  render() {
    // index of post
    const i = this.props.posts.findIndex(
      post => post.id === this.props.params.postId
    );
    // get us the post
    const post = this.props.posts[i];

    return (
      <Row className="single-post">
        <Col sm="6">
          <Post i={i} post={post} {...this.props} />
        </Col>
        <Col sm="6">
          <Comments />
        </Col>
      </Row>
    );
  }
}

export default Single;
