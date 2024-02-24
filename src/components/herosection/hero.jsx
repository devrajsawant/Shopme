import React from 'react'
import img1 from '../../assets/img/women.webp'
import img2 from '../../assets/img/sale.webp'
import img3 from '../../assets/img/shopping.webp'
import Slider from "react-slick";



const imglist = [
    {
        id: 1,
        img: img1,
        title: "wide range of products for all ages",
        desc : "browse our wide range of products from shirt tops hoodies sneakers jeans and many more"
    },
    {
        id: 2,
        img: img2,
        title: "march is for Merch",
        desc : "get flat 50% off on buying your first avenger merch . Avengers are waiting"
    },
    {
        id: 3,
        img: img3,
        title: "summer collection is here already",
        desc : "dive into huge summer collection for 2024 , what are u waiting for"
    },
    
]

const hero = () => {

    var setting = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    };



  return (
    
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[598px]
    bg-gray-100 flex justify-center items-center dark:bg-gray-800 dark:text-white duration-200 ">
      {/* background  */}
      <div className='h-[700px] w-[700px] bg-primary/80  absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]'>

      </div>
      {/* hero section  */}
        <div className='container pb-8 sm:pb-0'>
        <Slider {...setting}>
        {imglist.map((data) => (
 <div>
 <div className='grid grid-cols-1 sm:grid-cols-2' >
{/* --------------------------text-------------------------- */}
     <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 ">
         <h1 className='text-5xl sm:text-6xl font-bold lg:text-7xl'  data-aos="zoom-out" data-aos-once="true" data-aos-duration="500">{data.title}</h1>
         <p  data-aos="zoom-out" data-aos-once="true" data-aos-duration="500">{data.desc}</p>
         <div>
             <button className='bg-gradient-to-r from-primary to-secondary transition-all text-white 
                                 py-1 px-4 rounded-full flex items-center gap-3 group'>
                 order now
             </button>
             </div>                         
     </div>
{/* --------------------------image-------------------------- */}
     <div className='order-1 sm:order-2' >
             <div className='relative z-10' data-aos="zoom-in" data-aos-once="true" >
                 <img src={data.img} alt="" className='w-[300px] h-[300px] sm:scale-125 object-contain mx-auto'/>
             </div>
     </div>
 </div>
</div>
        ))}
        
       
        </Slider>
      </div>
    </div>
  )
}

export default hero
