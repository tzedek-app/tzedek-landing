import React from "react";
import "./Button.css"

export default function Button({ ...props }) {
    let csName = props.blue ? "button-blue" : "button-gray"
    csName += props.short ? " button-short" : ""
    return (
        <button className={csName}>{props.title}</button>
    );
}
