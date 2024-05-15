import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function ContactUs() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit= (data) => console.log(data)
    return (
        <div className='flex h-screen items-center justify-center dark:bg-slate-900 dark:text-white'>
            <div className="w-1/2 flex justify-center">
                <div className="modal-box dark:bg-slate-800 dark:text-white">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        <h3 className="font-bold text-lg">Contact Us</h3>
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
                                <span>Message</span>
                                <textarea placeholder="Enter Your Message" className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                            </div>
                            
                            <div className='flex mt-4 justify-around al'>
                                <button className='bg-teal-400 px-4 py-2 rounded-lg hover:bg-teal-700 hover:text-white cursor-pointer'>Submit</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
