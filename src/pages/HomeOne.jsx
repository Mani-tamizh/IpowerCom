import React from 'react'
import Header from '../header/header'
import Intro from '../components/Intro/Intro'
import Keyservice from '../components/Intro/Key-Service/keyservice'
import Wcu from '../components/wcu/Wcu'
// import ServiceSlider from '../components/Service/HomeService'
import CustomCursor from '../components/Custom/CustomCursor'
import Footer from '../components/Footer/Footer'
import { useEffect } from 'react'
const HomeOne = () => {
  useEffect(() => {
    document.title = 'Home';
  }, []);
  return (
    <div>
      <Header/>
        <Intro/>
        <Keyservice/>
        {/* <ServiceSlider/> */}
        <Wcu/>
        <CustomCursor/> 
        <Footer/>
    </div>
  )
}

export default HomeOne