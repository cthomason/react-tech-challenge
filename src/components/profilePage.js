import React from "react";
import { connect } from "react-redux";
import { Button, Col, Form, Row } from "react-bootstrap";
import { logClick } from "../lib/utils";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: ""
    };
  }

  render() {
    return (
      <div className="page">
        <Form>
          <Col>
            <Row>
              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={this.state.firstName || ""}
                  onChange={e => {
                    this.setState({ firstName: e.target.value });
                  }}
                />
              </Form.Group>
            </Row>
          </Col>
          <Col>
            <Row>
              <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={this.state.lastName || ""}
                  onChange={e => {
                    this.setState({ lastName: e.target.value });
                  }}
                />
              </Form.Group>
            </Row>
          </Col>
        </Form>
        <Button
          onClick={this.clickHandler}
        >
          Save
        </Button>
        </div>
    );
  }

  clickHandler = (e) => {
    console.log("Saving user info", this.state.firstName, this.state.lastName);

    logClick("/profile", e.target.id);
  };
}

function mapStateToProps(state) {
  const { location } = state;

  return location;
}

export default connect(mapStateToProps)(ProfilePage);
