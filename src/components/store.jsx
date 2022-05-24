import React, { Component } from "react";
import axios from "axios";
import { Login } from "../components/login";
import Boxes from "../components/boxes";
import Items from "../components/items";
import Item from "../components/item";
class Store extends Component {
  state = {
    viewIndex: 0,
    views: ["Login", "Boxes", "Box", "Item", "logout"],
    box_id: 0,
    username: "",
    authKey: "",
  };
  handleViewBoxes = () => {
    console.log("View Boxes Event button or other clicked");
    const viewIndex = 2;
    this.setState({ viewIndex });
  };
  handleViewItems = (box_id) => {
    const item_id = box_id.id;
    this.setState({ box_id });
    this.setState({ viewIndex: 4 });
  };
  handleLogin = (page) => {
    axios
      .get(
        `http://192.168.86.45:8123/login?username=paulnovack&password=paulnovack`
      )
      .then((res) => {
        const authToken = res.data.authToken;
        this.setState({ authToken });
      });
    this.setState({ viewIndex: 2 });
  };

  render() {
    if (this.state.viewIndex === 0) {
      return <Login onLoginClick={this.handleLogin} />;
    } else if (this.state.viewIndex === 2) {
      return <Boxes handleViewItems={this.handleViewItems} />;
    } else {
      return (
        <Items
          box_id={this.state.box_id}
          handleViewBoxes={this.handleViewBoxes}
        />
      );
    }
  }
}

export default Store;
