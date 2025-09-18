import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center text-accent px-5 py-3'>
            <div className=''></div>
            <div className="nav flex gap-5">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about" >About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="login-btn flex gap-5 ">
                <img src={user} alt="" className="w-10 h-10 rounded-full object-cover"/>
                {/* <NavLink to="/auth/login" className="btn btn-primary px-10">Login</NavLink> */}
                <NavLink 
  to="/auth/login" 
  className={({ isActive }) =>
    `btn px-10 ${isActive ? "btn-secondary" : "btn-primary"}`
  }
>
  Login
</NavLink>
            </div>
        </div>
    );
};

export default Navbar;