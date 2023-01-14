import React from 'react';

const AllBuyersRow = ({ buyer, i }) => {
    return (
        <tr className="hover">
            <th>{i + 1}</th>
            <td>{buyer.name}</td>
            <td>{buyer.email}</td>
            <td>
                <button className='btn btn-xs btn-error btn-outline'>Delete</button>
            </td>
        </tr>
    );
};

export default AllBuyersRow;