import React, { useState, useEffect } from 'react'
import { getPost } from '../../services/posts'

const Post = (props) => {
 const [post, setPost] = useState([]);
 // const data = props.data.posts;
 useEffect(() => {

  fetchData()

 }, [])

 const fetchData = async () => {
  const id = props.info.match.params.id;
  const postData = await getPost(id)
  const data = props.data.posts
  setPost(postData)

 }

 const { post_title, post_content, post_photo, user_id, created_at, updated_at } = post
 return (

  <div className="post">
   Post Here
   <h2>{post_title}</h2>
   <img src={post_photo} alt={post_title} />
   <p>{post_content}</p>
   <h5>{created_at}</h5>
  </div>
 )
}
export default Post;