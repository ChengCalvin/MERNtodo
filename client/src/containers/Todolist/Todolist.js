import React, { Component } from "react";
import ListItem from "../../components/ListItem/ListItem";
import InputBox from "../../components/InputBoxes/InputBox/InputBox";
import InputDescription from "../../components/InputBoxes/InputDescription/InputDescription";
import AddButton from "../../components/UI/Buttons/AddButton/AddButton";
import "./Todolist.css";
//import Spinner from "../../components/UI/Spinner";
import { connect } from "react-redux";
import { getItems, deleteItems, addItem } from "../../actions/itemActons";
import PropTypes from "prop-types";

class Todolist extends Component {
  state = {
    listitem: "",
    itemdes: "",
  };
  componentDidMount() {
    this.props.getItems();
  }

  inputItemHandler = (event) => {
    this.setState({
      listitem: event.target.value,
    });
  };
  inputDesHandler = (event) => {
    this.setState({
      itemdes: event.target.value,
    });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    const newItem = {
      listitem: this.state.listitem,
      itemdes: this.state.itemdes,
    };
    this.props.addItem(newItem);
  };

  onDeleteHandler = (id) => {
    this.props.deleteItems(id);
  };

  render() {
    const { listItems } = this.props.item;
    return (
      <div className="Todolist">
        <div className="Input">
          <InputBox
            listitem="listitem"
            id="item"
            onChange={this.inputItemHandler}
          />
          <InputDescription
            itemdes="itemdes"
            id="itemd"
            onChange={this.inputDesHandler}
          />
          <AddButton clicked={this.onSubmitHandler} />
        </div>
        <div className="List">
          {listItems &&
            listItems.map((listitems) => (
              <ListItem
                key={listitems._id}
                text={listitems.listItem}
                idescription={listitems.itemDes}
                clicked={this.onDeleteHandler.bind(this, listitems._id)}
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
