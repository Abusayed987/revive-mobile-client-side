import React from 'react';
import { FaBan, FaCheckCircle } from 'react-icons/fa';

const MyProductsRow = ({ product, index, setDeleteMyProduct }) => {
    const { imageUrl, originalPrice, productName, resalePrice, _id, location, isAdvertised } = product;
    return (
        <tr className="hover">
            <th>
                {index + 1}
            </th>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-12 h-12">
                            <img src={`${imageUrl}`} alt="product" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{productName}</div>
                        <div className="text-sm opacity-50">{location}</div>
                    </div>
                </div>
            </td>
            <td>
                {(isAdvertised === "true") ?
                    <div className={`${(isAdvertised === "true") ? "tooltip tooltip-top" : " "}`} data-tip="Advertised Item" >
                        <button className=" ml-7"><FaCheckCircle className='ml-1 text-green-500 text-sm' ></FaCheckCircle></button>
                    </div>
                    :
                    <div className='tooltip tooltip-top' data-tip="No Advertised">
                        <button className="ml-7">
                            <FaBan className='ml-1 text-red-500 text-sm' >x</FaBan>
                        </button>
                    </div>
                }
            </td>
            <td>
                <p className='text-secondary'>{resalePrice}Tk</p>
                <p className=' text-secondary' ><del>{originalPrice}Tk</del></p>
            </td>

            <td>
                {(product?.payment) ?
                    <span className='bg-success px-2 py-1 rounded-md cursor-auto'> Sold</span>
                    :
                    <span className=' bg-warning px-2 py-1 rounded-md ' >Available</span>
                }
            </td>

            <th>
                <label
                    onClick={() => { setDeleteMyProduct(product) }}
                    htmlFor="conformation-modal"
                    className="btn btn-xs btn-error btn-outline">
                    Delete
                </label>
            </th>

        </tr>
    );
};

export default MyProductsRow;   