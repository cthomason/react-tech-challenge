import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import axios from "axios";

class PromisePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayText: ""
    };
  }
  render() {
    return (
      <div className="page">
        <Button onClick={this.clickHandler}>Click Me!</Button>
        {this.state.displayText}
      </div>
    );
  }

  clickHandler = () => {
    let myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Success");
      }, 1000);
    });

    myPromise.then(() => {
      this.setState({ displayText: "Promise fulfilled!" });
    });

    axios.post("http://localhost:8080/clicks", {url: "/promise", elem: "button"})
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    });
  };
}

function mapStateToProps(state) {
  const { location } = state;

  return location;
}

export default connect(mapStateToProps)(PromisePage);
