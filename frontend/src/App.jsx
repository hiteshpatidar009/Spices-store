import React from 'react'
import Home from './components/home/Home'
import { Navigate, Route , Routes } from "react-router-dom"
import Productes from './components/Products/Productes';
import Signup from './components/Signup';
import Contactus from './components/Products/Contact/Contactus';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './components/context/AuthProvider';
function App() {
  const [authUser,setAuthUser] = useAuth()
  console.log(authUser);

  return (
    <>
       <div className="dark:bg-slate-900 dark:text-white"> 
        <Routes>
       
        < Route path ="/" element ={<Home/>}/>;
        <Route path ="/product" element={authUser?<Productes/>:<Navigate to ="/signup"/>} /> 
        <Route path ="/signup" element={<Signup/>} /> 
        <Route path ="/contact_us" element={<Contactus/>}/>
        </Routes>
        <Toaster />
     </div>
    </>
  );
}

export default App;
