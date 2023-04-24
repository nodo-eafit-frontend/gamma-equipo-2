import React from "react";
import '../../styles/components/paginaDonaciones1/_input-text.scss';

export const InputText = (props) => {
    return (<div>
        <label htmlFor={props.id}>{props.label}</label>
        <input className="inputText" type={props.type} id={props.id} placeholder={props.placeholder} />
    </div>
    )
}
