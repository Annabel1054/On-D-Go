import {
  Button,
  Modal,
  ModalHeader,
  Form,
  FormGroup,
  Input,
  Label,
  ModalBody,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";
import { render } from "react-dom";
import "./App.css";
import React, { Component } from "react";

class usersPage extends Component {
  state = {};
  render() {
    return (
      <div className="backgroundUsers">
        <h1 className="headerUser">
          <Button
            outline
            color="warning"
            size="lg"
            className="onebtn"
            onClick={() => {
              window.location.href = "/";
              this.setState({ toggle: { new: false } });
            }}
          >
            Home
          </Button>
          <Button
            outline
            color="warning"
            size="lg"
            className="onebtn"
            onClick={() => {
              window.location.href = "/AboutPage";
              this.setState({ toggle: { new: false } });
            }}
          >
            About
          </Button>
        </h1>
        <h2 className="availableFood">Available Food</h2>
        <h3 className="blue">REMY'S DINER: LASAGNA</h3>

        <img
          src={require("./Image/lasagna.jpg")}
          classname="lphoto"
          height="400"
          width="400"
        ></img>

        <div className="blue">
          Lasagna made fresh from Remy's Diner! Pick up today from 8PM-10PM.
        </div>
        <div className="blue">Original Price: $15</div>
        <div className="blue">Reduced Price: $5</div>
      </div>
    );
  }
}

export default usersPage;
