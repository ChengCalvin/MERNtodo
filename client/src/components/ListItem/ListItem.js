import React from "react";

import "./ListItem.css";
import ItemDescription from "../ItemDescription/ItemDescription";
import RemoveButton from "../UI/Buttons/RemoveButton/RemoveButton";

const listItem = (props) => {
  return (
    <div className="ListItem">
      <div className="TaskBoxStyle">
        <p>Task</p>
        {props.text}
      </div>
      <div className="DescriptionBoxStyle">
        <p>Details</p>
        <ItemDescription text={props.idescription} />
      </div>
      <RemoveButton clicked={props.clicked} />
    </div>
  );
};

export default listItem;
