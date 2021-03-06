import React, { useState } from 'react'
import api from '../../services/api-helper'
const Comments = (props) => {
 const [name, setName] = useState('');
 const [comment, setComment] = useState('');
 const { id } = props;

 const putComments = async (name, comment) => {
  const id = props.info.match.params.id;
  const resp = await api.post(`/posts/${id}/comments`, { name, comment });
  console.log(resp)
  return resp.data;
 }

 return (
  <div className="comments">
   <h3>comments</h3>
   <form className="comments--form" onSubmit={(e) => {
    e.preventDefault()
    putComments(id, { name: name, body: comment })
   }}>
    <label>
     <input
      placeholder="name"
      type="text"
      value={name}
      name="name"
      onChange={e => setName(e.target.value)}
     />
    </label>

    <textarea
     placeholder="leave a comment..."
     value={comment}
     name="comments"
     onChange={e => setComment(e.target.value)}
    />
    <button>comment</button>
   </form>
  </div>
 )
}
export default Comments