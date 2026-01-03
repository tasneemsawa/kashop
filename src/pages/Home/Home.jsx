import React from 'react'
import Categories from '../../components/Categories/Categories'
import FeaturesCards from './FeaturesCards/FeaturesCards'
import FlashDeals from './FlashDeals/FlashDeals'
import HeroSlider from './Hero/Hero'
import TopCategories from './TopCategories/TopCategories'

export default function Home() {
  return (<>
    <HeroSlider />
    <FlashDeals />
    <TopCategories/>
    <FeaturesCards />
    <Categories />
  </>

  )
}
