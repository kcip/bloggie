import React, { useState, useEffect } from 'react'
import api from '../../services/api-helper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


const Likes = (props) => {
 const id = props.info.match.params.id;
 const [likes, setLikes] = useState(0);

 useEffect(() => {
  fetchLikes()

 }, [])

 const fetchLikes = async () => {
  const resp = await api.get(`/posts/${id}/likes`);
  const postLikes = resp.data
  // setLikes(postLikes)
 }


 const likesCount = () => {
  setLikes(likes + 1)
 }

 return (
  <div className="likes">
   <p>likes: {likes}  <FontAwesomeIcon icon={faHeart} style={likes === 0 ? { color: '#333' } : { color: 'red' }} /></p>
   <button onClick={likesCount}>Like</button>
  </div>
 )
}
export default Likes;