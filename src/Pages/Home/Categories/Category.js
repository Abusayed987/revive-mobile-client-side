import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category, refetch }) => {

    const { name, imgUrl, _id } = category;


    return (
        <div>
            <div className="card card-side bg-slate-300	 shadow-sm">
                <figure>
                    <img
                        className='w-28 h-28 ml-3 rounded'
                        src={`${imgUrl}`} alt="img" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Click the button to See all All {name}</p>
                    <div className="">
                        <Link onClick={refetch()} to={`categories/${_id}`} className="btn btn-primary btn-sm ">See all</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;