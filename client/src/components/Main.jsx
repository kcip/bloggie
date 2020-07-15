import React, { useEffect, useState, Fragment } from 'react';
import { Route } from "react-router-dom";
import { loginUser, registerUser, removeToken, verifyUser } from '../services/auth';
import Header from './shared/Header';
import Footer from './shared/Footer';
import { getAllPosts, postPost, putPost, deletePost } from '../services/posts';
import PostCard from './posts/PostCard';
import Posts from './posts/Posts';
import CreatePost from './forms/CreatePost';
import Signin from './forms/Signin';
import Signup from './forms/Signup';
const Main = (props) => {
 const [post, setPost] = useState({})

 const [currentUser, setCurrentUser] = useState(null);


 useEffect(() => {
  fetchPosts()
 }, [])

 const fetchPosts = async () => {
  const posts = await getAllPosts();
  setPost({ posts })
 }

 const handlePostCreate = async (postData) => {
  const newPost = await postPost(postData);
  console.log(postData)
  setPost(prevPost => prevPost.posts, newPost)
 }



 const handleLogin = async (userData) => {
  console.log(userData)
  const currentUser = await loginUser(userData);
  setCurrentUser(currentUser)
 }

 const handleRegister = async (userData) => {
  const currentUser = await registerUser(userData);
  setCurrentUser(currentUser)
 }
 const handleLogout = () => {
  setCurrentUser(null);
  localStorage.removeItem('authToken');
  removeToken();
  //check this later
  this.props.history.push('/')
 }

 // const handleVerify = async () => {
 //  const currentUser = await verifyUser();
 //  setCurrentUser(currentUser)
 // }




 return (
  <Fragment>
   <Header data={props.currentUser}
    currentUser={currentUser}
   // handleLogout={handleLogout}
   />
   <div className="main">

    <Route path="/auth/login" exact render={(props) => <Signin data={props} handleLogin={handleLogin} />} />
    <Route path="/register" exact render={() => <Signup handleRegister={handleRegister} />} />
    <Route path="/" exact render={() => <PostCard data={post} />} />
    <Route path="/" exact render={() => <Posts data={post} />} />
    <Route path='/posts/new' render={(props) => (
     <CreatePost
      {...props}
      handlePostCreate={handlePostCreate}
     />
    )} />
   </div>
   <Footer />
  </Fragment>
 )
}
export default Main;