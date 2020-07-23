import React, { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
const Posts = (props) => {
 // const postData = props.data.posts;
 const [postData, setPostData] = useState([])

 useEffect(() => {
  const postData = props.data.posts;
  setPostData(postData)
  window.scrollTo(0, 0);
 }, [])
 // https://stackoverflow.com/questions/34860277/truncate-text-in-reactjs/36670484
 // const shortenText = (str) => {
 //  return str.length > 500 ? str.substring(0, 550) + '...' : str;
 // }


 return (
  <div className="postsContainer">
   <h2 className="post-h2">posts</h2>
   {postData && postData.map((post, i) => (
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
   ))}
  </div>
 )
}
export default withRouter(Posts);
