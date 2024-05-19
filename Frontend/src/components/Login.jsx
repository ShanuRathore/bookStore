import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { set, useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        };
        // console.log(userInfo);
        await axios
            .post("http://localhost:4001/user/login", userInfo)
            .then((res) => {
                if (res.data) {
                    toast.success('Login Successfully');
                    document.getElementById("my_modal_3").close();
                    setTimeout(() => {
                        window.location.reload();
                        localStorage.setItem("Users", JSON.stringify(res.data.user))      //stores  the data in browser local storage so that it rmember the login
                    }, 1000)
                }
            })
            .catch((err) => {
                if (err.response && err.response.data && err.response.data.message) {
                    toast.error("Error signup: " + err.response.data.message);
                    setTimeout(()=>{},3000)
                } else {
                    toast.error("Error signup: " + err.message);
                }
            })
    }

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-slate-800 dark:text-white">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <NavLink to="/"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => document.getElementById("my_modal_3").close()}
                        >
                            ✕
                        </NavLink>
                        <h3 className="font-bold text-lg">Login</h3>
                        <div className='flex flex-col gap-2 mt-5'>
                            <span>Email</span>
                            <input type="email"
                                className="input input-bordered dark:text-black"
                                placeholder="Email"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className='text-red-600 text-sm'>This field is required</span>}
                            <span>Password</span>
                            <input type="password"
                                className='input input-bordered dark:text-black'
                                placeholder='Password'
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className='text-red-600 text-sm'>This field is required</span>}
                        </div>
                        <div className='flex mt-4 justify-around'>
                            <button
                                className='bg-teal-400 px-4 py-2 rounded-lg hover:bg-teal-700 hover:text-white cursor-pointer'
                                type="submit"
                            >
                                Login
                            </button>
                            <p className='mt-2'>
                                <span>Not registered? </span>
                                <Link to='/signup' className="text-blue-500 underline cursor-pointer">Signup</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;