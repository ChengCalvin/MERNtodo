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
        id={props.id}
        value={props.value}
        maxLength="20"
        onChange={changeHandler}
        placeholder="Enter Task"
      />
    </div>
  );
};

export default InputBox;
