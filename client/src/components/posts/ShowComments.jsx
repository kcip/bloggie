import React, { useEffect, useState } from 'react'
import api from '../../services/api-helper'
import { getComments } from '../../services/comments';
const ShowComments = (props) => {
 const id = props.info.match.params.id;

 const [comments, setComments] = useState([])


 ///////////////////////////// NEED FIXING //////////////////////
 useEffect(() => {
  fetchComments()

 }, [])


 const fetchComments = async () => {
  const resp = await api.get(`/posts/${id}/comments`);
  const postComments = await getComments(id);
  const comment = postComments.filter(comment => comment.post_id == id)
  setComments(comment)
 }



 return (
  <div className="comments--wrapper">
   {/* {comments && comments.filter(comment => comment.post_id == id).map(filteredComment => ( */}
   {comments && comments.map((comment, i) => (
    <div className="comments--container">
     <p className="comments--name">{comment.name}</p>
     <p className="comments--body">{comment.body}</p>
     <p className="comments--date">{comment.updated_at}</p>
    </div>
   ))}
   <>
    {/* <h3>{filteredComment.name}</h3>
     <p>{filteredComment.body}</p> */}
   </>
   {/* ))} */}
  </div>
 )
}
export default ShowComments;