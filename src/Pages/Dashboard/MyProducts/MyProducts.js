import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import ConformationModal from '../../Shared/Modal/ConformationModal';
import MyProductsRow from './MyProductsRow';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const { email } = user;
    const [deleteMyProduct, setDeleteMyProduct,] = useState(null);

    const { data: sellerProducts = [], isLoading, refetch } = useQuery({
        queryKey: "sellerProducts",
        queryFn: () => fetch(`https://revive-mobile-server-abusayed987.vercel.app/sellerProducts?sellerEmail=${email}`)
            .then(res => res.json())
    })
    const closeModal = () => {
        setDeleteMyProduct(null)
    }
    const handleMyProductDelete = (MyProduct) => {
        console.log(MyProduct._id);
        fetch(`https://revive-mobile-server-abusayed987.vercel.app/myProduct/${MyProduct._id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success("wishlistItem Deleted Successfully")
                    refetch()
                }
            })
            .catch(err => console.error(err))
    }


    return (
        <div className='my-4'>
            <div className='flex items-center justify-between mb-4 mr-3'>
                <h2 className='text-3xl my-4'>My Products</h2>
                <Link to="/dashboard/addProducts" className='btn  btn-sm lg:btn-outline btn-outline btn-primary rounded-md px-2  '>Add A Product</Link>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Advertised</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            sellerProducts.map((product, index) => <MyProductsRow
                                key={product._id}
                                index={index}
                                product={product}
                                setDeleteMyProduct={setDeleteMyProduct}
                            ></MyProductsRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteMyProduct &&
                <ConformationModal
                    tittle={` Are you sure that, Seller is delete now`}
                    message={`This seller is not recovery, it's permanently deleted!`}
                    closeModal={closeModal}
                    successAction={handleMyProductDelete}
                    modalData={deleteMyProduct}
                    successBtnName={`Delete`}
                ></ConformationModal>
            }
        </div>
    );
};

export default MyProducts;