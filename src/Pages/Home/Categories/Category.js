import React from 'react';

const Category = ({ category }) => {
    const { name, imgUrl, id } = category;
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
                    <p>Click the button to watch All {name}</p>
                    <div className="">
                        <button className="btn btn-primary btn-sm ">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;