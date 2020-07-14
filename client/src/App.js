import React, { useState, useEffect } from 'react'
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth'
const App = () => {
 const [currentUser, setCurrentUser] = useState(null);

 useEffect(() => {

 }, []);

 handleLogin = async (userData) => {
  const currentUser = await loginUser(userData);
  setCurrentUser(currentUser)
 }

 handleRegister = async (userData) => {
  const currentUser = await registerUser(userData);
  setCurrentUser(currentUser)
 }
 handleLogout = () => {
  setCurrentUser(null);
  localStorage.removeItem('authToken');
  removeToken();
  //check this later
  this.props.history.push('/')
 }

 handleVerify = async () => {
  const currentUser = await verifyUser();
  setCurrentUser(currentUser)
 }

 return (
  <div>
   app here
  </div>
 )
}
export default App
