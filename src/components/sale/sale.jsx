import React from 'react'
import bannerimg from "../../assets/img/topseller/bannerimg.webp"
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const sale = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center gap-6 '>
            {/* image section  */}
            <div data-aos="zoom-in">
                <img src={bannerimg} alt="" 
                className='max-w-[400px] h-[320px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover'
                />
            </div>
            {/* text area  */}
            <div>
                <h1>
                    Summer Sale is Here . upto 50% off
                </h1>
            </div>

        </div>

      </div>
    </div>
  )
}

export default sale
