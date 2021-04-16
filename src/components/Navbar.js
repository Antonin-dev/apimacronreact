import React from 'react'
import '../App.scss';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
function Navbar() {
    return (
        <div className="Navbar">
            <div className="item-navbar">MACRON FACT</div>
            <div className="item-navbar"><Link to="/all">all facts</Link></div>
            <div className="item-navbar"><Link to="/random">Random</Link></div>
        </div>
    )
}

export default Navbar
