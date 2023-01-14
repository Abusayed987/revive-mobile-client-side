import React from 'react';

const AllSellerRow = ({ seller, i }) => {
    return (
        <tr className="hover">
            <th>{i + 1}</th>
            <td>{seller.name}</td>
            <td>{seller.email}</td>
            <td>
                { //conditional render kore dekhabe verified or not Verified
                    <button className='btn btn-xs btn-success btn-outline'>Verified</button>
                }
            </td>
            <td>
                <button className='btn btn-xs btn-error btn-outline'>Delete</button>
            </td>
        </tr>
    );
};

export default AllSellerRow;