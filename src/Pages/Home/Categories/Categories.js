import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Category from './Category';

const Categories = () => {
    const { data: allCategories = [], isLoading } = useQuery({
        queryKey: "categoriesItems",
        queryFn: async () => {
            const res = await fetch('http://localhost:4000/categories');
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <progress className="progress progress-primary w-full"></progress>
    }

    return (
        <div className='my-20'>
            <div>
                <h3 className='lg:ml-14 mb-12  font-semibold text-2xl'>Browse items by category...</h3>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 place-items-center gap-4 w-11/12 mx-auto'>
                {
                    allCategories.map(category => <Category
                        key={category._id}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;