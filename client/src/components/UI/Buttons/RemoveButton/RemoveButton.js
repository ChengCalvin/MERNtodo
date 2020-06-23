import React from "react";
import "./RemoveButton.css";

const RemoveButton = (props) => (
  <div className="RemoveButtonStyle">
    <button onClick={props.clicked}>-</button>
  </div>
);

export default RemoveButton;
