import React, { Component } from "react";
class Login2 extends Component {
  state = {
    username: "",
    password: "",
  };
  render() {
    return (
      <React.Fragment>
        <div className="text-center p-4">
          <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <div className="row">
              <h2>Boxes Inventory Application</h2>
            </div>
            <div className="row">
              <p>
                If you do not have a username and password simply enter one and
                it will be created
              </p>
              <p>
                A Simple application used to track items in boxes or items in
                shelf locations.
              </p>
            </div>
            <div className="row">
              <div className="col">
                <main className="form-signin w-100 m-auto">
                  <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                  <div className="form-floating">
                    <input
                      name="username"
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      onBlur={(e) => this.props.setUsername(e.target.value)}
                    />
                    <label>Email address</label>
                  </div>
                  <div className="form-floating">
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      onBlur={(e) => this.props.setPassword(e.target.value)}
                    />
                    <label>Password</label>
                  </div>
                  <button
                    className="w-100 btn btn-lg btn-primary"
                    onClick={this.props.onLoginClick}
                  >
                    Sign in
                  </button>
                </main>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login2;
