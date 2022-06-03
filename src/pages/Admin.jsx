import React from 'react'
import Navbar2 from '../components/Navbar2'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'


const Admin = () => {
  return (
    <div>
        <Announcement/>      
        <Navbar2/>
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Admin