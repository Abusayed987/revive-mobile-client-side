import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';


const Login = () => {
    const { register, handleSubmit } = useForm();
    const { loginWithPass, googleLogin } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"

    const handleLogin = data => {
        loginWithPass(data.email, data.password)
            .then((result) => {
                const user = result.user;
                // console.log(user);
                navigate(from, { replace: true })
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
                    role: "buyer"
                }
                fetch("https://revive-mobile-server-abusayed987.vercel.app/dashboard/admin/allUser", {
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
        <div className='mt-14 mb-64'>
            <div className="card flex-shrink-0 lg:w-5/12 md:w-5/12 w-11/12 mx-auto my-10 shadow-2xl bg-base-100">
                <h2 className='text-center text-3xl font-semibold text-secondary pt-2'>Login Now!</h2>
                <form onSubmit={handleSubmit(handleLogin)} className="card-body" >
                    <div className="form-control  mb-7">
                        <Link onClick={handleGoogleLogin} className="btn btn-outline btn-primary  no-animation hover:text-white"> Login With
                            <img className='h-10 w-20 mb-2 ml-2' src="https://media.tenor.com/ZV4jX_quyecAAAAi/google.gif" alt="" />
                        </Link>
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


                        <label className=" text-end mt-1">
                            <Link className="label-text-alt link link-hover ">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-2">
                        <button type='submit' className="btn btn-primary">Login</button>
                    </div>
                    <div className=" text-center">
                        New to ReviveMobile ? please
                        <Link to='/signup' className="font-semibold text-primary"> Sign Up</Link>
                    </div>
                </form>

            </div>
        </div>

    );
};

export default Login;