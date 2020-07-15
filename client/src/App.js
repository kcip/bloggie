import React, { useState, useEffect } from 'react'
import { verifyUser } from './services/auth';
import Main from './components/Main';
import './App.scss'
const App = () => {
 const [currentUser, setCurrentUser] = useState(null);

 useEffect(() => {

 }, []);

 // const handleLogin = async (userData) => {
 //  const currentUser = await loginUser(userData);
 //  setCurrentUser(currentUser)
 // }

 // const handleRegister = async (userData) => {
 //  const currentUser = await registerUser(userData);
 //  setCurrentUser(currentUser)
 // }
 // const handleLogout = () => {
 //  setCurrentUser(null);
 //  localStorage.removeItem('authToken');
 //  removeToken();
 //  //check this later
 //  this.props.history.push('/')
 // }

 const handleVerify = async () => {
  const currentUser = await verifyUser();
  setCurrentUser(currentUser)
 }

 return (
  <div className="sticky">
   <Main
    currentUser={currentUser}
    // handleLogin={handleLogin}
    handleVerify={handleVerify}
   // handleLogout={handleLogout}
   // handleRegister={handleRegister}
   />
  </div>
 )
}
export default App
