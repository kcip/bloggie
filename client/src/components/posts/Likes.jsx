import React, { useState, useEffect } from 'react'
import api from '../../services/api-helper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
const Likes = (props) => {
 const id = props.info.match.params.id;
 const [likes, setLikes] = useState(0);
 useEffect(() => {
  fetchLikes()

 }, [likes])

 const fetchLikes = async () => {
  const resp = await api.get(`/posts/${id}/likes`);
  const postLikes = resp.data
  const like = postLikes.filter(like => like.post_id == id)
  setLikes(parseInt(like.length));
 }

 const postLikes = async () => {
  const id = props.info.match.params.id;
  const resp = await api.post(`/posts/${id}/likes`, { user_id: id, post_id: id });
  console.log(resp)
  return resp.data;
 }

 const likesCount = () => {
  setLikes(likes + 1)
  postLikes()
 }

 return (
  <div className="likes">
   <div className="likes--button">
    <button onClick={likesCount}>Like</button>
   </div>
   <div className="likes--details">
    <div className="likes--details-side1">
     <p>{likes}</p>
    </div>
    <div className="likes--details-side2">
     <FontAwesomeIcon icon={faHeart} style={likes === 0 ? { color: '#333' } : { color: 'red' }} />
    </div>
   </div>
  </div>
 )
}
export default Likes;

