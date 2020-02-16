import {
  Button,
  Modal,
  ModalHeader,
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
      }
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
                  placeholder="REMY'S DINER"
                />
              </FormGroup>
              <FormGroup>
                <Label>Dish:</Label>
                <Input type="dish" name="dish" placeholder="LASAGNA" />
              </FormGroup>
              <FormGroup>
                <Label>Description</Label>
                <Input
                  type="description"
                  name="description"
                  placeholder="Lasagna made fresh from Remy's Diner! Pick up today from 8PM-10PM."
                />
              </FormGroup>
              <FormGroup>
                <Label>Original Price</Label>
                <Input type="Oprice" name="Oprice" placeholder="$15.00" />
              </FormGroup>
              <FormGroup>
                <Label>New Price</Label>
                <Input type="Nprice" name="Nprice" placeholder="$5.00" />
              </FormGroup>
              <FormGroup>
                <Label>Tags</Label>
                <Input type="tags" name="tags" />
              </FormGroup>
              <FormGroup>
                <Label>Upload Photo</Label>
                <br></br>
                <input type="file" onChange={this.fileSelectedHandler} />
              </FormGroup>
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
