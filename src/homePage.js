import {
  Button,
  Modal,
  ModalHeader,
  Form,
  FormGroup,
  Input,
  Label,
  ModalBody
} from "reactstrap";
import { render } from "react-dom";
import "./App.css";
import React, { Component } from "react";

class homePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: {
        start: false,
        new: false
      },
      option: "",
      name: ""
    };
  }

  StartModalButton() {
    return (
      <div>
        <Button
          color="info"
          size="lg"
          className="onebtn"
          onClick={() => {
            this.setState({ toggle: { start: true } });
            console.log(this.state);
          }}
        >
          Restaurants
        </Button>
        <div>
          <Modal isOpen={this.state.toggle.start}></Modal>
        </div>

        <Button color="info" size="lg" className="twobtn">
          Users
        </Button>
      </div>
    );
  }

  render() {
    return (
      <div className="background">
        <img
          src={require("./Image/green-plant.jpg")}
          height="500"
          width="500"
          classname="photo"
        ></img>
        <div className="name">ON-D-GO</div>
        {this.StartModalButton()}
      </div>
    );
  }
}

export default homePage;
