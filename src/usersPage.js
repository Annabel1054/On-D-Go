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
      <div className="background">
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
        <br></br>
        <h4 className="name">Available Foods:</h4>
        <div className="AboutText">Kjalksjdlaksjdlk</div>
      </div>
    );
  }
}

export default usersPage;
