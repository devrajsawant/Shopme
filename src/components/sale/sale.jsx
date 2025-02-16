import React from 'react'
import bannerimg from "../../assets/img/topseller/bannerimg.webp"
import { GrSecure } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";

const sale = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0 dark:bg-gray-800 dark:text-white'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 '>
            {/* image section  */}
            <div data-aos="zoom-in">
                <img src={bannerimg} alt="" 
                className='max-w-[400px] h-[400px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover'
                />
            </div>
            {/* text area  */}
            <div className='flex flex-col  gap-6 sm:pt-0' data-aos="fade-up">
                <h1
                className='text-8xl sm:text-4xl font-bold text-primary'>
                    Summer Sale is Here . upto 50% off
                </h1>
                <p className='text-sm text-gray-400 tracking-wide leading-5'>
                  summer is here what are you wating for !!! 
                  shop right now and get flat 50% off on branded 
                  tees and sweatshirtss . hurrryyyy up ! 
                </p>
                <div className='flex items-center gap-4' data-aos="fade-up">
                  <GrSecure  className='h-12 w-12 text-4xl shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400 '/><p> Quality product </p>
                </div>
                <div className='flex items-center gap-4' data-aos="fade-up">
                <TbTruckDelivery  className='h-12 w-12 text-4xl shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400 '/><p> fastest delivery </p>
                </div>
                <div className='flex items-center gap-4' data-aos="fade-up">
                <RiSecurePaymentFill  className='h-12 w-12 text-4xl shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400 '/><p> fastest delivery </p>
                </div>
            </div>

        </div>

      </div>
    </div>
  )
}

export default sale
