import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {
    const [categoriesItems, setCategoriesItems] = useState([]);
    // const categoriesItems = [
    //     {
    //         "name": "Basic Phones",
    //         "imgUrl": "https://i.ibb.co/k4Q73yP/feature-phone.png"
    //     },
    //     {
    //         "name": "Android Phones",
    //         "imgUrl": "https://i.ibb.co/QvhChYX/android-phone.jpg"
    //     },
    //     {
    //         "name": "iOS Phones",
    //         "imgUrl": "https://i.ibb.co/HxnKsss/i-OS-Phone.png"
    //     }
    // ]

    useEffect(() => {
        fetch('http://localhost:4000/categories')
            .then(res => res.json())
            .then(data => setCategoriesItems(data))
    }, [])


    return (
        <div className='my-20'>
            <div>
                <h3 className='lg:ml-14 mb-12  font-semibold text-2xl'>Browse items by category</h3>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 place-items-center gap-4 w-11/12 mx-auto'>
                {
                    categoriesItems.map(category => <Category
                        key={category._id}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;