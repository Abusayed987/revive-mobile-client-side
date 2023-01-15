import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../Pages/Shared/Navbar/Navbar';

const NotFound = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero " style={{ backgroundImage: `url("https://media.tenor.com/58QLsz1tPowAAAAC/error-glitch.gif")`, width: "100%", height: "90vh" }}>
                <div className="hero-overlay bg-opacity-90"></div>
                <div className="  ">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-primary text-5xl font-bold">404 <span className=' text-6xl '>|</span> Not Found</h1>

                        <Link to="/" className="btn btn-primary btn-outline">Back To Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;