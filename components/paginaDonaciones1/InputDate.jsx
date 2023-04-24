import React from "react";
import "../../styles/components/paginaDonaciones1/_input-date.scss";

export const InputDate = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        className="inputDate"
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
};
