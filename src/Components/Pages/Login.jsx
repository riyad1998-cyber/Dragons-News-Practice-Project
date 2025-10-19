import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/Authprovider';

const Login = () => {
  const [error, setError] = useState("")
  const{loginUser} = use(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
    .then(result=>{
      const user = result.user;
      navigate(`${location.state ? location.state : "/"}`)
    })
    .catch(error=>{
      const errorCode = error.code;
      // const errorMessage = error.message;
      setError(errorCode)
    })
  }
    return (  
   <div className='flex justify-center min-h-screen items-center'>
     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className='font-bold text-2xl text-center text-secondary'>Login your account</h2>
      <div className="card-body">
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" required/>

          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" required />

          <div><a className="link link-hover">Forgot password?</a></div>
          
          {
            error && <p className='text-red-500'>{error}</p>
          }
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
          <p className='font-semibold text-center pt-3'>Dont't Have An Account ?<Link className='text-secondary' to="/auth/register"> Register</Link></p>
        </fieldset>
        </form>
      </div>
    </div>
   </div>
    );
};

export default Login;