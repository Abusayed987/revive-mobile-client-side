import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';


const Login = () => {
    const { register, handleSubmit } = useForm();
    const { loginWithPass } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();
    const form = location.state?.form?.pathname || "/"

    const handleLogin = data => {
        console.log(data)
        loginWithPass(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(form, { replace: true })
            })
            .catch(err => {
                toast.error(err.message)
            })
    };
    return (
        <div>
            <div className="card flex-shrink-0 lg:w-5/12 md:w-5/12 w-11/12 mx-auto my-10 shadow-2xl bg-base-100">
                <h2 className='text-center text-3xl font-semibold text-secondary pt-2'>Login Now!</h2>
                <form onSubmit={handleSubmit(handleLogin)} className="card-body" >
                    <div className="form-control  mb-7">
                        <Link className="btn btn-outline btn-primary  no-animation hover:text-white"> Login With
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