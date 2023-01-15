import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import { useQuery } from 'react-query';


const Signup = () => {
    const { register, handleSubmit } = useForm();
    const { createUser, updateUser, googleLogin } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"




    const handleSignUp = data => {
        if (data.password.length < 6) {
            return toast.error("Password must be at last 6 characters")
        }
        if (data.password !== data.confirmPass) {
            return toast.error("Password Did not Match")
        }

        createUser(data.email, data.password)
            .then(result => {
                // const user = result.user
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        const user = result.user;
                        // console.log(user);

                        const name = user.displayName;
                        const email = user.email;
                        const role = data.userRole;

                        const userDetails = {
                            name: name,
                            email: email,
                            role: role,
                            isVerified: "false",
                        }
                        fetch("https://revive-mobile-server.vercel.app/dashboard/admin/allUser", {
                            method: "POST",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(userDetails)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.acknowledged) {
                                    toast.success('Create user Successfully')
                                    navigate(from, { replace: true })
                                }
                            })


                    })
                    .catch(err => console.error(err))

            })
            .catch(err => {
                toast.error(err.message)
            })


    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;

                const userDetails = {
                    name: user.displayName,
                    email: user.email,
                    role: "buyer",
                    isVerified: "false"
                }
                fetch("https://revive-mobile-server.vercel.app/dashboard/admin/allUser", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userDetails)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        toast.success('Successfully  SignIn')
                        navigate(from, { replace: true })
                    })

            }).catch((error) => console.error(error));


    }

    return (
        <div>
            <div className="card flex-shrink-0 lg:w-5/12 md:w-5/12 w-11/12 mx-auto mt-5 mb-10 shadow-2xl bg-base-100">
                <h2 className='text-center text-3xl font-semibold text-secondary pt-2'>Sign Up Here!</h2>
                <form onSubmit={handleSubmit(handleSignUp)} className="card-body" >
                    <div className="form-control mb-7">
                        <Link onClick={handleGoogleLogin} className="btn btn-outline btn-primary  no-animation hover:text-white"> Login With
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
                            <span className="label-text lg:text-lg md:text-lg">
                                Select  Account Type?</span>
                        </label>
                        <select className='select select-bordered border-primary ' {...register("userRole")}>
                            <option value="buyer">As a buyer</option>
                            <option value="seller">As a seller</option>
                        </select>
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