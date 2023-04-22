import React from "react";

export const InputText = (props) => {
    return (<div>
        <label htmlFor={props.id}>{props.label}</label>
        <input className="inputText" type={props.type} id={props.id} placeholder={props.placeholder} />
    </div>
    )
}
