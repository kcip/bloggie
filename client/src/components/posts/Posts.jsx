import React from 'react'
import { withRouter, Link } from 'react-router-dom';
const Posts = (props) => {
 const posts = props.data.posts;
 return (
  <div>
   {posts && posts.map((post, i) => (
    <Link to={`/posts/${post.id}`}>
     <div key={i} className='posts'>
      <div className="posts__container">
       <img className="posts--image" src={post.post_photo} alt={post.post_title} />
      </div>
      <div className="post__container">
       <p className="posts--title">{post.post_title}</p>
      </div>
      <div className="post__container">
       <p className="posts--content">{post.post_content}</p>
      </div>


     </div>
    </Link>

   ))}
  </div>
 )
}
export default Posts;
