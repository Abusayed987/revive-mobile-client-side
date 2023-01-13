import React, { useContext } from 'react';
import { useQuery } from 'react-query';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import MyProductsRow from './MyProductsRow';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const { email } = user;

    const { data: sellerProducts = [], isLoading } = useQuery({
        queryKey: "sellerProducts",
        queryFn: () => fetch(`http://localhost:4000/sellerProducts?sellerEmail=${email}`)
            .then(res => res.json())
    })

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
                            ></MyProductsRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyProducts;