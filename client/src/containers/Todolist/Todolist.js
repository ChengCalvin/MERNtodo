import React, { Component } from "react";
//import axios from "axios";
//import axios from "../../axios-list";
import ListItem from "../../components/ListItem/ListItem";
import "./Todolist.css";
//import Spinner from "../../components/UI/Spinner";
import { connect } from "react-redux";
import { getItems, deleteItems, addItem } from "../../actions/itemActons";
import PropTypes from "prop-types";

class Todolist extends Component {
  state = {
    listitem: "",
  };
  componentDidMount() {
    this.props.getItems();
    //console.log(this.props.getItems);
    //this.props.deleteItems();
  }

  inputHandler = (event) => {
    this.setState({
      listitem: event.target.value,
    });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    const newItem = {
      listitem: this.state.listitem,
    };
    // additem via additem action
    this.props.addItem(newItem);
  };

  onDeleteHandler = (id) => {
    this.props.deleteItems(id);
  };

  render() {
    const { listItems } = this.props.item;
    //console.log(this.props.item);
    //console.log("hello");
    return (
      <div className="Todolist">
        <form onSubmit={this.onSubmitHandler}>
          <input
            type="text"
            listitem="listitem"
            id="item"
            onChange={this.inputHandler}
            placeholder="Add List Item"
          />
          <button type="submit">+</button>
        </form>
        <div className="List">
          {listItems &&
            listItems.map((listitems, id) => (
              <ListItem
                key={id}
                text={listitems.listItem}
                clicked={this.onDeleteHandler}
              />
            ))}
        </div>
      </div>
    );
  }
}

Todolist.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ item: state.item }); // item from itemReducer
export default connect(mapStateToProps, { getItems, deleteItems, addItem })(
  Todolist
);
