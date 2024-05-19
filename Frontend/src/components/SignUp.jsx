import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";
import axios from 'axios';

function Signup() {
    const location=useLocation();
    const navigate = useNavigate();
    const from=location.state?.from?.pathname || '/';
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        };
        // console.log(userInfo);
        await axios
            .post("http://localhost:4001/user/signup", userInfo)
            .then((res) => {
                if (res.data) {
                    toast.success("Signup Successfully");
                    navigate(from, {replace:true});
                    // alert("Signup Successfully");
                }
                localStorage.setItem("Users", JSON.stringify(res.data.user))      //stores  the data in browser local storage so that it rmember the login
            })
            .catch((err) => {
                if (err.response && err.response.data && err.response.data.message) {
                    toast.error("Error signup: " + err.response.data.message);
                } else {
                    toast.error("Error signup: " + err.message);
                }
            })
    };

    return (
        <>
            <div className='flex h-screen items-center justify-center dark:bg-slate-900 dark:text-white'>
                <div className="modal-box dark:bg-slate-800 dark:text-white">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        <h3 className="font-bold text-lg">Sign Up</h3>
                        <div className='flex flex-col gap-2 mt-5'>
                            <span>Username</span>
                            <input
                                type="text"
                                className="input input-bordered dark:text-black"
                                placeholder="Username"
                                {...register("fullname", { required: true })}
                            />
                            {errors.fullname && <span className='text-red-600 text-sm'>This field is required</span>}

                            <span>Email</span>
                            <input
                                type="email"
                                className="input input-bordered dark:text-black"
                                placeholder="Email"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className='text-red-600 text-sm'>This field is required</span>}

                            <span>Password</span>
                            <input
                                type="password"
                                className='input input-bordered dark:text-black'
                                placeholder='Password'
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className='text-red-600 text-sm'>This field is required</span>}
                        </div>
                        <div className='flex mt-4 justify-around'>
                            <button className='bg-teal-400 px-4 py-2 rounded-lg md:py-1 hover:bg-teal-700 hover:text-white cursor-pointer' type="submit">Sign Up</button>
                            <div className='mt-2'>
                                <span>Already have an account? </span>
                                <button
                                    onClick={() => document.getElementById('my_modal_3').showModal()}
                                    className="text-blue-500 underline cursor-pointer"
                                    type="button"
                                >
                                    Login
                                </button>
                            </div>
                        </div>
                    </form>
                    <Login />
                </div>
            </div>
        </>
    );
}

export default Signup;
