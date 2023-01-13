import React from 'react';
import { FaOpenid, FaCaretRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ExtraSection = () => {
    return (
        <div className='mx-auto my-16'>
            <div>
                <h3 className='lg:ml-14 mb-12  font-semibold text-2xl'>Become a member of ReviveMobile ...</h3>
            </div>
            <div className='w-11/12 mx-auto '>
                <div className="flex flex-col w-full lg:flex-row md:flex-row mx-auto">
                    <div className="card card-side bg-base-100 shadow-xl lg:w-6/12 md:w-6/12 mx-auto ">
                        <figure className='p-8'>
                            <img
                                className='w-20 h-20 rounded-sm'
                                src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Start making money! </h2>
                            <p>Do you have something to sell? <br />
                                Post your first ad and start making money!</p>
                            <Link className=" bg-primary text-white font-semibold flex items-center  justify-center p-2 rounded-3xl">
                                <FaOpenid></FaOpenid>
                                <span className='mx-2'> Post your ad</span></Link>
                        </div>
                    </div>

                    <div className="divider lg:divider-horizontal md:divider-horizontal "></div>

                    <div className="card card-side bg-base-100 shadow-xl lg:w-6/12 md:w-6/12 mx-auto">
                        <figure className='p-8'>
                            <img className='w-24 h-20 rounded-sm'
                                src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">ReviveMobile Jobs Places!</h2>
                            <p>Looking to hire or get hired in Bangladesh ? <br />
                                Get access to 800k+ CVs or browse through 800+ job vacancies!</p>
                            <Link className=" bg-primary text-white font-semibold flex items-center  justify-center p-2 rounded-3xl"> <span className='mx-2'> Explore more</span> <FaCaretRight></FaCaretRight></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ExtraSection;