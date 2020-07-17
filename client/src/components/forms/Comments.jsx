import React, { useState } from 'react'
// const { handlePostCreate } = props
const Comments = (props) => {
 const [name, setName] = useState('');
 const [comment, setComment] = useState('');

 return (
  <div>
   comments
   <form>
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