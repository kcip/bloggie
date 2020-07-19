import React from 'react'
import { Link } from "react-router-dom"
import './shared.scss';
import Nav from './Nav';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
const Header = (props) => {
 const { currentUser, handleLogout } = props


 return (
  <header>
   <Link exact to="/">home</Link>
   <Link exact to="/posts/new">create post</Link>
   <Nav />
   <button onClick={handleLogout}>logout</button>
  </header>
 )
}
export default Header;