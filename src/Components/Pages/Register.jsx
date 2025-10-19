import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/Authprovider';

const Register = () => {
  const {createUser, setUser , updateUser} = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const handleRegister = (e)=>{
    e.preventDefault();
    const name = e.target.name.value;
    if(name.length< 5){
      setNameError("Name should be more than five character")
      return;
    }else{
      setNameError("");
    }
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
    .then(result =>{
      const user = result.user;
      updateUser({displayName : name, photoURL : photo}).theb(()=>{
        setUser({...user, displayName : name, photoURL : photo})
      })
      .catch(error =>{
        console.log(error)
        setUser(user);
      })
    })
    .catch(error =>{
      const errorCode = error.code;
      const errorMessage =  error.message;
      alert(errorMessage);
    })
  }
    return (
      <div className='flex justify-center min-h-screen items-center'>
     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className='font-bold text-2xl text-center text-secondary'>Register Now!</h2>
      <div className="card-body">
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Name" required />

          <label className="label">Photo URL</label>
          <input type="text" name='photo' className="input" placeholder="Photo URL" required/>

          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" required/>

          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" required/>

        
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
          <p className='font-semibold text-center pt-3'>Already Have An Account ?<Link className='text-secondary' to="/auth/login"> Login</Link></p>
        </fieldset>
        </form>
      </div>
    </div>
   </div>
    );
};

export default Register;