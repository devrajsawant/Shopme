import React from 'react';
import img1 from "../../assets/img/productsection/women.webp";
import img2 from "../../assets/img/productsection/women2.webp";
import img3 from "../../assets/img/productsection/women3.webp";
import img4 from "../../assets/img/productsection/women4.webp";
import img5 from "../../assets/img/productsection/women5.webp";
import img6 from "../../assets/img/productsection/men1.webp";
import { FaStar } from 'react-icons/fa6';




const productdata = [
   
    {
        id: 2,
        img: img2,
        title: "aesthetics",
        rating: 5.0,
        colors:"green",
        aosDelay: "0"
    },
    {
        id: 3,
        img: img3,
        title: "goggles",
        rating: 5.0,
        colors:"black",
        aosDelay: "0"
    },
    {
        id: 6,
        img: img6,
        title: "jackets",
        rating: 5.0,
        colors:"blackS",
        aosDelay: "0"
    },
    {
        id: 4,
        img: img4,
        title: "hoodies",
        rating: 5.0,
        colors:"pink",
        aosDelay: "0"
    },
    {
        id: 5,
        img: img5,
        title: "tees",
        rating: 5.0,
        colors:"pink",
        aosDelay: "0"
    },
 

]

const product = () => {
  return (
    <div className=' dark:bg-gray-800 dark:text-white'>
        <div className='container'>
{/* header  */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p className='text-sm text-primary' data-aos="fade-up">Dive In Our Huge Collections</p>
                <h1 className='text-3xl font-bold' data-aos="fade-up">PRODUCTS</h1>
                <p className='text-xs text-gray-400'  data-aos="fade-up">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Laudantium inventore officiis a dignissimos deleniti voluptas beatae
                     ad repellat quibusdam alias.
                     Itaque excepturi ex, molestiae dolore assumenda mollitia sapiente iure hic.
                </p>
            </div>

{/* body  */}
<div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center gap-5 lg:grid-cols-5'>
        {/* cart section  */}
        {
            productdata.map((data) => (
                <div key={data.id} className='space-y-3' data-aos="fade-up" data-aos-delay={data.aosDelay}>
                    <img src={data.img} alt="" className='h-[220px] w-[150px] object-cover rounded-md' data-aos="fade-up"/>
               
                <div>
                     <h3 className='font-semibold ' data-aos="fade-up">{data.title}</h3>
                     <p className='text-sm text-gray-400'> {data.colors}</p>
                     <div className='flex item-center gap-1'>
                        <FaStar className='text-yellow-500' data-aos="fade-up"/><span>{data.rating}</span>
                     </div>
                     </div>

                </div>
            ))
        }
    </div>
</div>

{/* footer  */}
        </div>
    </div>
  )
}

export default product
