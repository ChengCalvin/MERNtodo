import React from "react";
import "./ItemDescription.css";

const ItemDescription = (props) => {
  return <div className="ItemDescription">{props.text}</div>;
};

export default ItemDescription;
