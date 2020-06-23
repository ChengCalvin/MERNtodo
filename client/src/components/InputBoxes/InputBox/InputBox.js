import React from "react";
import "./InputBox.css";

const InputBox = (props) => {
  const changeHandler = (event) => {
    if (props.onChange) {
      props.onChange(event);
    }
  };

  return (
    <div className="TaskTitle">
      <input
        type="text"
        listitem={props.listitem}
        id={props.id}
        onChange={changeHandler}
        placeholder="Enter Task"
      />
    </div>
  );
};

export default InputBox;
