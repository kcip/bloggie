import React, { Fragment, useState } from 'react'

const Signup = (props) => {
 const [firstName, setFirstName] = useState('');
 const [lastName, setLastName] = useState('');
 const [email, setEmail] = useState('');
 const [username, setUsername] = useState('');
 const [userImage, setUserImage] = useState('');
 const [password, setPassword] = useState('')
 const { handleRegister, history } = props;

 return (
  <Fragment>
   <div className="form--container">
    <div className="form--wrapper">
     <h2>Sign up</h2>
     <form className='signinForm' onSubmit={(e) => {
      e.preventDefault()
      handleRegister({ first_name: firstName, last_name: lastName, email: email, username: username, profile_img_url: userImage, password: password })
      //testing purposes
      history.push('/')
     }}>
      <label>First Name:
     <input
        type="text"
        value={firstName}
        onChange={e => setFirstName(e.target.value)} />
      </label>
      <label>Last Name:
     <input
        type="text"
        value={lastName}
        onChange={e => setLastName(e.target.value)} />
      </label>
      <label>Email:
     <input
        type="text"
        value={email}
        onChange={e => setEmail(e.target.value)} />
      </label>
      <label>Username:
     <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)} />
      </label>
      <label>Profile Image:
     <input
        type="text"
        value={userImage}
        onChange={e => setUserImage(e.target.value)} />
      </label>
      <label>Password:
     <input
        type="text"
        value={password}
        onChange={e => setPassword(e.target.value)} />
      </label>
      <button className="button">submit</button>
     </form>
    </div>

   </div>

  </Fragment>
 )

}
export default Signup;