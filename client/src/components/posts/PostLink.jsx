import React from 'react'
import { Link } from 'react-router-dom'
import './postStyles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
export default function PostLink() {
 return (
  <div className="postLink">

   <Link to="/posts">
    <p>more posts</p>
    <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '1rem', fontSize: '2rem', color: '#777' }} />
   </Link>
  </div>
 )
}
