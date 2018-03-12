import React, { Component } from "react";
import { Link } from "react-router";
// import { Button, Badge } from "reactstrap";
import { FaEdit, FaTrash } from "react-icons/lib/fa/";
import { Row, Col } from "reactstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Badge
} from "reactstrap";

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
                  <FaEdit /> Edit
                  <FaTrash /> Delete
                </Col>
                <Col sm="4">
                  <Badge>{post.category}</Badge>
                  <p className="post-voteScore">{post.voteScore} score</p>
                  <p className="post-comments">{post.commentCount} comments</p>
                </Col>
              </Row>
            </CardText>
            <Link to={`/view/${post.id}`}>
              <Button>Read Now</Button>
            </Link>
          </CardBody>
        </Card>

        <div className="row" />
      </div>
    );
  }
}

export default Post;
