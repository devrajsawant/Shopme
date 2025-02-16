import React from 'react'
import img1 from "../../assets/img/topseller/orange-pattern.jpg"
import Button from '../button'

const bannerimg = {
    backgroundImage: `url(${img1})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat" , 
    backgroundSize: "cover" ,
    height: "100%",
    width : "100%"

}

const newsletter = () => {
  return (
    <div
    className=' bg-gray-100 dark:bg-gray-800 text-white'
    data-aos="fade-up"
    style={bannerimg}
    >
     <div className='container backdrop-blur-sm py-10'>
        <div className='space-y-6 max-w-xl mx-auto'>
            <h1
                className='text-2xl font-bold text-center sm:text-left sm:text-2xl'
            > Get Notified about the latest products</h1>
            <div className='flex justify-center'>
            <input type="text" placeholder='enter your email address' 
            data-aos="fade-up" className='w-full p-3 mt-1 text-black mx-4 rounded'
            />
            <Button />
            </div>
        </div>
     </div>
    </div>
  )
}

export default newsletter
