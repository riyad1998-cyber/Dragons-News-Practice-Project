import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from "../assets/user.png"
import { AuthContext } from '../Provider/Authprovider';

const Navbar = () => {
    const {user, logOut} = use(AuthContext)
    const handleLogout = (e)=>{
        e.preventDefault();
        logOut()
        .then(()=>{
            alert("Logged Out successfully")
        })
        .catch(error =>{
            alert("An Error happaned")
        })
    }
    return (
        <div className='flex justify-between items-center'>
           <div className=''>{user && user.email}</div>

<div className='nav flex gap-5 text-accent'>
<NavLink to="/">Home</NavLink>
<NavLink to="/about">About</NavLink>
<NavLink to="/career">Career</NavLink>
</div>

<div className='login-btn flex gap-5'>
    <img src={`${user ? user.photoURL : userIcon}`} alt="" />
    {
        user ? <Link onClick={handleLogout} className='btn btn-primary px-8'>Logout</Link> :  <Link to="/auth/login" className='btn btn-primary px-8'>Login</Link>
    }
   
</div>

        </div>
    );
};

export default Navbar;