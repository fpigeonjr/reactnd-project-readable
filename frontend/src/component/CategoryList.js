import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router";

class CategoryList extends Component {
  render() {
    return (
      <div className="caetgory-list">
        <h4>Categories</h4>
        <Row>
          <Col sm="12">
            <ul className="list-group">
              {this.props.categories.map((category, i) => (
                <Link
                  to={`/category/${category.path}`}
                  key={i}
                  className="list-group-item list-group-item-action"
                >
                  {category.name}
                </Link>
              ))}
            </ul>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CategoryList;
