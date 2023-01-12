import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaCaretDown, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)

    const { data: categoriesItems = [], isLoading } = useQuery({
        queryKey: "categoriesItems",
        queryFn: async () => {
            const res = await fetch('http://localhost:4000/categories');
            const data = await res.json();
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
        <li><Link to='/' className='lg:text-lg md:text-lg' >Home</Link></li>
        <li tabIndex={0}>
            <Link className='lg:text-lg md:text-lg'>All Ads</Link>
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
            <Link to='' className='lg:text-lg md:text-lg'>Blog</Link>
        </li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100	">
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
                        {/* <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label> */}

                        <Link to='/dashboard' className='btn lg:btn-sm md:btn-sm btn-xs btn-ghost lg:mr-2 md:mr-2 font-bold '>
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
                                        <h2 className='mt-3 mx-2  lg:text-lg text-center text-primary font-semibold'>
                                            {user.displayName}
                                        </h2>
                                    }
                                    {
                                        user?.photoURL &&
                                        <span className=' divider w-11/12 mx-auto my-0'></span>
                                    }
                                    <div className='p-1' >
                                        {user?.photoURL &&
                                            <>
                                                <p className=' text-secondary text-center  mb-4'>
                                                    Update photo
                                                </p>

                                                <input type="file"
                                                    className='w-52  text-secondary  mb-4 border'
                                                />
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