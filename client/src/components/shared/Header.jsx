import React from 'react'
import { Link } from "react-router-dom"
import './shared.scss';
import Nav from './Nav';
const Header = (props) => {
 const { currentUser, handleLogout } = props


 return (
  <header>
   <Link exact to="/">Header</Link>
   <Link exact to="/posts/new">Create Post</Link>
   <Nav />
   <button onClick={handleLogout}>logout</button>
  </header>
 )
}
export default Header;