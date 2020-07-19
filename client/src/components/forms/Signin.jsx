import React, { Fragment, useState } from 'react'
import { withRouter, Link } from 'react-router-dom';
import './forms.scss';
const Signin = (props) => {
 const [signIn, setSignIn] = useState('')
 const [pass, setPass] = useState('')
 const { handleLogin, history } = props;
 return (
  <Fragment>
   <div className="form">
    <h2 className="text">Sign in</h2>
    <form className='userForm' autoSave="off" onSubmit={(e) => {
     e.preventDefault();
     handleLogin({ username: signIn, password: pass });
     history.push('/');
     setSignIn('')
     setPass('')

    }}>
     <label>
      <p>Username:</p>
      <input
       autofill="off"
       autocomplete="off"
       type="text"
       value={signIn}
       onChange={e => setSignIn(e.target.value)} />
     </label>

     <label>
      <p>Password:</p>
      <input
       autofill="off"
       autocomplete="off"
       type="password"
       value={pass}
       onChange={e => setPass(e.target.value)} />
     </label>
     <button className="button">submit</button>
    </form>

    <div className="signUp">
     <Link to="/register">Sign up</Link>
    </div>

   </div>

  </Fragment>
 )
}

export default withRouter(Signin);