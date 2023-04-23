import React from "react";

export const InputNumber = (props) => {
    return( <div>
        <label htmlFor={props.id}>{props.label}</label>
        <input className="inputNumber" type={props.type} id={props.id} placeholder={props.placeholder} />
    </div>
    )
}       