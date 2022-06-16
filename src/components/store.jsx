import React, { Component } from "react";
import axios from "axios";
import Boxes from "../components/boxes";
import Items from "../components/items";
import NavBar from "../components/navbar";
import Login from "./login";
import Cookies from "universal-cookie";
class Store extends Component {
  state = {
    viewIndex: 0,
    views: ["Login", "Boxes", "Box", "Item", "logout"],
    box_id: 0,
    box_name: "",
    authToken: "",
    username: "",
    password: "",
  };
  setPassword = (password) => {
    this.setState({ password });
  };
  setUsername = (username) => {
    this.setState({ username });
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
    this.setState({ box_id });
    this.setState({ box_name });
    this.setState({ viewIndex: 4 });
  };
  handleLogOut = () => {
    console.log("Parent Store Logout");
    const cookies = new Cookies();
    cookies.set("authToken", "", { path: "/" });
    const url = "/logout";
    axios.get(url).then((res) => {
      const authToken = res.data.authToken;
      this.setState({ authToken });
    });
    this.setState({ viewIndex: 2 });
    const viewIndex = 0;
    this.setState({ viewIndex });
  };
  handleLogin = (username, password) => {
    const url =
      "/login?username=" +
      this.state.username +
      "&password=" +
      this.state.password;
    axios.get(url).then((res) => {
      const authToken = res.data.authToken;
      this.setState({ authToken });
    });
    this.setState({ viewIndex: 2 });
  };

  render() {
    if (this.state.viewIndex === 0) {
      return (
        <Login
          onLoginClick={this.handleLogin}
          setUsername={this.setUsername}
          setPassword={this.setPassword}
        />
      );
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
