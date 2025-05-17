import React from "react";
import "./Header.css"

export default function Header() {
    return (
        <header>
            <a href="#tzedek"><p className="nav-item">TZEDEK</p></a>
            <a href="#functions"><p className="nav-item">ABOUT</p></a>
            <a href="#try-it"><p className="nav-item">TRY IT</p></a>
        </header>
    );
}
