import React from 'react'
import Banner from "../components/Banner"
import Sales from "../components/Sales"
import Newarrivals from "../components/Newarrivals"
import Specials from '../components/Specials'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <Banner/>
        <Sales/>
        <Newarrivals/>
        <Specials/>
    </>
  )
}

export default Home