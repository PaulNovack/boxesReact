import React, { Component } from "react";
import axios from "axios";
import { Login } from "../components/login";
import Boxes from "../components/boxes";
class Store extends Component {
  state = {
    viewIndex: 0,
    views: ["Login", "Boxes", "Boxe", "Item", "logout"],
    username: "",
    authKey: "",
    Boxes: [],
    Items: [],
  };

  handleLogin = (page) => {
    axios
      .get(
        `http://localhost:8123/login?username=paulnovack&password=paulnovack`
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
    } else {
      return (
        <Boxes
          BoxList={this.state.Boxes}
          handleBoxEvents={this.handleBoxEvents}
        />
      );
    }
  }
}

export default Store;
