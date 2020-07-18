import React, { useState, useEffect } from 'react'
import { getPost } from '../../services/posts'
const EditPost = (props) => {
 const [post, setPost] = useState([]);
 const { handlePostUpdate, history, id } = props;

 useEffect(() => {
  fetchData()
 }, []);


 const fetchData = async () => {
  const id = props.info.match.params.id;
  const postData = await getPost(id)
  const data = props.data.posts
  setPost(postData)
 }

 const { post_title, post_content, post_photo } = post
 return (
  <div>
   <form onSubmit={(e) => {
    e.preventDefault();
    handlePostUpdate(id, { post_title: post_title, post_photo: post_photo, post_content: post_content });

   }}>
    <label>Post Title:
     <input
      type="text"
      value={post_title}
      name="post_title"
      onChange={e => {
       const { name, value } = e.target
       setPost(prevPost => ({ ...prevPost, [name]: value }))
      }}
     />
    </label>

    <label>Post Photo:
     <input
      type="text"
      value={post_photo}
      name="post_photo"
      onChange={e => {
       const { name, value } = e.target
       setPost(prevPost => ({ ...prevPost, [name]: value }))
      }}
     />
    </label>
    <label>Post Content:
     <textarea
      type="text"
      value={post_content}
      name="post_content"
      onChange={e => {
       const { name, value } = e.target
       setPost(prevPost => ({ ...prevPost, [name]: value }))
      }}
     />
    </label>
    <button>submit</button>
   </form>
  </div>
 )
}
export default EditPost;