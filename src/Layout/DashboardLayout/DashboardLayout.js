import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';

import Navbar from '../../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="revive-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content w-11/12 mx-auto">
                    <label htmlFor="revive-drawer" className="lg:hidden">
                        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                    </label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side lg:shadow-xl">
                    <label htmlFor="revive-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* as a buyer  */}
                        <li><Link className='lg:text-lg md:text-lg'>
                            My Orders
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        </Link></li>
                        {/* as a  seller  */}
                        <li><Link className='lg:text-lg md:text-lg'>My Products </Link></li>
                        <li><Link className='lg:text-lg md:text-lg'>Add A Product</Link></li>
                        {/* as a  admin */}
                        <li><Link className='lg:text-lg md:text-lg'>All Sellers</Link></li>
                        <li><Link className='lg:text-lg md:text-lg'>All Buyers</Link></li>
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;