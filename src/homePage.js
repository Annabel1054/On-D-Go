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
          outline
          color="warning"
          size="lg"
          className="onebtn"
          onClick={() => {
            this.setState({ toggle: { start: true } });
            console.log(this.state);
          }}
        >
          Restaurants
        </Button>
        {""}
        <div>
          <Modal isOpen={this.state.toggle.start}>
            <ModalHeader>Hello</ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label>Restaurant Name</Label>
                <Input
                  type="restaurant"
                  name="restaurant"
                  placeholder="Enter name..."
                />
              </FormGroup>
              <FormGroup>
                <Label>Dish:</Label>
                <Input type="dish" name="dish" placeholder="Enter dish..." />
              </FormGroup>
              <FormGroup>
                <Label>Description</Label>
                <Input
                  type="description"
                  name="description"
                  placeholder="Anything..."
                />
              </FormGroup>
              <FormGroup>
                <Label>Original Price</Label>
                <Input
                  type="Oprice"
                  name="Oprice"
                  placeholder="Enter price..."
                />
              </FormGroup>
              <FormGroup>
                <Label>New Price</Label>
                <Input
                  type="Nprice"
                  name="Nprice"
                  placeholder="Enter price..."
                />
              </FormGroup>
              <FormGroup>
                <Label>Tags</Label>
                <Input
                  type="tags"
                  name="tags"
                  placeholder="ex: gluten-free, vegan, etc"
                />
              </FormGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Name:</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Restaurant Name" />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Dish:</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="dish name" />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Description:</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="anything" />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Original Price:</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="$_____" />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Reduced Price:</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="$_____" />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Tags:</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="enter as many tags" />
              </InputGroup>
            </ModalBody>

            <div class="modal-footer justify-content-between">
              <Button
                color="danger"
                variant="secondary"
                onClick={() => {
                  this.setState({ toggle: { start: false } });
                }}
              >
                Back
              </Button>
              <Button
                color="primary"
                variant="primary"
                onClick={() => {
                  this.setState({ toggle: { start: false } });
                }}
              >
                Post
              </Button>
            </div>
          </Modal>
        </div>

        {/* <Button outline color="warning" size="lg" className="twobtn">
          Users
        </Button> */}
      </div>
    );
  }

  ChangeToUsersPage() {
    return (
      <Button
        outline
        color="warning"
        size="lg"
        className="twobtn"
        onClick={() => {
          window.location.href = "/usersPage";
          this.setState({ toggle: { new: false } });
        }}
      >
        Users
      </Button>
    );
  }

  render() {
    return (
      <div className="background">
        <h1 className="header">
          {" "}
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
        <img
          src={require("./Image/trans-logo.png")}
          height="500"
          width="500"
          classname="photo"
        ></img>
        <div className="name">ON-D-GO</div>
        {this.StartModalButton()}
        {this.ChangeToUsersPage()}
      </div>
    );
  }
}

export default homePage;
