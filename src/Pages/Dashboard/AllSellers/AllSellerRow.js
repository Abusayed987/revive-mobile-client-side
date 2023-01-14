import React from 'react';

const AllSellerRow = ({ seller, i, setDeleteSeller, deleteSeller }) => {

    return (
        <tr className="hover">
            <th>{i + 1}</th>
            <td>{seller.name}</td>
            <td>{seller.email}</td>
            <td>
                {
                    //conditional render kore dekhabe verified or not Verified
                    <div className="tooltip" data-tip="Not Verified">
                        <button className="btn btn-xs btn-warning">Verified now</button>
                    </div>
                }
            </td>
            <td>
                <label
                    onClick={() => { setDeleteSeller(seller) }}
                    htmlFor="conformation-modal"
                    className="btn btn-xs btn-error btn-outline">
                    Delete
                </label>
            </td>
        </tr>
    );
};

export default AllSellerRow;