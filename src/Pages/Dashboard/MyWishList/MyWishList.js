import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../Context/AuthProvider';
import ConformationModal from '../../Shared/Modal/ConformationModal';
import WishlistRow from './WishlistRow';

const MyWishList = () => {
    const { user } = useContext(AuthContext);
    const [deleteWishItem, setDeleteWishItem] = useState(null);

    const { data: wishlistItems = [], refetch } = useQuery({
        queryKey: ["wishlistItems"],
        queryFn: async () => {
            const res = await fetch(`https://revive-mobile-server-abusayed987.vercel.app/dashboard/wishlistItems?userEmail=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    const closeModal = () => {
        setDeleteWishItem(null)
    }
    const handleWishItemDelete = (deleteWishItem) => {
        console.log(deleteWishItem._id);
        fetch(`https://revive-mobile-server-abusayed987.vercel.app/wishlistItem/${deleteWishItem._id}`, {
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
                                <th>Time of use</th>
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
                                    setDeleteWishItem={setDeleteWishItem}
                                ></WishlistRow>)
                            }
                        </tbody>
                    </table>
                </div>
                {deleteWishItem &&
                    <ConformationModal
                        tittle={` Are you sure that, Seller is delete now`}
                        message={`This seller is not recovery, it's permanently deleted!`}
                        closeModal={closeModal}
                        successAction={handleWishItemDelete}
                        modalData={deleteWishItem}
                        successBtnName={`Delete`}
                    ></ConformationModal>
                }
            </div>
        </div>
    );
};

export default MyWishList;