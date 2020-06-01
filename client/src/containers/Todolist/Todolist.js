import React, { Component } from "react";
//import axios from "axios";
import axios from "../../axios-list";
import ListItem from "../../components/ListItem/ListItem";
import "./Todolist.css";
//import Spinner from "../../components/UI/Spinner";

class Todolist extends Component {
  //put the state in the db
  state = {
    listItems: [],
    currentItems: {
      text: "",
      key: "",
    },
    loading: false,
    data: "",
  };

  //need to delete from db

  inputHandler = (event) => {
    this.setState({
      currentItems: {
        text: event.target.value,
        key: Date.now(),
      },
    });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    const newListItem = this.state.currentItems;
    //console.log(this.state.listItems);
    //const copyListItems = [...this.state.listItems];
    //console.log(newListItem);
    if (newListItem.text !== "") {
      //console.log([newListItem, ...this.state.listItems]);

      this.setState({
        listItems: [newListItem, ...this.state.listItems],
        currentItems: {
          text: "",
          key: "",
        },
      });
      const listItems = {
        text: this.state.currentItems.text,
        key: this.state.currentItems.key,
      };
      console.log(newListItem);
      axios
        .post("/list.json", listItems)
        .then((response) => {
          this.setState({ data: response.data });
          console.log(this.state.data);
        })
        .catch((error) => console.log(error)); // pass the item from listItems
    } else {
      alert("Invalid input");
    }
  };

  onDeleteHandler = (listitemIndex) => {
    const newlistItems = [...this.state.listItems];
    newlistItems.splice(listitemIndex, 1);
    this.setState({ listItems: newlistItems });

    axios
      .delete("/list.json", { params: { data: this.state.data } })
      .then((response) => console.log(response));
  };

  render() {
    //console.log(this.state.listItems);

    return (
      <div className="Todolist">
        <form onSubmit={this.onSubmitHandler}>
          <input
            type="text"
            value={this.state.currentItems.text}
            onChange={this.inputHandler}
            placeholder="Add List Item"
          />
          <button type="submit">+</button>
        </form>
        <div className="List">
          {this.state.listItems.map((currentItem) => (
            <ListItem
              key={currentItem.key}
              text={currentItem.text}
              clicked={this.onDeleteHandler}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Todolist;
