import React from "react";

import "./ListItem.css";

const listItem = (props) => {
  return (
    <div className="ListItem">
      {props.text}
      <button onClick={props.clicked}>-</button>
    </div>
  );
};

export default listItem;
