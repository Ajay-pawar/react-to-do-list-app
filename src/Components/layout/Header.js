import React, { Component } from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header style={headerStyle}>
            <h1>This is our Todo list</h1>
            <Link to="/">Home</Link> | <Link to="about">About</Link>
        </header>
    )
}

const headerStyle = {
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    padding: "10px"
}

export default Header