import React, { useState, useEffect } from 'react'
import { getPost } from '../../services/posts'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import Comments from '../forms/Comments';
import ShowComments from './ShowComments';
import Likes from './Likes'
import './postStyles.scss'
const Post = (props) => {
 const { currentUser } = props
 const [post, setPost] = useState([]);

 useEffect(() => {
  fetchData()
  window.scrollTo(0, 0);

 }, [])

 const fetchData = async () => {
  const id = props.info.match.params.id;
  const postData = await getPost(id)
  const data = props.data.posts
  setPost(postData)
 }

 const { post_title, post_content, post_photo, user_id, created_at, updated_at } = post
 return (

  <div className="postContainer">
   <div className="post">
    <div className="post--image">
     <img src={post_photo} alt={post_title} />
    </div>
    <div className="post--details">
     <h2>{post_title}</h2>
     <h5>{created_at}</h5>
    </div>
    <div className="post--content">
     <p>{post_content}</p>
    </div>
    <div className="post--likes">
     <Likes {...props} />
    </div>
    {currentUser ? <div className="post--edit">
     <button onClick={() => props.handlePostDelete(post.id)}><FontAwesomeIcon icon={faTrash} /></button>
     <Link to={`/posts/${post.id}/edit`}><button><FontAwesomeIcon icon={faEdit} /></button></Link>
    </div> : null}
   </div>
   <div className="post--comments">
    <Comments {...props} />
    <ShowComments {...props} />
   </div>
  </div>
 )
}
export default Post;
