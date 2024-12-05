import React, { useEffect, useState } from 'react'
import axios from "axios" ;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



import Card from './card';
function Freespices() {

  const [spices ,setSpices]=useState([])
  useEffect(()=>{
    const getSpices = async()=>{
      try {
         const res = await axios.get("http://localhost:40001/spices");
         console.log(res.data)
         
         const data=(res.data.filter((Data) => Data.category === "Spices"));
         setSpices(data)
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
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
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
  
    <div className ="max-w-screen-2xl container mx-auto md:px-20 px-4">
     <div> <h1 className ="font-samiBold text-4xl pb-5">Big Diwali Sale </h1>
      <p className="text-2xl text-orange-500"> "Spice Up Your Diwali: Celebrate with Flavors that Ignite the Festivities!" </p> 
         <p className="text-2xl text-green-500">"This Diwali, Add a Dash of Spice to Your Celebration!"</p>
     </div>
      <div>
      <Slider {...settings}>
       {spices.map((item)=>(
        <Card item ={item} key={item.id}/>
        )
       
       )}
      </Slider>
     </div>
    </div>
    </>
  )
}

export default Freespices
