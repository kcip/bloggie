import React, { useState, useEffect } from 'react'
import api from '../../services/api-helper'
import { getComments } from '../../services/comments';
const Comment = (props) => {
 const id = props.info.match.params.id;
 const [name, setName] = useState('');
 const [comments, setComments] = useState([]);

 useEffect(() => {
  fetchComments()

 }, [setComments])

 const fetchComments = async () => {
  const resp = await api.get(`/posts/${id}/comments`);
  const postComments = await getComments(id)
  setComments(postComments)
 }

 const postComments = async (name, comment) => {
  const id = props.info.match.params.id;
  const resp = await api.post(`/posts/${id}/comments`, { name, comment });
  console.log(resp)
  return resp.data;
 }

 return (
  <>
   <div>
    {comments && comments.filter(comment => comment.post_id == id).map(filteredComment => (
     <>
      <h3>{filteredComment.name}</h3>
      <p>{filteredComment.body}</p>
     </>
    ))}
   </div>
   <div>
    comments
   <form onSubmit={(e) => {
     e.preventDefault()
     postComments(id, { name: name, body: comments })
    }}>
     <label>
      <input
       type="text"
       value={name}
       name="name"
       onChange={e => setName(e.target.value)}
      />
     </label>

     <textarea
      placeholder="leave a comment..."
      value={''}
      name="comment"
      onChange={e => setComments(e.target.value)}
     />
     <button>comment</button>
    </form>
   </div>
  </>
 )
}
export default Comment;