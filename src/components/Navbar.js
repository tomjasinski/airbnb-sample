import React from "react"
import airbnb from "../images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img src={airbnb} alt="airbnb icon" className="nav--logo" />
        </nav>
    )
}