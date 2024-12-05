import React from "react";
import banner from "../../public/image/Banner.jpg"
function Banner() {
  return (<>
  <div className ="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-20" >
  <div className ="order-1  w-full md: w -1/2 mt-12 md:mt-32">
  <div className="space-y-12">
   <h1 className ="text-5xl font-bold">Hello, welcomes here to NAMOH Spices <span className ="text-pink-500"> new Test everyday!!!</span>
    </h1>
    <p className="text-2xl text-blue-500">
    Indian spices are a colorful mix of tastes, from hot to sweet, that make food more delicious.
    </p>
    
    
 </div> 
<button className="btn mt-6 btn-active btn-secondary">NAMOH SPICES</button>
   
    </div>
  <div className =" order-2 w-full md: w1/2 mt-15">
  <img src ={banner} alt = " " />
   </div>
   </div>
    
 
     
    </>  
  ) 
}

export default Banner
