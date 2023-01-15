import React from 'react';

const WishlistRow = ({ item, i, setDeleteWishItem }) => {
    const { imageUrl, productName, location, resalePrice, usesTime, sellerEmail,
    } = item;

    return (
        <tr className="hover">
            <th>{i + 1}</th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-12 h-12">
                            <img src={`${imageUrl}`} alt="product" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{productName}</div>
                        {item?.phone ?
                            <div className="text-sm opacity-50">{item?.phone}</div>
                            :
                            <div className="text-sm opacity-50">{location}</div>

                        }
                    </div>
                </div>
            </td>
            <th>{usesTime}</th>
            <th>{sellerEmail}</th>
            <th>
                <p>{resalePrice} Tk</p>
            </th>
            <th>
                <label
                    onClick={() => { setDeleteWishItem(item) }}
                    htmlFor="conformation-modal"
                    className="btn btn-xs btn-error btn-outline">
                    Delete
                </label>
            </th>

        </tr>
    );
};

export default WishlistRow;