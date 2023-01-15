import React from 'react';

const AllSellerRow = ({ seller, i, setDeleteSeller, setAddVerifiedSeller }) => {

    return (
        <tr className="hover">
            <th>{i + 1}</th>
            <td>{seller.name}</td>
            <td>{seller.email}</td>
            <td>
                {(seller?.isVerified === "false") &&
                    <div className="tooltip" data-tip="Not Verified">
                        <label onClick={() => { setAddVerifiedSeller(seller) }}
                            htmlFor="conformation-modal"
                            className="btn btn-sm btn-warning btn-outline">Verified now</label>
                    </div>
                }
                {(seller?.isVerified === "true") &&
                    <div className="tooltip" data-tip="Already Verified">
                        <button className="btn btn-xs btn-success ">Verified</button>
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