import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import AllSellerRow from './AllSellerRow';

const AllSellers = () => {
    const { data: AllSellers = [] } = useQuery({
        queryKey: "AllSellers",
        queryFn: () => fetch("http://localhost:4000/dashboard/admin/allSellers").then(res => res.json())
    })
    console.log(AllSellers);

    return (
        <div className='my-4'>
            <div className='flex items-center justify-between mb-4 mr-3'>
                <h2 className='text-3xl'>All Buyers: {AllSellers.length}</h2>
                <Link to="/dashboard/allBuyers" className='btn  btn-sm lg:btn-outline btn-outline btn-primary rounded-md px-2  '>All Sellers</Link>
            </div>
            <div className='mt-5'>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>sellerEmail</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                AllSellers.map((seller, i) => <AllSellerRow
                                    key={seller._id}
                                    i={i}
                                    seller={seller}
                                ></AllSellerRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllSellers;