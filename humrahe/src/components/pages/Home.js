import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import React from 'react'

// The components of the page are added

function Home() {
    return(
        <>
            <HeroSection/>
            <Cards/>
            <Footer/>
        </>
    )
}

export default Home;