import React from 'react';

const AllBuyersRow = ({ buyer, i, setDeleteBuyer }) => {
    return (
        <tr className="hover">
            <th>{i + 1}</th>
            <td>{buyer.name}</td>
            <td>{buyer.email}</td>
            <td>
                <label
                    onClick={() => { setDeleteBuyer(buyer) }}
                    htmlFor="conformation-modal"
                    className="btn btn-xs btn-error btn-outline">
                    Delete
                </label>
            </td>
        </tr>
    );
};

export default AllBuyersRow;