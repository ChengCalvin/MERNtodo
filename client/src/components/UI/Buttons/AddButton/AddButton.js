import React from "react";
import "./AddButton.css";

const AddButton = (props) => (
  <div className="AddButtonStyle">
    <button onClick={props.clicked}>+</button>
  </div>
);

export default AddButton;
