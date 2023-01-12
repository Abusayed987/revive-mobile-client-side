import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";


const Signup = () => {
    const { register, handleSubmit } = useForm();
    const handleLogin = data => {
        console.log(data)
    };
    return (
        <div>
            <div className="card flex-shrink-0 lg:w-5/12 md:w-5/12 w-11/12 mx-auto mt-5 mb-10 shadow-2xl bg-base-100">
                <h2 className='text-center text-3xl font-semibold text-secondary pt-2'>Sign Up Here!</h2>
                <form onSubmit={handleSubmit(handleLogin)} className="card-body" >
                    <div className="form-control mb-7">
                        <Link className="btn btn-outline btn-primary  no-animation hover:text-white"> Login With
                            <img className='h-10 w-20 mb-2 ml-2' src="https://media.tenor.com/ZV4jX_quyecAAAAi/google.gif" alt="" />
                        </Link>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text lg:text-lg md:text-lg">Name:</span>
                        </label>
                        <input
                            {...register("name")}
                            type="text" placeholder="Your Name" className="input input-bordered lg:text-lg md:text-lg" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text lg:text-lg md:text-lg">Email</span>
                        </label>
                        <input
                            {...register("email")}
                            type="email" placeholder="Your email" className="input input-bordered lg:text-lg md:text-lg" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text lg:text-lg md:text-lg">Password</span>
                        </label>
                        <input
                            {...register("password")}
                            type="password" placeholder="Password" className="input input-bordered lg:text-lg md:text-lg" required />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text lg:text-lg md:text-lg">Confirm Password</span>
                        </label>
                        <input
                            {...register("confirmPass")}
                            type="password" placeholder="Password" className="input input-bordered lg:text-lg md:text-lg" required />

                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary text ">Signup</button>
                    </div>
                    <div className=" text-center">
                        Already Have An Account ? please
                        <Link to='/login' className="font-semibold text-primary"> Login</Link>
                    </div>
                </form>

            </div>
        </div>

    );
};

export default Signup;