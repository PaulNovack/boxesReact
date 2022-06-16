import React, { Component } from "react";
class NavBar extends Component {
  state = {};

  handleNavBar = () => {
    console.log("clicked");
    this.props.handleNavBar();
  };
  handleLogOut = () => {
    console.log("clicked");
    this.props.handleLogOut();
  };
  render() {
    return (
      <nav
        className="navbar navbar-expand-md navbar-dark bg-dark"
        aria-label="Fourth navbar example"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Boxes Inventory Application
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item" onClick={this.handleNavBar}>
                <a className="nav-link" aria-current="page" href="#">
                  View Boxes
                </a>
              </li>
              <li className="nav-item" onClick={this.handleLogOut}>
                <a className="nav-link" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
