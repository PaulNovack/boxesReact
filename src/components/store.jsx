import React, { Component } from "react";
import axios from "axios";
import { Login } from "../components/login";
import Boxes from "../components/boxes";
import Items from "../components/items";
import Item from "../components/item";
import NavBar from "../components/navbar";
class Store extends Component {
  state = {
    viewIndex: 0,
    views: ["Login", "Boxes", "Box", "Item", "logout"],
    box_id: 0,
    box_name: "",
    username: "",
    authKey: "",
  };
  handleNavBarClick = () => {
    console.log("Parent Store Clicked");
    const viewIndex = 2;
    this.setState({ viewIndex });
  };
  handleViewBoxes = () => {
    const viewIndex = 2;
    this.setState({ viewIndex });
  };
  handleViewItems = (box_id, name) => {
    console.log(box_id);
    console.log(name);
    const box_name = name.name;
    const item_id = box_id.id;
    this.setState({ box_id });
    this.setState({ box_name });
    this.setState({ viewIndex: 4 });
  };
  handleLogOut = () => {
    console.log("Parent Store Logout");
    const viewIndex = 0;
    this.setState({ viewIndex });
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
      return (
        <React.Fragment>
          <NavBar
            viewState={this.state.viewState}
            handleNavBar={this.handleNavBarClick}
            handleLogOut={this.handleLogOut}
          ></NavBar>
          <Boxes handleViewItems={this.handleViewItems} />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <NavBar
            viewState={this.state.viewState}
            handleNavBar={this.handleNavBarClick}
            handleLogOut={this.handleLogOut}
          ></NavBar>
          <Items
            box_name={this.state.box_name}
            box_id={this.state.box_id}
            handleViewBoxes={this.handleViewBoxes}
          />
        </React.Fragment>
      );
    }
  }
}

export default Store;
