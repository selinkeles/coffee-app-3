import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'


const Home = () => {
  return (
    <div>
        <Announcement/>      
        <Navbar/>
        <Slider/>
        <Categories/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home
