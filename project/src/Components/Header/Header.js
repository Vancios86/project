import React from 'react'
import logo from './star-logo.png'
import './Header.css'
import Tilt from 'react-tilt'

export default function Header() {
    return (
        <div className="header">
            <Tilt className="Tilt br2 shadow-5" 
                options={{ max : 75 }} 
                style={{ height: 100, width: 100 }} 
            >
                <div className="Tilt-inner logo "> 
                   <img style={{padding: '2px'}} src={logo} alt=""/> 
                </div>
            </Tilt>
            <div className="nav">
                <p className="f3 link black dim pa3 pointer">Sign In</p>
            </div>
        </div>
    )
}




