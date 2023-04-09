import React from "react"
import '../style.css'
import logo from '../images/troll-face.png'

function Header()
{
    return(
        <nav className="navbar">
            <img src={logo} alt="memegen-png"></img>
            <p className="memegen">Meme Generator</p>
            <p className="react">React Course - Project 3</p>
            
            
        </nav>
    )
}

export default Header