import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import ConformationModal from '../../Shared/Modal/ConformationModal';
import AllSellerRow from './AllSellerRow';

const AllSellers = () => {
    const [deleteSeller, setDeleteSeller] = useState(null);
    const [addVerifiedSeller, setAddVerifiedSeller] = useState(null);

    const { data: AllSellers = [], refetch } = useQuery({
        queryKey: "AllSellers",
        queryFn: () => fetch("https://revive-mobile-server.vercel.app/dashboard/admin/allSellers").then(res => res.json())
    })
    const closeModal = () => {
        setDeleteSeller(null)
        setAddVerifiedSeller(null)
    }

    const handleSellerDelete = (deleteSeller) => {
        fetch(`http://localhost:4000/seller/${deleteSeller._id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success("Seller Deleted Successfully")
                    refetch()
                }
            })
            .catch(err => console.error(err))
    }
    const handleSellerVerified = (addVerifiedSeller) => {
        console.log(addVerifiedSeller._id);
        fetch(`http://localhost:4000/addVerifiedSeller/${addVerifiedSeller._id}`, {
            method: "PUT",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success(`${addVerifiedSeller.name} Seller is now Verified`)
                    refetch()
                }
            })
            .catch(err => console.error(err))

    }


    return (
        <div className='my-4'>
            <div className='flex items-center justify-between mb-4 mr-3'>
                <h2 className='text-3xl'>All Sellers: {AllSellers.length}</h2>
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
                                <th>Verified</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                AllSellers.map((seller, i) => <AllSellerRow
                                    key={seller._id}
                                    i={i}
                                    seller={seller}
                                    setDeleteSeller={setDeleteSeller}
                                    setAddVerifiedSeller={setAddVerifiedSeller}
                                ></AllSellerRow>)
                            }
                        </tbody>
                    </table>
                </div>
                {deleteSeller &&
                    <ConformationModal
                        tittle={` Are you sure that, Seller is delete now`}
                        message={`This seller is not recovery, it's permanently deleted!`}
                        closeModal={closeModal}
                        successAction={handleSellerDelete}
                        modalData={deleteSeller}
                        successBtnName={`Delete`}
                    ></ConformationModal>
                }
                {addVerifiedSeller &&
                    <ConformationModal
                        tittle={` This Seller is Not Verified Now, Are you sure that you want to This Seller is Verified ?`}
                        message={`Note: This seller is Permanently Verified, don't back to Unverified!`}
                        closeModal={closeModal}
                        successAction={handleSellerVerified}
                        modalData={addVerifiedSeller}
                        successBtnName={`Conform Verified `}
                    ></ConformationModal>
                }
            </div>
        </div>
    );
};

export default AllSellers;