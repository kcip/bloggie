import React, { useEffect, useState } from 'react'
import api from '../../services/api-helper'
import { getComments } from '../../services/comments';
const ShowComments = (props) => {
 const id = props.info.match.params.id;

 const [comments, setComments] = useState([])

 useEffect(() => {
  fetchComments()

 }, [comments, setComments])


 const fetchComments = async () => {
  const resp = await api.get(`/posts/${id}/comments`);
  const postComments = await getComments(id)
  setComments(postComments)
 }



 return (
  <div>
   {comments && comments.filter(comment => comment.post_id == id).map(filteredComment => (
    <>
     <h3>{filteredComment.name}</h3>
     <p>{filteredComment.body}</p>
    </>
   ))}
  </div>
 )
}
export default ShowComments;