import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import ConformationModal from '../../Shared/Modal/ConformationModal';
import AllBuyersRow from './AllBuyersRow';

const AllBuyers = () => {
    const [deleteBuyer, setDeleteBuyer] = useState(null);

    const { data: AllBuyers = [], refetch } = useQuery({
        queryKey: "AllBuyers",
        queryFn: () => fetch("https://revive-mobile-server.vercel.app/dashboard/admin/allBuyers").then(res => res.json())
    })

    const closeModal = () => {
        setDeleteBuyer(null)
    }

    const handleBuyerDelete = (deleteBuyer) => {
        fetch(`http://localhost:4000/buyer/${deleteBuyer._id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success("Buyer Deleted Successfully")
                    refetch()
                }
            })
            .catch(err => console.error(err))
    }


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
                                        setDeleteBuyer={setDeleteBuyer}
                                    ></AllBuyersRow>)
                                }
                            </tbody>
                        </table>
                    </div>
                    {deleteBuyer &&
                        <ConformationModal
                            tittle={` Are you sure that, Buyer is delete now`}
                            message={`This buyer is not recovery, it's permanently deleted!`}
                            closeModal={closeModal}
                            successAction={handleBuyerDelete}
                            modalData={deleteBuyer}
                            successBtnName={`Delete`}
                        ></ConformationModal>
                    }
                </div>
            </div>
        </div>
    );
};

export default AllBuyers;