import React from 'react'
import { NavLink, Router, Route } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const Nav = (props) => {
 return (
  <nav className="nav">
   <NavLink exact to={{ pathname: '/auth/login' }}>
    <FontAwesomeIcon icon={faUser} size="4x" style={{ color: 'red' }} />
   </NavLink>



   {/* <button className="signin">signin</button>
   <button className="signout">signout</button>
   <p className="username">username</p> */}
  </nav>
 )
}
export default Nav;