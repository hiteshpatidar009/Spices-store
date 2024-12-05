import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const { register, handleSubmit, formState: { errors } } = useForm();
  
  // Theme state
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    // Apply the theme class to the document
    const rootElement = document.documentElement;
    if (theme === "dark") {
      rootElement.classList.add("dark");
    } else {
      rootElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:40001/user/signup", userInfo);
      if (res.data) {
        toast.success('Signup Successfully');
        localStorage.setItem("User", JSON.stringify(res.data.user));
        navigate(from, { replace: true });
      }
    } catch (err) {
      if (err.response) {
        toast.error("Error: " + err.response.data.message);
      }
    }
  };

  return (
    <>
      <div className={`flex h-screen items-center justify-center ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
        <div className="w-[600px]">
          <div className={`modal-box ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
            
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Close button */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

              {/* Theme Toggle Button */}
              <button type="button" onClick={toggleTheme} className="center bg-gray-300 dark:bg-gray-700 rounded-full px-2 py-1">
                {theme === "light" ? "🌙 Dark" : "☀️ Light"}
              </button>

              <h3 className="font-bold text-lg">Signup</h3>
              
              {/* Name Input */}
              <div className="mt-4 space-y-2">
                <label>Name</label>
                <input type="text" placeholder="Enter your Fullname" className="w-80 px-3 border rounded-md outline-none"
                  {...register("fullname", { required: true })} />
                {errors.fullname && <span className="text-red-500">This field is required</span>}
              </div>

              {/* Email Input */}
              <div className="mt-4 space-y-2">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" className="w-80 px-3 border rounded-md outline-none"
                  {...register("email", { required: true })} />
                {errors.email && <span className="text-red-500">This field is required</span>}
              </div>

              {/* Password Input */}
              <div className="mt-4 space-y-2">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" className="w-80 px-3 border rounded-md outline-none"
                  {...register("password", { required: true })} />
                {errors.password && <span className="text-red-500">This field is required</span>}
              </div>

              {/* Signup Button and Login Link */}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Signup</button>
                <p>Have an account? 
                  <button className="underline text-blue-500 cursor-pointer" 
                    onClick={() => document.getElementById("my_modal_3").showModal()}>
                    Login
                  </button>
                </p>
                <Login />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
