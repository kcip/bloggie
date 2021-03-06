import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
const Nav = (props) => {
 const { currentUser } = props
 return (
  <nav className="nav">
   <NavLink exact to={{ pathname: '/auth/login' }}>
    {currentUser ? <img className="profilePhoto" src={props.currentUser && props.currentUser.profile_img_url} alt="user" /> : <FontAwesomeIcon icon={faUser} size="4x" />}
   </NavLink>
  </nav>
 )
}
export default Nav;