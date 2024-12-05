import React from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:40001/user/login", userInfo);
      if (res.data) {
        toast.success('Login Successfully');
        document.getElementById('my_modal_3').close();
        localStorage.setItem("User", JSON.stringify(res.data.user)); // Store user info in local storage
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error("Error: " + err.response.data.message);
      } else {
        console.error("Unexpected error:", err);
      }
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white dark:bg-gray-800 text-black dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Close button for modal */}
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById('my_modal_3').close()}
            >
              ✕
            </button>

            <h3 className="font-bold text-lg">Login!</h3>

            {/* Email */}
            <div className="mt-4 space-y-2">
              <label>Email</label><br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 border border-gray-300 dark:border-gray-600 rounded-md outline-none bg-white dark:bg-gray-700 text-black dark:text-white"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-red-500">This field is required</span>}
            </div>

            {/* Password */}
            <div className="mt-4 space-y-2">
              <label>Password</label><br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 border border-gray-300 dark:border-gray-600 rounded-md outline-none bg-white dark:bg-gray-700 text-black dark:text-white"
                {...register("password", { required: true })}
              />
              {errors.password && <span className="text-red-500">This field is required</span>}
            </div>

            {/* Button */}
            <div className="flex justify-around mt-4">
              <button
                className="bg-pink-500 dark:bg-pink-600 text-white rounded-md px-3 py-1 hover:bg-pink-700 dark:hover:bg-pink-800 duration-200"
                type="submit"
              >
                Login
              </button>
              <p>Not registered? <Link to="/signup" className="underline text-blue-500 dark:text-blue-400 cursor-pointer">Signup</Link></p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
