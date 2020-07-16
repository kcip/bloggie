import React from 'react';
import { Link } from "react-router-dom"
import './postStyles.scss';

const PostCard = (props) => {
 // https://stackoverflow.com/questions/34860277/truncate-text-in-reactjs/36670484
 const shortenText = (str) => {
  return str.length > 300 ? str.substring(0, 250) + '...' : str;
 }
 const postData = props.data.posts;
 console.log(postData)
 return (
  <div className="postCard">
   {postData && postData.slice(0, 6).map((post, i) => (
    <div className="post__content" key={i}>
     <div className="post__content--outerContainer">
      <div className="post__content--container">
       <div className="img img--one" style={{ backgroundImage: `url(${post.post_photo})` }}></div>
      </div>
      <div className="post__content--text">
       <div className="text__container">
        <h2 className="post__title">{post.post_title}</h2>
       </div>
       <div className="postcontent">
        <p>{shortenText(post.post_content)}</p>
        <div className="postButton">
         <Link to={`/posts/${post.id}`}>read more</Link>
        </div>
       </div>
      </div>
      <div className="post__metatag">
       <p className="post__date">{post.created_at}</p>
       <p className="post__comment">
        {/* <i class="fas fa-comments"></i> */}
      20 comments</p>
      </div>
     </div>
    </div>
   ))}

  </div>
 )

}
export default PostCard;