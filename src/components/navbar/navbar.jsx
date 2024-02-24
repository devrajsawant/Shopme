import React from 'react'
import { IoMdSearch  } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import Darkmode from './darkmode';

const menu = [
  {
    id:1,
    name: "home",
    link: "/#"
  },
  {
    id:2,
    name: "hot picks",
    link: "/#trending"
  },
  {
    id:3,
    name: "kids wear",
    link: "/#kids"
  },
  {
    id:4,
    name: "Mens",
    link: "/#Mens"
  },
  {
    id:5,
    name: "womens",
    link: "/#womens"
  },
]

const dropdown = [
  {
    id:1,
    name: "tees",
    link: "/#tees"
  },
  {
    id:2,
    name: "sneaker",
    link: "/#sneaker"
  },
  {
    id:3,
    name: "cargos",
    link: "/#cargos"
  },
  {
    id:4,
    name: "sweatshirts",
    link: "/#Mens"
  },
]


const navbar = () => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
        {/* upper part */}
      <div className='bg-primary/80 py-2 '>
        <div className='container flex justify-between items-center'>
            <div>
                <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2 '>
                <img src="/src/assets/img/logo.png" alt="" className='w-10 uppercase' />
                SHOPME</a>
                
            </div>
            {/* search */}
            <div className='flex justify-between items-center gap-4'>
              <div className='group relative hidden sm:block'>
                <input type="text" name="" id="" placeholder="search"  className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all-duration-300 
                rounded-full border border-gray-400 px-2 py-1 focus:outline-none focus:bottom-1 focus:border-primary'/>
                <IoMdSearch 
                className='text-gray-500 group-hover:text-primary absolute top-1/2  -translate-y-1/2 right-3'/>
              </div>

                {/* shopping cart */}
              <button onClick={() => alert("nothing in cart")} className='bg-gradient-to-r from-primary to-secondary transition-all text-white 
            py-1 px-4 rounded-full flex items-center gap-3 group'>
              <span className='group-hover:block hidden transition-all duration-200'>order</span>
              <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer'/>
            </button>

            {/* darkmode button  */}
            <div><Darkmode /></div>

            </div>
          
            
        </div>
      </div>
            {/* lower part */}
    <div className='flex justify-center'>
          <ul className='sm:flex hidden items-center gap-4'>
              {menu.map((data) => (
                <li key={data.id}>
                  <a href={data.link} className='inline-block px-4 hover:text-primary duration-200'>{data.name}</a>
                </li>
              ))}
              {/* dropdown list */}

              <li className='group relative cursor-pointer '>
                <a href="" className='flex items-center gap-3 group  hover:text-primary duration-200'> trendings
                <span>
                  <FaCaretDown className=' transition-all duration-200 group-hover:-rotate-180'/>
                  </span> </a>

                  <div className='absolute z-[9999] hidden group-hover:block w-[280px] rounded-md bg-primary/35 p-2 text-black'>
                  <ul className='sm:flex hidden items-center gap-4'>
              {dropdown.map((data) => (
                <li key={data.id}>
                  <a href={data.link} >{data.name}</a>
                </li>
              ))}

{/* className='inline-block px-4 hover:text-primary duration-200' */}

                      </ul>
                  </div>
              </li>
          </ul>
     </div>
    </div>
  )
}

export default navbar

