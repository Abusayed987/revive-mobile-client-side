import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../Context/AuthProvider';
import MyOrdersRow from './MyOrdersRow';


const MyOrders = () => {
    const { user } = useContext(AuthContext)

    const { data: bookingItems = [] } = useQuery({
        queryKey: ["bookingItems"],
        queryFn: async () => {
            const res = await fetch(`https://revive-mobile-server-abusayed987.vercel.app/dashboard/bookingItems?userEmail=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    // console.log(bookingItems);


    return (
        <div className='my-4'>
            <div className='flex items-center justify-between'>
                <h2 className='text-3xl'>My Orders</h2>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            <div className='mt-5'>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product</th>
                                <th>Seller Email</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookingItems.map((item, i) => <MyOrdersRow
                                    key={item._id}
                                    i={i}
                                    item={item}
                                ></MyOrdersRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;