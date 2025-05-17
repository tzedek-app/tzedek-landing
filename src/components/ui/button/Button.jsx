import React from "react";
import "./Button.css"

export default function Button({ children, blue, short, style, href, onClick }) {
    let csName = blue ? "button-blue" : "button-gray"
    csName += short ? " button-short" : ""
    if (href) {
        return (
            <a href={href} className={`button ${csName}`} style={style}>{children}</a>
        );
    }
    return (
        <button className={`button ${csName}`} style={style} onClick={onClick}>{children}</button>
    );
}
