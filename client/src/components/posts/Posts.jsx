import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
const Posts = (props) => {
 const posts = props.data.posts;

 // https://stackoverflow.com/questions/34860277/truncate-text-in-reactjs/36670484
 // const shortenText = (str) => {
 //  return str.length > 500 ? str.substring(0, 550) + '...' : str;
 // }
 return (
  <div className="postsContainer">
   {console.log(posts)}
   <h2 className="post-h2">posts</h2>
   {posts && posts.map((post, i) => (
    // <Link to={`/posts/${post.id}`}>
    <div key={i} className='posts'>
     <div className="posts__container">
      <img className="posts--image" src={post.post_photo} alt={post.post_title} />
     </div>
     <div className="post__container">
      <h2 className="posts--title">{post.post_title}</h2>
     </div>
     <div className="post__container">
      <p className="posts--content">
       <FontAwesomeIcon icon={faQuoteLeft} className="quotes left" />
       {post.post_content}
       <FontAwesomeIcon icon={faQuoteRight} className="quotes right" />
      </p>
     </div>
     <div className="posts--link">
      <Link to={`/posts/${post.id}`}>read more!</Link>
     </div>

    </div>
    // </Link>

   ))}
  </div>
 )
}
export default withRouter(Posts);
