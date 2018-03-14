import React, { Component } from "react";
import Post from "./Post";
import CategoryList from "./CategoryList";
import { Row, Col } from "reactstrap";

class PostList extends Component {
  render() {
    return (
      <div className="post-list">
        <h2>All Posts</h2>
        <Row>
          <Col sm="6">
            {Object.keys(this.props.posts).map((post, i) => (
              <Post
                {...this.props}
                key={i}
                i={i}
                post={this.props.posts[post][0]}
              />
            ))}
          </Col>
          <Col sm={{ size: 3, offset: 1 }}>
            <CategoryList {...this.props} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default PostList;
