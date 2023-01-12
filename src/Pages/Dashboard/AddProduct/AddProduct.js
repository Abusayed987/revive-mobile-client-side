import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../Context/AuthProvider';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext)
    console.log(user);
    const { data: categoriesItems = [] } = useQuery({
        queryKey: "categoriesItems",
        queryFn: async () => {
            const res = await fetch('http://localhost:4000/categories');
            const data = await res.json();
            return data;
        }
    })


    const handleAddProduct = data => {
        console.log(data);

        //date pathaite hobe...
    };
    return (
        <div className='my-4'>
            <div>
                <h2 className='text-3xl'>Add A Product</h2>
            </div>
            <div>
                <form onSubmit={handleSubmit(handleAddProduct)} className="card-body" >
                    <div className='lg:flex md:flex  justify-between'>
                        <div className='lg:w-5/12 md:w-5/12  mx-auto'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg md:text-lg"> Seller Name:</span>
                                </label>
                                <input
                                    {...register("sellerName")}
                                    type="text" placeholder="Seller Name" className="input input-bordered lg:text-lg md:text-lg" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg md:text-lg"> Product Name:</span>
                                </label>
                                <input
                                    {...register("productName")}
                                    type="text" placeholder="Product  Name" className="input input-bordered lg:text-lg md:text-lg" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg md:text-lg"> Original Price:</span>
                                </label>
                                <input
                                    {...register("originalPrice")}
                                    type="text" placeholder="Original Price --- Tk" className="input input-bordered lg:text-lg md:text-lg" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg md:text-lg"> Resale Price:</span>
                                </label>
                                <input
                                    {...register("resalePrice")}
                                    type="text" placeholder="Resale Price : Tk" className="input input-bordered lg:text-lg md:text-lg" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg md:text-lg">
                                        Times of Use:</span>
                                </label>
                                <input
                                    {...register("usesTime")}
                                    type="text" placeholder="Ex: 6 months " className="input input-bordered lg:text-lg md:text-lg" required />
                            </div>

                        </div>

                        <div className='lg:w-5/12 md:w-5/12  mx-auto'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg md:text-lg">
                                        Category:</span>
                                </label>
                                <select className=' select select-bordered' {...register("category")}>
                                    {
                                        categoriesItems.map(category => <option
                                            key={category._id}
                                            value={`${category.name}`}>{category.name}</option>)
                                    }
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg md:text-lg">
                                        Do you want to advertise?</span>
                                </label>
                                <select className=' select select-bordered' {...register("isAdvertised")}>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg md:text-lg">
                                        Your location ?</span>
                                </label>
                                <select className='select select-bordered' {...register("location")}>
                                    <option value="Dhaka">Dhaka</option>
                                    <option value="Out of Dhaka">Out of Dhaka</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg md:text-lg">
                                        Product Photo</span>
                                </label>
                                <input type="file"  {...register("productPhoto")} className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                            </div>
                        </div>
                    </div>

                    <div className="form-control mt-6 md:w-11/12 mx-auto w-full">
                        <button type='submit' className="btn btn-outline btn-primary text ">Add Product</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddProduct;