import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
    const onSubmit = (data) => console.log(data)
    
    return (
        <div className=''>
            <dialog id="my_modal_3" className="modal ">
                <div className="modal-box dark:bg-slate-800 dark:text-white">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <NavLink to="/" 
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                onClick={() => document.getElementById("my_modal_3").close()}
                            >
                            ✕
                        </NavLink>
                    <h3 className="font-bold text-lg">Login</h3>
                    <div>
                        <div className='flex flex-col gap-2 mt-5'>
                            <span>Email</span>
                            <input type="email" 
                                    className="input input-bordered" 
                                    placeholder="Email" 
                                    {...register("email", { required: true })} 
                            />{errors.email && <span className='text-red-600 text-sm'>This field is required</span>}
                            <span>Password</span>
                            <input type="password" 
                                    className='input input-bordered' 
                                    placeholder='Password' 
                                    {...register("password", { required: true })}
                            />{errors.password && <span className='text-red-600 text-sm'>This field is required</span>}
                        </div>
                        <div className='flex mt-4 justify-around al'>
                            <button 
                                className='bg-teal-400 px-4 py-2 rounded-lg hover:bg-teal-700 hover:text-white cursor-pointer'
                                type="submit"
                            >
                                Login
                            </button>
                            <p className='mt-2'>Not registered? <Link to='/signup' className="text-blue-500 underline cursor-pointer" >Signup</Link></p>
                        </div>
                    </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login
