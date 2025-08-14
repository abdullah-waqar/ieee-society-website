import React from 'react'
import HeroSection from '../sections/HeroSection'
import AboutSection from '../sections/AboutSection'
import EventsSection from '../sections/EventsSection'
import JoinUsSection from '../sections/JoinUsSection'
import GallerySection from '../sections/GallerySection'
import Footer from '../sections/Footer'
const Home = () => {
  return (
    <div>
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <JoinUsSection />
        <GallerySection />
        <Footer />
    </div>
  )
}

export default Home