import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../Context/AuthProvider';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext)
    const imageHostKey = process.env.REACT_APP_imgbbKey;


    const { data: categoriesItems = [] } = useQuery({
        queryKey: "categoriesItems",
        queryFn: async () => {
            const res = await fetch('http://localhost:4000/categories');
            const data = await res.json();
            return data;
        }
    })


    const handleAddProduct = data => {
        const date = new Date();

        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        const currentDate = `${day}-${month}-${year}`;
        console.log(currentDate);

        const productImage = data.productPhoto[0];
        const formData = new FormData();
        formData.append("image", productImage);

        // const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        // fetch(url, {
        //     method: "POST",
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(imgData => {
        //         if (imgData.success) {
        //             const imgUrl = imgData.data.url;
        //             console.log(imgUrl);
        //             toast.success("product Added successfully")
        //         }
        //     })



        // const product = {
        //     today date pathaite hobe...
        //     sellerName: data.sellerName,
        //     productName: data.productName,
        //     originalPrice: data.originalPrice,
        //     resalePrice: data.resalePrice,
        //     usesTime: data.usesTime,
        //     isAdvertised: data.isAdvertised,
        //     location: data.location,
        //     description:data.description,
        //     categoryId: categoriesItems.find(ctg => ctg.name === data.category)._id
        // }

        // fetch("http://localhost:4000/addProduct", {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json"
        //         //authorization dite hobe...
        //     },
        //     body: JSON.stringify(product)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //     })



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
                                    type="text" placeholder="Seller Name" className="input input-bordered lg:text-lg md:text-lg border-primary " required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg md:text-lg"> Product Name:</span>
                                </label>
                                <input
                                    {...register("productName")}
                                    type="text" placeholder="Product  Name" className="input input-bordered lg:text-lg md:text-lg border-primary " required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg md:text-lg"> Original Price:</span>
                                </label>
                                <input
                                    {...register("originalPrice")}
                                    type="text" placeholder="Original Price --- Tk" className="input input-bordered lg:text-lg md:text-lg border-primary " required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg md:text-lg"> Resale Price:</span>
                                </label>
                                <input
                                    {...register("resalePrice")}
                                    type="text" placeholder="Resale Price : Tk" className="input input-bordered lg:text-lg md:text-lg border-primary " required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg md:text-lg">
                                        Times of Use:</span>
                                </label>
                                <input
                                    {...register("usesTime")}
                                    type="text" placeholder="Ex: 6 months " className="input input-bordered lg:text-lg md:text-lg border-primary " required />
                            </div>

                        </div>

                        <div className='lg:w-5/12 md:w-5/12  mx-auto'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg md:text-lg">
                                        Category:</span>
                                </label>
                                <select className=' select select-bordered border-primary ' {...register("category")}>
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
                                <select className=' select select-bordered border-primary ' {...register("isAdvertised")}>
                                    <option disabled selected>Please Select</option>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg md:text-lg">
                                        Your location ?</span>
                                </label>
                                <select className='select select-bordered border-primary ' {...register("location")}>
                                    <option disabled selected>Select Your Location</option>
                                    <option value="Dhaka">Dhaka</option>
                                    <option value="Out of Dhaka">Out of Dhaka</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg md:text-lg">
                                        Product Photo</span>
                                </label>
                                <input type="file"  {...register("productPhoto")} className="file-input file-input-bordered file-input-primary w-full max-w-xs" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg md:text-lg">
                                        Description:</span>
                                </label>
                                <textarea  {...register("description")} className="textarea textarea-primary lg:text-lg" placeholder="Description..." required></textarea>
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