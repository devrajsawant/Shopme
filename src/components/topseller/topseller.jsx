import React from 'react'
import img1 from "../../assets/img/topseller/shirt (1).webp"
import img2 from "../../assets/img/topseller/shirt2 (1).webp"
import img3 from "../../assets/img/topseller/shirt3 (1) (1).webp"
import { FaStar } from 'react-icons/fa6';

import { data } from 'autoprefixer'



const productsData = [
    {
        id: 1,
        img: img1,
        title: "strippin' whites",
        rating: 5.0,
        price: "Rs 450",
        aosDelay: "0"
    },
    {
        id: 2,
        img: img2,
        title: "blue seas",
        rating: 5.0,
        price:"Rs 545",
        aosDelay: "0"
    },
    {
        id: 3,
        img: img3,
        title: "modern gurl",
        rating: 5.0,
        price: "Rs 600",
        aosDelay: "0"
    },
]

const topseller = () => {
  return (
    <div className='dark:bg-gray-800 dark:text-white pt-14'>
        <div className='container'>
            {/* header part  */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p className='text-sm text-primary' data-aos="fade-up">Top rated Products for you</p>
                <h1 className='text-3xl font-bold' data-aos="fade-up">TOP SELLERS</h1>
                <p className='text-xs text-gray-400' data-aos="fade-up" >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Laudantium inventore officiis a dignissimos deleniti voluptas beatae
                     ad repellat quibusdam alias.
                     Itaque excepturi ex, molestiae dolore assumenda mollitia sapiente iure hic.
                </p>
            </div>

            {/* body part  */}
    <div 
    className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-15  '>
        {
            productsData.map((data) => (
                <div className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black mb-10 dark:hover:bg-primary hover:text-white 
                relative  duration-high group w-[300px]'>
                    {/* image section  */}
                    <div key={data.id} pb-10>
                        <img src={data.img} className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 
                        duration-800 drop-shadow-md' data-aos="fade-up" />
                    </div>

                    {/* text sections  */}
                    <div>
                        <h1 className='font-bold text-center'>{data.title}</h1>
                        <div className='w-full flex items-center justify-center gap-1'>
                            <FaStar className='text-yellow-500' />
                            <FaStar className='text-yellow-500  '/>
                            <FaStar className='text-yellow-500  '/>
                            <FaStar className='text-yellow-500 '/>
                        </div>
                        <p className=' text-center'>{data.price}</p>

                        <button className='bg-primary hover:scale-105 duration-300 text-white rounded-full px-2 py-1 w-60 mt-6 mb-4 ml-8
                        group-hover:bg-white group-hover:text-primary '>
                           order now
                          </button>
                    </div>

                </div>
            ))
        }
    </div>

        </div>
    </div>
  )
}

export default topseller
