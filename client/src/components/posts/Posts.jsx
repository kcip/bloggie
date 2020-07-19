import React from 'react'
import { withRouter, Link } from 'react-router-dom';
const Posts = (props) => {
 const posts = props.data.posts;
 // https://stackoverflow.com/questions/34860277/truncate-text-in-reactjs/36670484
 const shortenText = (str) => {
  return str.length > 500 ? str.substring(0, 550) + '...' : str;
 }
 return (
  <div>
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
      <p className="posts--content">{shortenText(post.post_content)}</p>
     </div>
     <div className="posts--link">
      <Link to={`/posts/${post.id}`}>read more</Link>
     </div>

    </div>
    // </Link>

   ))}
  </div>
 )
}
export default Posts;
