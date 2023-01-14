import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../Context/AuthProvider';
import WishlistRow from './WishlistRow';

const MyWishList = () => {
    const { user } = useContext(AuthContext)
    const { data: wishlistItems = [] } = useQuery({
        queryKey: ["wishlistItems"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:4000/dashboard/wishlistItems?userEmail=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='my-4'>
            <div className='flex items-center justify-between'>
                <h2 className='text-3xl'>My WishList </h2>
                <img src="https://img.alicdn.com/imgextra/i4/O1CN01AIpdkU1r1ZEKDP8LG_!!6000000005571-55-tps-17-16.svg" alt="" />
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
                                wishlistItems.map((item, i) => <WishlistRow
                                    key={item._id}
                                    i={i}
                                    item={item}
                                ></WishlistRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyWishList;