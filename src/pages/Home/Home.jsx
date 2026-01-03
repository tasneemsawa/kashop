import React from 'react'
import Categories from '../../components/Categories/Categories'
import FeaturesCards from './FeaturesCards/FeaturesCards'
import FlashDeals from './FlashDeals/FlashDeals'
import HeroSlider from './Hero/Hero'

export default function Home() {
  return (<>
    <HeroSlider />
    <FlashDeals />
    <FeaturesCards />
    <Categories />
  </>

  )
}
