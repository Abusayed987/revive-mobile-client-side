import React from 'react';
import { useQuery } from 'react-query';
import { useLoaderData, useParams } from 'react-router-dom';
import CategoryItemCard from '../CategoryItemCard/CategoryItemCard';

const CategoryItems = () => {
    // const catagories = useLoaderData()
    // const { _id, imgUrl } = catagories;
    const { id } = useParams()
    const { data: allProducts = [], isLoading } = useQuery({
        queryKey: ["allProducts", id],
        queryFn: async () => {
            const res = await fetch(`http://localhost:4000/categoriesProduct?categoryId=${id}`);
            const data = await res.json();
            return data;
        }
    })
    console.log(allProducts);

    if (isLoading) {
        return <progress className="progress w-full h-2 progress-primary"></progress>
    }

    return (
        <div className=' w-11/12  mx-auto' >
            <div className='flex items-center mb-7 mt-8'>
                {/* <img className='w-10' src={imgUrl} alt="" /> */}
                {/* <h2 className='text-3xl font-semibold'>{catagories.name}: {allProducts.length}</h2> */}
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