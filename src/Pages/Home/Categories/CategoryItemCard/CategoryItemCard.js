import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaCheck, FaCheckCircle } from 'react-icons/fa';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';
import ConformationModal from '../../../Shared/Modal/ConformationModal';


const CategoryItemCard = ({ product }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    const { Condition, categoryId, description, imageUrl, isAdvertised, location, originalPrice, productName, resalePrice, sellerEmail, sellerName, todayDate, usesTime, _id, isVerified, phone } = product;

    const [addWishlist, setAddWishList] = useState(null);
    const closeModal = () => {
        setAddWishList(null)
    }

    const handleWishlist = product => {
        const { _id, imageUrl, sellerName, productName, resalePrice, usesTime, location } = product;

        const wishlistProduct = {
            userEmail: user.email,
            productId: _id,
            imageUrl: imageUrl,
            sellerName: sellerName,
            productName: productName,
            resalePrice: resalePrice,
            usesTime: usesTime,
            location: location
        };

        fetch('http://localhost:4000/dashboard/wishlist', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(wishlistProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success("Successfully Added to Wishlist")
                navigate('/dashboard/myWishlist')
            })

    }




    return (
        <div className='  lg:w-11/12 md:w-11/12'>

            <div className="rounded-lg border hover:shadow-2xl hover:border-primary lg:flex md:flex  items-center md:justify-evenly ">
                <div className=' mt-0'>
                    {(isAdvertised) &&
                        <span className="indicator-item  badge badge-primary indicator-bottom indicator-end  rounded-md  text-white">Ads</span>
                    }
                    <figure className="p-2">
                        <img src={`${imageUrl}`} alt="img" className=" rounded-md lg:w-36 md:w-36 h-36 " />
                    </figure>
                </div>
                <div className=" p-2 lg:w-full md:max-w-screen-md">

                    <div className='lg:flex md:flex items-center justify-between'>
                        <h2 className=" font-semibold text-xl">{productName}
                            <small className='text-xs font-normal ml-1  lg:block md:block'>
                                {usesTime} uses
                            </small>
                        </h2>
                        <div className='flex items-center justify-start'>
                            <img className='w-6' src="https://f-droid.org/repo/com.mirfatif.mylocation/en-US/icon_du3VhlM5GWs8iq_5rP8xrBoXVuCRO4_b5kqtIYfqvjw=.png" alt="" />
                            <p>{location}</p>
                        </div>
                    </div>

                    <div className='border  lg:w-full md:w-full w-64'></div>

                    <div className='lg:flex md:flex items-center justify-between mt-1'>
                        <p className='text-red-500 text-lg rounded  font-semibold'>Seller Price: ৳{resalePrice}</p>
                        <p className=' lg:ml-2 text-red-500'>Market price: <del>৳{originalPrice}</del></p>
                    </div>

                    <div className='lg:flex md:flex items-center justify-between mt-2'>
                        <div className=' flex items-center'>
                            <div className="avatar">
                                <div className="w-10 rounded-full " >
                                    {user?.photoURL ?
                                        <div className="w-10 rounded-full" >
                                            <img src={user?.photoURL} alt='' />
                                        </div>
                                        :
                                        <div className="w-10 rounded-full">
                                            <img className=' bg-cyan-600'
                                                src="https://i.ibb.co/Qk36cwY/unknown-P-profile-removebg-preview.png" alt='' />
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className=' ml-2 flex items-center'>
                                <div className=''>
                                    <h3 className='text-lg '>{sellerName}</h3>
                                    <h3 className=' text-sm'>+88{phone}</h3>
                                </div>

                                <div className={`${(isVerified) ? "tooltip tooltip-top" : " "}`} data-tip="Verified" >
                                    {(isVerified) &&
                                        <button className=""><FaCheckCircle className='ml-1 text-green-500 text-sm' ></FaCheckCircle></button>
                                    }
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2>Condition: {Condition}</h2>
                        </div>
                    </div>

                    <div className="lg:flex md:flex items-center justify-between mt-2">
                        <div className='mt-2'>
                            <p title={`${description}`} className='text-sm'>{(description).slice(0, 30)}...</p>
                        </div>
                        <div className='mt-2'>
                            <Link className='btn btn-primary btn-xs'>Book Now</Link>
                        </div>
                    </div>

                    <div className='lg:flex md:flex items-center justify-between mt-2'>
                        {/* <button onClick={handleWishlist} className=' tooltip tooltip-right' data-tip="add to Wishlist">
                            
                        </button> */}

                        <label onClick={() => setAddWishList(product)} htmlFor="conformation-modal" className=' tooltip tooltip-right' data-tip="add to Wishlist">
                            <img src="https://img.alicdn.com/imgextra/i4/O1CN01AIpdkU1r1ZEKDP8LG_!!6000000005571-55-tps-17-16.svg" alt="" />
                        </label>
                        <h3 className='text-end text-gray-500 text-sm mt-2'>Post: {todayDate}</h3>
                    </div>
                </div>
            </div>
            {addWishlist &&
                <ConformationModal
                    tittle={` Add to Your Wishlist ?`}
                    message={``}
                    closeModal={closeModal}
                    successAction={handleWishlist}
                    modalData={addWishlist}
                    successBtnName={`Added`}
                > </ConformationModal>
            }
        </div >
    );
};

export default CategoryItemCard;