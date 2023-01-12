import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryItems = () => {
    const catagories = useLoaderData()
    console.log(catagories);

    return (
        <div className=' w-11/12 border mx-auto'>
            <div className='flex items-center'>
                <img className='w-10' src={catagories.imgUrl} alt="" />
                <h2 className='text-3xl font-semibold'>{catagories.name}</h2>
            </div>
            <div>

            </div>

        </div>
    );
};

export default CategoryItems;