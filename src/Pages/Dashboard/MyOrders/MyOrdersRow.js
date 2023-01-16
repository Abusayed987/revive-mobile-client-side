import React from 'react';
import { Link } from 'react-router-dom';

const MyOrdersRow = ({ item, i }) => {
    const { _id, imageUrl, productName, sellerLocation, resalePrice, usesTime, payment, sellerEmail,
    } = item;

    return (
        <tr className="hover">
            <th>{i + 1}</th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-12 h-12">
                            <img src={`${imageUrl}`} alt="product" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{productName}</div>
                        {item?.phone ?
                            <div className="text-sm opacity-50">{item?.phone}</div>
                            :
                            <div className="text-sm opacity-50">{sellerLocation}</div>

                        }
                    </div>
                </div>
            </td>
            <th>{sellerEmail}</th>
            <th>
                <p>{resalePrice} Tk</p>
            </th>
            <th>
                {(payment === "false") ?
                    <Link className="btn btn-warning  btn-xs">Pay Now</Link>
                    :
                    <Link className="btn btn-success btn-xs">Paid</Link>
                }
            </th>

        </tr>
    );
};

export default MyOrdersRow;














// <h2 className='text-3xl color-dark border-b-2 w-56 border-primary'>Payment Here... </h2>
// <div className='lg:flex md:flex  p-5 w-4/6 mx-auto mt-2 justify-evenly border-2'>
//     <img className='rounded-lg w-32' src={`${imageUrl}`} alt="" />

//     <div className='lg:ml-5 md:ml-4'>
//         <h2 className='text-3xl font-serif'>  Please payment for Your <b>{productName}</b></h2>
//         <p className='text-secondary text-2xl my-1 font-semibold'>Price: {resalePrice}</p>
//         <div className='mt-2 text-xl'>
//             <p className='mt-2'>Contact From Seller :</p>
//             <p>Phone:+88 {sellerPhone}</p>
//             <p>Emial: {sellerEmail}</p>
//         </div>

//     </div>
// </div>













// className='lg:p-10 p-5 md:p-7 lg:w-3/6 md:5/6 w-4/6 mx-auto mt-2 border-dashed border-4'