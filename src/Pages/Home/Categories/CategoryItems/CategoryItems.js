import React from 'react';
import { useQuery } from 'react-query';
import { useLoaderData, useParams } from 'react-router-dom';
import CategoryItemCard from '../CategoryItemCard/CategoryItemCard';

const CategoryItems = () => {
    // const catagories = useLoaderData()

    const { id } = useParams()
    const { data: allProducts = [], isLoading } = useQuery({
        queryKey: ["allProducts", id],
        queryFn: async () => {
            const res = await fetch(`https://revive-mobile-server-abusayed987.vercel.app/categoriesProduct?categoryId=${id}`);
            const data = await res.json();
            return data;
        }
    })


    if (isLoading) {
        return <progress className="progress w-full h-2 progress-primary"></progress>
    }

    return (
        <div className=' w-11/12  mx-auto' >
            <div className='flex items-center mb-7 mt-8'>
                <h2 className='text-3xl font-semibold'>Total {allProducts.length} Items</h2>
            </div>
            <div className='grid lg:grid-cols-2 gap-4  place-items-center mb-5'>
                {
                    allProducts.map(product => <CategoryItemCard
                        key={product._id}
                        product={product}
                    ></CategoryItemCard>)
                }
            </div>
        </div >
    );
};

export default CategoryItems;