import React from 'react'
import CarouselSlider from '../../Components/CarouselSlider/CarouselSlider'
import ProductsSlider from '../../Components/ProductsSlider/ProductsSlider'
import ProductsSlider2 from '../../Components/ProductsSlider/ProductsSlider2'
import AbayasGlance from '../../Components/AbayasGlance/AbayasGlance'
import HijabCategories from '../../Components/HijabCategories/HijabCategories'
import Benefits from '../../Components/Benifits/Benefits'
import BestSelling from '../../Components/BestSelling/BestSelling'
import SearchEnd from '../../Components/SearchEnd/SearchEnd'

const Home = () => {
  return (
    <div className='homePage'>
      <CarouselSlider/>
      <ProductsSlider/>
      <AbayasGlance/>
      <HijabCategories/>
      <Benefits/>
      <ProductsSlider2/>
      <BestSelling/>
      <SearchEnd/>
    </div>
  )
}

export default Home
