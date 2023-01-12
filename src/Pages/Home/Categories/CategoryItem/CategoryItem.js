import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryItems = () => {
    const catagories = useLoaderData()
    console.log(catagories);





    return (
        <div>
            <div>
                <h2>{catagories.name}</h2>
            </div>
            <div>

            </div>

        </div>
    );
};

export default CategoryItems;