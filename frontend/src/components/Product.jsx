import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

import axios from "axios" ;
import Card from './card';
import NAMOH1 from '../../public/image/NAMOH1.mp4'
import NAMOH2 from '../../public/image/NAMOH2.mp4'
function Product() {

  const [spices ,setSpices]=useState([])
  useEffect(()=>{
    const getSpices = async()=>{
      try {
         const res = await axios.get("http://localhost:40001/spices");
         console.log(res.data)
         setSpices(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getSpices();
  },[])

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
         <div className='mt-28 item-center justify-center text-center'>
          <h1 className= "text-2xl" > <span className ="text-pink-500">"Welcome" to NAMOH Spices,</span> 
          <br />where flavor meets freshness! 
           Explore our  curated selection of premium spices <span className ="text-pink-500">sourced from around the world.</span> <br /> <br /></h1>
         
         </div>
         <div>
         <Slider {...settings}>
          <div>
           <video src={NAMOH1} autoPlay ="true" />
           </div>
          <div>
           <video src={NAMOH2} autoPlay="true" />
           </div>
      
            </Slider>

            <p className ="text-green-500 text-3xl mt-6 ">  "   Discover a world of flavors with our premium spices. Elevate 
            every meal with the freshest ingredients, crafted for 
            culinary adventures in your kitchen!"</p>
           <div className =" mt-12 grid grid-cols-1 md:grid-cols-4">
               {spices.map ((item)=>(
               < Card key={item.id} item={item}/>))}
           </div>

         </div>
      </div>
     
     
     </>
  )
}

export default Product;
