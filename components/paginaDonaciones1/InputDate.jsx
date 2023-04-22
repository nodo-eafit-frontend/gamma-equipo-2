import React from "react";

export const InputDate = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input className="inputDate" type={props.type} id={props.id} placeholder={props.placeholder} ></input>
    </div>
  );
};
