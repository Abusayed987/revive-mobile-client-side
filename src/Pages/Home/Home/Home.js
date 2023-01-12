import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import AdvertiseItems from '../AdvertiseItem/AdvertiseItems';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import ExtraSection from '../ExtraSection/ExtraSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className=' w-44 bg-slate-900 rounded-3xl mx-auto cursor-pointer'>
                <p className='text-center mt-4 text-primary p-1 text-lg font-semibold'>
                    All of Bangladesh
                </p>
            </div>
            <Categories></Categories>
            <AdvertiseItems></AdvertiseItems>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home; <h2>THis Is Home</h2>