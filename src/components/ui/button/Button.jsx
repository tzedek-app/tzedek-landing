import React from "react";
import "./Button.css"

export default function Button({ children, blue, short, style }) {
    let csName = blue ? "button-blue" : "button-gray"
    csName += short ? " button-short" : ""
    return (
        <button className={csName} style={style}>{children}</button>
    );
}
