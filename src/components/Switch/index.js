import React from "react";
import "./index.css";

function Switch(props) {
  return (
    <label className="switch">
      <input className="switch__input" type="checkbox" onChange={props.onChange}></input>
      <span className="switch__slider switch__slider_kind_round"></span>
    </label>
  );
}

export default Switch;
