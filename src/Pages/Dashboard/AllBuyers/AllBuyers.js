import React from 'react';
import { useQuery } from 'react-query';
import AllBuyersRow from './AllBuyersRow';

const AllBuyers = () => {

    const { data: AllBuyers = [] } = useQuery({
        queryKey: "AllBuyers",
        queryFn: () => fetch("http://localhost:4000/dashboard/admin/allBuyers").then(res => res.json())
    })
    console.log(AllBuyers);

    return (
        <div>
            <div className='my-4'>
                <div>
                    <h2 className='text-3xl'>All Buyers: {AllBuyers.length}</h2>
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