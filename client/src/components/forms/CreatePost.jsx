import React, { useState } from 'react'

const CreatePost = (props) => {
 const { handlePostCreate, history } = props;
 // console.log(props)
 const [name, setName] = useState('');
 const [photo, setPhoto] = useState('');
 const [text, setText] = useState('');

 const clearInputs = () => {
  setName('');
  setPhoto('');
  setText('')
 }
 return (
  <div>
   <h2>Create Post</h2>
   {/* handleLogin({ username: signIn, password: pass }); */}
   <form onSubmit={(e) => {
    e.preventDefault();
    handlePostCreate({ post_title: name, post_photo: photo, post_content: text });
    history.push('/posts')
   }}>
    <label>Post Title:
     <input
      type="text"
      value={name}
      onChange={e => setName(e.target.value)}
     />
    </label>

    <label>Post Photo:
     <input
      type="text"
      value={photo}
      onChange={e => setPhoto(e.target.value)}

     />
    </label>
    <label>Post Content:
     <textarea
      type="text"
      value={text}
      onChange={e => setText(e.target.value)}

     />
    </label>
    <button>submit</button>
   </form>
  </div>
 )
}
export default CreatePost;