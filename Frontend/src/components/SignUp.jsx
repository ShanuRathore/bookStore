import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit= (data) => console.log(data)
    
    return (
        <div className='flex h-screen items-center justify-center dark:bg-slate-900 dark:text-white'>
            <div  className="w-1/2 flex justify-center">
                <div className="modal-box dark:bg-slate-800 dark:text-white">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        <h3 className="font-bold text-lg">Sign Up</h3>
                        <div>
                            <div className='flex flex-col gap-2 mt-5'>
                                <span>Username</span>
                                <input type="text" 
                                        className="input input-bordered" 
                                        placeholder="Username" 
                                        {...register("name", { required: true })}
                                />
                                    {errors.name && <span className='text-red-600 text-sm'>This field is required</span>}
                                <span>Email</span>
                                <input type="email" 
                                        className="input input-bordered" 
                                        placeholder="Email" 
                                        {...register("email", { required: true })}
                                />
                                    {errors.email && <span className='text-red-600 text-sm'>This field is required</span>}
                                <span>Password</span>
                                <input type="password" 
                                        className='input input-bordered' 
                                        placeholder='Password' 
                                        {...register("password", { required: true })}
                                />
                                    {errors.password && <span className='text-red-600 text-sm'>This field is required</span>}
                            </div>
                            <div className='flex mt-4 justify-around al'>
                                <button className='bg-teal-400 px-4 py-2 rounded-lg hover:bg-teal-700 hover:text-white cursor-pointer'>SignUp</button>
                                <p className='mt-2'>Already have account? 
                                    <button 
                                        onClick={()=>document.getElementById('my_modal_3').showModal()} 
                                        className="text-blue-500 underline cursor-pointer" >Login
                                    </button>
                                    <Login/>
                                </p>
                            </div> 
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
