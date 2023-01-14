import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCaretDown, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';


const Navbar = () => {
    const { user, logout } = useContext(AuthContext)

    const { data: categoriesItems = [] } = useQuery({
        queryKey: "categoriesItems",
        queryFn: async () => {
            const res = await fetch("https://revive-mobile-server.vercel.app/categories")
            const data = await res.json()
            return data;
        }
    })

    const handleLogout = () => {
        logout()
            .then(() => {
                toast.success("Successfully logout")
            })
            .catch(err => console.error(err))
    }


    const navItem = <>
        <li>
            <Link to='/'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 lg:w-5 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                <span className="btm-nav-label lg:text-lg">Home</span>
            </Link>
        </li>
        <li tabIndex={0}>
            <Link to="/allAds" className='lg:text-lg md:text-lg'>All Ads</Link>
        </li>
        <li tabIndex={0}>
            <Link className="lg:text-lg md:text-lg">
                Category <FaCaretDown></FaCaretDown>
            </Link>
            <ul className="p-2 shadow-md bg-white">
                {
                    categoriesItems.map(category => <li key={category._id}>
                        <Link to={`categories/${category._id}`}>{category.name}</Link>
                    </li>)
                }
            </ul>
        </li>
        <li>
            <Link to='/blog' className='lg:text-lg md:text-lg'>Blog</Link>
        </li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100	lg:border-b-2 lg:border-primary">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                            {navItem}
                        </ul>
                    </div>
                    <Link to='/' className='lg:flex md:flex  items-center '>
                        <img
                            className='lg:w-16 md:w-16 w-10 '
                            src="https://i.ibb.co/PgQrkn4/revive-mobile-logo-removebg-preview.png" alt="" />
                        <p className="lg:text-xl md:text-xl lg:ml-4 md:ml-4 text-cyan-500 lg:font-semibold md:font-semibold"><span className='lg:text-3xl md:text-2xl	'>R</span>evive<span className='lg:text-3xl md:text-2xl	'>M</span>obile</p>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>

                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <Link htmlFor="revive-drawer" to='/dashboard' className='btn lg:btn-sm md:btn-sm btn-xs btn-ghost lg:mr-2 md:mr-2 font-bold '>
                            Dashboard
                            <div className=' w-full pb-1 rounded-full bg-cyan-700 '></div>
                        </Link>
                    </div>
                    {user?.uid ?
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <>
                                    {user?.photoURL ?
                                        <div className="w-10 rounded-full">
                                            <img src="https://placeimg.com/80/80/people" alt='' />
                                        </div>
                                        :
                                        <div className="w-10 rounded-full">
                                            <img className='  bg-cyan-600'
                                                src="https://i.ibb.co/Qk36cwY/unknown-P-profile-removebg-preview.png" alt='' />
                                        </div>
                                    }
                                </>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-lg " >
                                <div className=' border'>
                                    {
                                        <h2 className='mt-3 mx-2  lg:text-lg text-sm text-center text-primary font-semibold'>
                                            {user.displayName}
                                        </h2>
                                    }
                                    {
                                        user?.photoURL ||
                                        <span className=' divider w-11/12 mx-auto my-0'></span>
                                    }
                                    <div className='p-1' >
                                        {user?.photoURL ||
                                            <>
                                                <p className=' text-secondary text-center  mb-4'>
                                                    Update photo
                                                </p>

                                                <input type="file"
                                                    className='w-52  text-secondary  mb-4 border'
                                                />
                                                <div className='text-center mb-2'>
                                                    <button className="badge  badge-primary badge-outline ">Submit</button>
                                                </div>
                                            </>
                                        }
                                    </div>
                                </div>

                                <li className='mt-4'>
                                    <Link
                                        className=' lg:text-lg bg-primary text-white'
                                        onClick={handleLogout} >
                                        <FaSignOutAlt></FaSignOutAlt> Logout
                                    </Link></li>

                            </ul>
                        </div>
                        :
                        <div className='tooltip tooltip-left lg:text-2xl md:text-2xl text-lg bg-black text-primary p-2 rounded-full' data-tip="Login">
                            <Link to="/login"><FaSignInAlt></FaSignInAlt></Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;