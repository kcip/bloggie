import React from 'react'
import { withRouter, Link } from 'react-router-dom';
const Posts = (props) => {
 const posts = props.data.posts;
 return (
  <div>
   {posts && posts.map((post, i) => (
    <Link to={`/posts/${post.id}`}>
     <div key={i} className='posts'>
      <p className="posts--title">{post.post_title}</p>
      <p className="posts--content">{post.post_content}</p>
      <img className="posts--image" src={post.post_photo} alt={post.post_title} />
     </div>
    </Link>

   ))}
  </div>
 )
}
export default Posts;