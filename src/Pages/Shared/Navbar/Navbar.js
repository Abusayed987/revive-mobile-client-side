import React from 'react';
import { Link } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa';

const Navbar = () => {
    const navItem = <>
        <li><Link to='/' className='lg:text-lg md:text-lg' >Home</Link></li>
        <li tabIndex={0}>
            <Link className='lg:text-lg md:text-lg'>All Ads</Link>
        </li>
        <li tabIndex={0}>
            <Link className="lg:text-lg md:text-lg">
                Category <FaCaretDown></FaCaretDown>
            </Link>
            <ul className="p-2 shadow-md bg-white">
                <li><Link>Basic </Link></li>
                <li><Link>Android </Link></li>
                <li><Link>iOS </Link></li>
            </ul>
        </li>
        <li>
            <Link to='' className='lg:text-lg md:text-lg'>Blog</Link>
        </li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                            {navItem}
                        </ul>
                    </div>
                    <Link to='/' className='lg:flex md:flex  items-center '>
                        <img
                            className='lg:w-16 md:w-16 w-10 '
                            src="https://i.ibb.co/PgQrkn4/revive-mobile-logo-removebg-preview.png" alt="" />
                        <p className="lg:text-xl md:text-xl lg:ml-4 md:ml-4 text-cyan-700 lg:font-semibold md:font-semibold"><span className='lg:text-3xl md:text-2xl	'>R</span>evive<span className='lg:text-3xl md:text-2xl	'>M</span>obile</p>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>

                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        {/* <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label> */}
                        <Link className='btn btn-ghost lg:mr-2 md:mr-2 font-bold'>
                            Dashboard
                            <div className=' w-full pb-1 rounded-full bg-cyan-700 '></div>
                        </Link>
                        {/* <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" alt='' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><Link>Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;