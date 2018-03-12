import React, { Component } from "react";
import { Link } from "react-router";
import { Jumbotron, Container } from "reactstrap";
import "../styles/App.css";

class Main extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron fluid>
          <Container fluid>
            <Link to="/">
              <h1 className="display-3">Readable</h1>
            </Link>
            <p className="lead">Readable is a content and comment web app</p>
          </Container>
        </Jumbotron>
        <Container>
          {React.cloneElement(this.props.children, this.props)}
        </Container>
      </div>
    );
  }
}

export default Main;
