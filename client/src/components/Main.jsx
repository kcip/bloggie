import React, { useEffect, useState, Fragment } from 'react';
import { Route, Switch, withRouter, Link } from "react-router-dom";
import { loginUser, registerUser, removeToken, verifyUser } from '../services/auth';
import Header from './shared/Header';
import Hero from './shared/Hero';
import Footer from './shared/Footer';
import { getAllPosts, postPost, putPost, deletePost } from '../services/posts';
import PostCard from './posts/PostCard';
import Posts from './posts/Posts';
import Post from './posts/Post';
import CreatePost from './forms/CreatePost';
import Signin from './forms/Signin';
import Signup from './forms/Signup';
import EditPost from './forms/EditPost';
import PostLink from './posts/PostLink';
const Main = (props) => {
 const [post, setPost] = useState({})
 const [currentUser, setCurrentUser] = useState(null);

 useEffect(() => {
  fetchPosts()
  handleVerify()

 }, [])

 //POST FUNCTIONS
 const fetchPosts = async () => {
  const posts = await getAllPosts();
  setPost({ posts })
 }

 const handlePostCreate = async (postData) => {
  const newPost = await postPost(postData);
  console.log(postData)
  setPost(prevPost => prevPost.posts, newPost)
 }

 const handlePostUpdate = async (id, postData) => {
  const newPost = await putPost(id, postData);
  setPost(prevPost => ({
   posts: prevPost.posts.map(post => post.id === parseInt(id) ? newPost : post)
  }))
 }

 const handlePostDelete = async (id) => {
  await deletePost(id);
  setPost(prevPost => ({
   posts: prevPost.posts.map(post => post.id === parseInt(id))
  }))
 }

 //AUTH Functions
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
  props.history.push('/')
 }

 const handleVerify = async () => {
  const currentUser = await verifyUser();
  setCurrentUser(currentUser)
 }

 return (
  <Fragment>
   <Header data={props.currentUser}
    currentUser={currentUser}
    handleLogout={handleLogout}
   />
   <div className="main">
    <Switch>

     <Route path="/auth/login" exact render={(props) => <Signin data={props} handleLogin={handleLogin} />} />
     <Route path="/register" exact render={() => <Signup handleRegister={handleRegister} />} />

     <Route path="/" exact  >
      <Hero />
      <PostCard data={post} />
      <PostLink />
      {/* <Posts data={post} /> */}
     </Route>

     <Route path="/posts" exact >
      <Posts data={post} />
     </Route>

     <Route path='/posts/new' exact render={(props) => (
      <CreatePost
       {...props}
       handlePostCreate={handlePostCreate}
      />
     )} />

     <Route exact path="/posts/:id" render={(props) => {
      const { id } = props.match.params;
      return <Post info={props}
       currentUser={currentUser}
       handlePostDelete={handlePostDelete} data={post} id={id}
      />
     }} />

     <Route exact path="/posts/:id/edit" render={(props) => {
      const { id } = props.match.params;
      return <EditPost info={props}
       handlePostUpdate={handlePostUpdate} data={post} id={parseInt(id)}
      />
     }} />
    </Switch>

   </div>
   <Footer />
  </Fragment>
 )
}
export default withRouter(Main);