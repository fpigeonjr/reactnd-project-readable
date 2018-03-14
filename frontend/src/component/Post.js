import React, { Component } from "react";
import { Link } from "react-router";
import { FaEdit, FaTrash, FaThumbsUp, FaThumbsDown } from "react-icons/lib/fa/";
import { Row, Col } from "reactstrap";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Badge
} from "reactstrap";
// import CSSTransition from "react-transition-group";
import styled from "styled-components";

const PostScore = styled.p`
  margin-bottom: 0;
`;

class Post extends Component {
  render() {
    const { post, i, comments } = this.props;
    return (
      <div className="post-card">
        <Card className="text-left">
          <CardBody>
            <CardText>
              <Row>
                <Col sm="8">
                  <CardTitle>{post.title}</CardTitle>
                  <CardSubtitle>by {post.author}</CardSubtitle>
                  <Button outline color="secondary">
                    <FaEdit /> Edit
                  </Button>{" "}
                  <Button outline color="danger">
                    <FaTrash /> Delete
                  </Button>
                </Col>
                <Col sm="4">
                  <Badge>{post.category}</Badge>
                  <PostScore className="text-muted">
                    {post.voteScore} score
                  </PostScore>
                  <p className="post-comments text-muted">
                    {post.commentCount} comments
                  </p>
                  {/* TODO: Add transition effect
                  <CSSTransition timeout={1000} classNames="like">
                    <FaThumbsUp key={post.voteScore} />
                  </CSSTransition>
                  <CSSTransition timeout={1000} classNames="like">
                    <FaThumbsDown key={post.voteScore} />
                  </CSSTransition> */}
                  <div className="control-buttons">
                    <button>
                      <FaThumbsUp />
                    </button>
                    <button>
                      <FaThumbsDown />
                    </button>
                  </div>
                </Col>
              </Row>
            </CardText>
            <Link to={`/view/${post.id}`}>
              <Button color="primary">Read Now</Button>
            </Link>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Post;
