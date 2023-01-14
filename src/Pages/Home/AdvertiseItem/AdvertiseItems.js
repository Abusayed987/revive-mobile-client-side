import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import CategoryItemCard from '../Categories/CategoryItemCard/CategoryItemCard';

const AdvertiseItems = () => {

    const { data: advertisedProduct = [], isLoading } = useQuery({
        queryKey: ["advertisedProduct"],
        queryFn: () => fetch("https://revive-mobile-server.vercel.app/advertisedHomeProduct")
            .then(res => res.json())
    })
    if (isLoading) {
        return <progress className="progress progress-primary w-full"></progress>
    }
    return (
        <div className=' mb-10 '>
            <div className='text-start'>
                <h3 className='lg:ml-14 mb-12  font-semibold text-2xl'>Browse <Link to="/allAds" className='bg-primary px-1 rounded-lg text-white'>Ads</Link> items...</h3>
            </div>
            <div className=' mb-10 w-11/12 mx-auto'>
                <div className='grid lg:grid-cols-2 gap-4  place-items-center mb-5'>
                    {
                        advertisedProduct.map(product => <CategoryItemCard
                            key={product._id}
                            product={product}
                        ></CategoryItemCard>)
                    }
                </div>
            </div>
            <div className='mt-2 text-center'>
                <Link to="/allAds" className='btn btn-primary'>See All Ads</Link>
            </div>
        </div>
    );
};

export default AdvertiseItems;