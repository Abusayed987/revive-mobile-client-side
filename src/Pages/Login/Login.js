import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="card flex-shrink-0 lg:w-5/12 md:w-5/12 w-11/12 mx-auto my-10 shadow-2xl bg-base-100">
                <h2 className='text-center text-3xl font-semibold text-secondary pt-2'>Login Now!</h2>
                <form className="card-body">
                    <div className="form-control">
                        <Link className="btn btn-outline btn-primary  no-animation hover:text-white"> Login With
                            <img className='h-10 w-20 mb-2 ml-2' src="https://media.tenor.com/ZV4jX_quyecAAAAi/google.gif" alt="" />
                        </Link>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text lg:text-lg md:text-lg">Name:</span>
                        </label>
                        <input type="text" placeholder="Your Name" className="input input-bordered lg:text-lg md:text-lg" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text lg:text-lg md:text-lg">Email</span>
                        </label>
                        <input type="email" placeholder="Your email" className="input input-bordered lg:text-lg md:text-lg" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text lg:text-lg md:text-lg">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered lg:text-lg md:text-lg" required />
                        <label className="label">
                            <Link className="label-text-alt link link-hover ">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Login</button>
                    </div>
                </form>

            </div>
        </div>

    );
};

export default Login;