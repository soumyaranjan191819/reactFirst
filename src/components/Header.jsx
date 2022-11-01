import React from 'react'
import "../style.css/Header.css"
import {Link} from "react-router-dom";
const Header = () => {
  return (
     <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
     </nav>
  )
}

export default Header
