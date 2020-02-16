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

class aboutPage extends Component {
  state = {};
  render() {
    return (
      <div className="background">
        <h1 className="headerAbout">
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
              window.location.href = "/usersPage";
              this.setState({ toggle: { new: false } });
            }}
          >
            Users
          </Button>
        </h1>

        <h4 className="about">About us</h4>

        <div>
          <img
            className="lobster"
            src={require("./Image/pizza-woman.jpeg")}
          ></img>
          <div className="AboutText">
            ON-D-GO is a website that focuses on the issues of food waste in
            restaurants and food insecurity among individuals. ON-D-GO allows
            users to locate local restaurants that are willing to sell their
            cooked dishes for a lower price, rather than throwing them away!
            <br></br>
            <br></br>
            <div>Restaurant Gain: money for left-over meals.</div>
            <br></br>
            <div>User Gain: meals at an afforable price.</div>
          </div>
        </div>
      </div>
    );
  }
}

export default aboutPage;
