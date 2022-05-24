import React, { Component } from "react";
class Box extends Component {
  state = {};

  render() {
    const { name } = this.props;
    const { weight } = this.props;
    const { id } = this.props;

    return (
      <React.Fragment>
        <div key={id} className="row text-center boxDiv">
          <div className="col">
            <input
              type="file"
              name="fileToUpload"
              key="fileUpload-{id}"
              id="fileUpload-{id}"
              accept="image/*"
              capture="camera"
              style={{
                visibility: "hidden",
                display: "none",
                position: "absolute",
              }}
            />
            <img
              key={id}
              alt="a box"
              className="imageDisplay"
              src="/front/box.webp"
              style={{
                height: "50px",
                width: "50px",
                position: "relative",
                left: "-8px",
              }}
            />
          </div>
        </div>
        <div className="row">
          <div key={id} className="col">
            <input
              className="mt-2 form-control-sm"
              key="nameInput-{id}"
              name="name"
              style={{ width: "300px" }}
              defaultValue={name}
              onBlur={(e) => this.props.handleNameUpdate(e, { id })}
            />
          </div>
          <div className="col">
            <input
              id={id}
              className="mt-2 form-control-sm"
              key="weightInput-{id}"
              name="weight"
              defaultValue={weight}
              style={{ width: "50px" }}
              onBlur={(e) => this.props.handleWeightChange(e, { id })}
            />
          </div>
          <div className="col" style={{ width: "75px" }}>
            <button
              key="deleteButton-{id}"
              type="button"
              className="btn-sm btn-danger mt-2"
              onClick={() => this.props.handleDelete({ id })}
            >
              Delete
            </button>
          </div>
          <div className="col" style={{ width: "75px" }}>
            <button
              key="ViewBox{id}"
              type="button"
              className="btn-sm btn-primary mt-2"
              onClick={() => this.props.handleViewItems({ id })}
            >
              Items
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Box;
