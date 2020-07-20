import React from 'react'
import { Link } from "react-router-dom"
import './shared.scss';
import Nav from './Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
const Header = (props) => {
 const { currentUser, handleLogout } = props


 return (
  <header>
   <div className="header--container">
    <Link exact to="/"><FontAwesomeIcon icon={faHome} /></Link>
    {currentUser ? <Link exact to="/posts/new">create post</Link> : null}
    {currentUser ? <button onClick={handleLogout}>logout</button> : null}
   </div>

   <Nav currentUser={currentUser} {...props} />
  </header>
 )
}
export default Header;