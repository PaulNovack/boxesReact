import React, { Component } from "react";
import Item from "./item";
import axios from "axios";
class Items extends Component {
  state = {
    ItemList: [],
  };
  componentDidMount = () => {
    this.getItems();
  };

  handleNameUpdate = (e, id) => {
    let Item = this.state.ItemList.find((m) => m.id === id.id);
    Item.name = e.target.value;
    this.updateItem(Item);
  };
  handlequantityUpdate = (e, id) => {
    let Item = this.state.ItemList.find((m) => m.id === id.id);
    Item.quantity = e.target.value;
    this.updateItem(Item);
  };
  handleDelete = (id) => {
    let DeleteItem = {};
    let Items = this.state.ItemList;
    Items.forEach((obj, idx) => {
      if (obj.id == id.id) {
        DeleteItem = obj;
        Items.splice(idx, 1);
      }
    });
    this.deleteItem(DeleteItem);
  };
  handleViewItems = (e, id) => {};
  createItem = () => {
    const Item = {};

    Item.name = "New Item " + (this.state.ItemList.length + 1);
    Item.box_id = this.props.box_id.id;
    Item.quantity = 1;
    Item.picture = "";
    const url = "http://192.168.86.45:8123/item/" + this.props.box_id.id;
    axios.post(url, Item, { withCredentials: true }).then((res) => {
      let NewItem = res.data;
      let ItemList = this.state.ItemList.concat(NewItem);
      this.setState({ ItemList });
    });
  };
  updateItem = (Item) => {
    Item.picture = "";
    const url = "http://192.168.86.45:8123/item/" + Item.id;
    axios.put(url, Item, { withCredentials: true }).then((res) => {});
  };
  deleteItem = (Item) => {
    Item.picture = "";

    const url = "http://192.168.86.45:8123/item/" + Item.id;
    axios.delete(url, Item, { withCredentials: true }).then((res) => {});

    let ItemList = this.state.ItemList;
    this.setState({ ItemList });
  };
  getItems = () => {
    const url = "http://192.168.86.45:8123/box/" + this.props.box_id.id;
    axios.get(url, { withCredentials: true }).then((res) => {
      const ItemList = res.data;

      this.setState({ ItemList });
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row text-center mt-2">
            <h3>{this.props.box_name}</h3>
          </div>
          <div className="row">
            <button
              key="createItem"
              type="button"
              onClick={this.createItem}
              className="btn btn-success mt-2"
            >
              + New Item
            </button>
          </div>
          {this.state.ItemList.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              id={item.id}
              handlequantityChange={this.handlequantityUpdate}
              handleNameUpdate={this.handleNameUpdate}
              handleDelete={this.handleDelete}
              handleViewItems={this.handleViewItems}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Items;
