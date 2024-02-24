import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/herosection/hero'
import Product from './components/products/product'
import Topseller from './components/topseller/topseller'
import Sale from './components/sale/sale'
import AOS from "aos"
import "aos/dist/aos.css"

const App = () => {

React.useEffect(() => {
  AOS.init({
    offset: 100,
    duration: 800,
    easing: "easi-in-sine",
    delay: 100
  });
  AOS.refresh();

}, [])

  return( 
    <div>
    <Navbar/>
    <Hero />
    <Product />
    <Topseller />
    <Sale />
    </div>
  )
}

export default App
