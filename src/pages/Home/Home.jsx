import React from 'react'
import Categories from '../../components/Categories/Categories'
import WelcomeModal from '../../components/WelcomeModal/WelcomeModal'
import FeaturesCards from './FeaturesCards/FeaturesCards'
import FlashDeals from './FlashDeals/FlashDeals'
import HeroSlider from './Hero/Hero'
import NewArrivals from './NewArrivals/NewArrivals'
import Offers from './Offers/Offers'
import TopCategories from './TopCategories/TopCategories'
import { Container } from '@mui/material';
import ProductsSection from './ProductsSection/ProductsSection'



export default function Home() {
  return (<>
    <HeroSlider />
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <FlashDeals />
      <WelcomeModal/>

      <TopCategories />
      <NewArrivals />
      <Offers />
      <FeaturesCards />

      <Categories />
      <ProductsSection/>
    </Container>
  </>

  )
}
