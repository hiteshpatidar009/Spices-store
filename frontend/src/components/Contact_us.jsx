import React from 'react'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
function Contact_us() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data); 

  return (<>
    <div className=' flex h-screen items-center justify-center'>
   
    <div className ="max-w-screen-2xl md:px-20 px-4 flex flex-col md:flex-row my-20" >
      <div className="modal-box text-black-800  ">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Close button for modal */}
            <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-3 top-4"
             onClick={() => document.getElementById('my_modal_3').close()}>✕</button>

            <h3 className="font-bold text-lg text-4xl">Contact-us</h3>
            <div className='mt-4 space-y-2'>
      <span >Name</span>
      < br/>
      <input type='text' placeholder='Enter your Fullname'className='w-80 px-3 border rounded-md outline-none'
      {...register("Fullname", { required: true })} /> 
      {errors.Fullname && <span className="text-red-500">This field is required</span>}
      </div> 
            {/* Email */}
            <div className="mt-6 space-y-3">
              <span>Email</span><br />
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-80 px-3 border rounded-md outline-none" 
                {...register("email", { required: true })} 
              />
              {errors.email && <span className="text-red-500">This field is required</span>}
            </div>

            {/* Password */}
            <div className="mt-4 space-y-2">
              <span>Phone number</span><br />
              <input 
                type="password" 
                placeholder="Enter your phone number" 
                className="w-80 px-3 border rounded-md outline-none" 
                {...register("phone number", { required: true })} 
              />
              {errors.password && <span className="text-red-500">This field is required</span>}
            </div>

            {/* Button */}
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200" type="submit">
              Submit</button>
              <p>Cancelled <Link to="/" className="underline text-blue-500 cursor-pointer">Cancelled </Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
     
    
    </>
  )
}

export default Contact_us

