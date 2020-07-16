import React, { useState, useEffect } from 'react'
import { getPost } from '../../services/posts'
const EditPost = (props) => {
 const [post, setPost] = useState([]);
 const { handlePostUpdate, history } = props;

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
    handlePostUpdate({ post_title: post_title, post_photo: post_photo, post_content: post_content });
   }}>
    <label>Post Title:
     <input
      type="text"
      value={post_title}
      onChange={e => setPost(e.target.value)}
     />
    </label>

    <label>Post Photo:
     <input
      type="text"
      value={post_photo}
      onChange={e => setPost(e.target.value)}
     />
    </label>
    <label>Post Content:
     <textarea
      type="text"
      value={post_content}
      onChange={e => setPost(e.target.value)}
     />
    </label>
    <button>submit</button>
   </form>
  </div>
 )
}
export default EditPost;