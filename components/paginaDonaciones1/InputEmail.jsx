import React from "react";

export const InputEmail = (props) => {
  return (
    <div>
        <label htmlFor={props.id}>{props.label}</label>
      <input className="inputEmail" type={props.type} id={props.id} placeholder={props.placeholder} />
    </div>
  );
};
