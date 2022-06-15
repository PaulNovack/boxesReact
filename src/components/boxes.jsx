import React, { Component } from "react";
import Box from "./box";
import axios from "axios";
class Boxes extends Component {
  state = {
    BoxList: [],
  };
  componentDidMount = () => {
    this.getBoxes();
  };

  handleNameUpdate = (e, id) => {
    let box = this.state.BoxList.find((m) => m.id === id.id);
    box.name = e.target.value;
    this.updateBox(box);
  };
  handleWeightUpdate = (e, id) => {
    let box = this.state.BoxList.find((m) => m.id === id.id);
    box.weight = e.target.value;
    this.updateBox(box);
  };
  handleDelete = (id) => {
    let DeleteBox = {};
    let Boxes = this.state.BoxList;
    Boxes.forEach((obj, idx) => {
      if (obj.id === id.id) {
        DeleteBox = obj;
        Boxes.splice(idx, 1);
      }
    });
    this.deleteBox(DeleteBox);
  };
  handleViewItems = (box_id) => {
    this.props.handleViewItems(box_id);
  };
  createBox = () => {
    const Box = {};
    Box.id = this.state.BoxList.length + 1;
    Box.name = "New Box " + (this.state.BoxList.length + 1);
    //Box.weight = 0;
    Box.picture = "";
    axios
      .post(`http://192.168.86.45:8123/box`, Box, { withCredentials: true })
      .then((res) => {
        let NewBox = [res.data];
        NewBox[0].weight = 0;
        NewBox[0].name = "New Box " + (this.state.BoxList.length + 1);
        NewBox[0].picture = "";
        let BoxList = this.state.BoxList.concat(NewBox);
        this.setState({ BoxList });
      });
  };
  updateBox = (box) => {
    box.picture = "";
    const url = "http://192.168.86.45:8123/box/" + box.id;
    axios.put(url, box, { withCredentials: true }).then((res) => {});
  };
  deleteBox = (box) => {
    box.picture = "";
    const url = "http://192.168.86.45:8123/box/" + box.id;
    axios.delete(url, box, { withCredentials: true }).then((res) => {});

    let BoxList = this.state.BoxList;
    this.setState({ BoxList });
  };
  getBoxes = () => {
    axios
      .get(`http://192.168.86.45:8123/box`, { withCredentials: true })
      .then((res) => {
        const BoxList = res.data;
        console.log(BoxList);
        this.setState({ BoxList });
      });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row text-center mt-2">
            <h3>Viewing All Boxes</h3>
          </div>
          <div className="row">
            <button
              key="createBox"
              type="button"
              onClick={this.createBox}
              className="btn btn-success mt-2"
            >
              + New Box
            </button>
          </div>
          {this.state.BoxList.map((item) => (
            <Box
              key={item.id}
              name={item.name}
              weight={item.weight}
              id={item.id}
              handleWeightChange={this.handleWeightUpdate}
              handleNameUpdate={this.handleNameUpdate}
              handleDelete={this.handleDelete}
              handleViewItems={this.props.handleViewItems}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Boxes;
