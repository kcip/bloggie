import React, { Fragment, useState } from 'react'
import { withRouter, Link } from 'react-router-dom';
const Signin = (props) => {
 const [signIn, setSignIn] = useState('')
 const [pass, setPass] = useState('')
 const { handleLogin, history } = props;
 return (
  <Fragment>
   Sign in
   <form className='userForm' onSubmit={(e) => {
    e.preventDefault();
    handleLogin({ username: signIn, password: pass });
    history.push('/');
    setSignIn('')
    setPass('')
   }}>
    <label>Username:
     <input
      type="text"
      value={signIn}
      onChange={e => setSignIn(e.target.value)} />
    </label>

    <label>Password:
     <input
      type="password"
      value={pass}
      onChange={e => setPass(e.target.value)} />
    </label>
    <button>submit</button>
   </form>

   <Link to="/register">Sign up</Link>
  </Fragment>
 )
}

export default withRouter(Signin);