import React from "react";
import "./InputDescription.css";

const InputDescription = (props) => {
  const changeHandler = (event) => {
    if (props.onChange) {
      props.onChange(event);
    }
  };
  return (
    <div className="InputDescription">
      <input
        type="text"
        itemdes={props.itemdes}
        id={props.id}
        onChange={changeHandler}
        placeholder="Details"
      />
    </div>
  );
};

export default InputDescription;
