import React, { useContext } from 'react';
import logo from "../../public/logo.svg"
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Navbar = () => {
    const{user,signOutUser}=useContext(AuthContext);
    const handleLogOut = ()=>{
        signOutUser()
        .then()
        .catch()
    }
    const navLinks = <>
    <Link to={'/'}><li><h2>Home</h2></li></Link>
    {
        user?.email?
        <>
        <li onClick={handleLogOut}><h2>Logout</h2> </li>
        <Link to={'/bookings'}><li ><h2>My Bookings</h2></li></Link>
        </>
        
        :
        
        <Link to={'/login'}><li><h2>Login</h2></li></Link>
    }
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                       {navLinks}
                        
                    </ul>
                </div>
              <Link to={'/'}> <img className='h-14' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-warning bg-transparent border-red-700 text-red-700">Appointment</a>
            </div>
        </div>
    );
};

export default Navbar;