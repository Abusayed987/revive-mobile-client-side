import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import AllBuyersRow from './AllBuyersRow';

const AllBuyers = () => {

    const { data: AllBuyers = [] } = useQuery({
        queryKey: "AllBuyers",
        queryFn: () => fetch("https://revive-mobile-server.vercel.app/dashboard/admin/allBuyers").then(res => res.json())
    })


    return (
        <div>
            <div className='my-4'>
                <div className='flex items-center justify-between mb-4 mr-3'>
                    <h2 className='text-3xl'>All Buyers: {AllBuyers.length}</h2>
                    <Link to="/dashboard/AllSellers" className='btn  btn-sm lg:btn-outline btn-outline btn-primary rounded-md px-2  '>All Sellers</Link>
                </div>
                <div className='mt-5'>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>sellerEmail</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    AllBuyers.map((buyer, i) => <AllBuyersRow
                                        key={buyer._id}
                                        i={i}
                                        buyer={buyer}
                                    ></AllBuyersRow>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBuyers;