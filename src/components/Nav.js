import React from "react"
import './Nav.css'

export default function Navbar({ getData }){
    return(
        <nav className='navbar'>
            <div className="max-width">
            <span className="logo">Let's Grow More</span>
            <button onClick={getData}>GetUsers</button>
            </div>
            
        
        </nav>
    )
}