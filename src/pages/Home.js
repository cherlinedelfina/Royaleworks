import React from 'react';
import Clients from '../components/Home/Clients';
import Footer from '../components/Footer';
import Hero from '../components/Home/Hero';
import NavBar from '../components/Navbar/NavBar';
import Intro from '../components/Home/Intro';
import WhyChooseUs from "../components/Home/WhyChooseUs";
import Services from '../components/Home/Services';


const Home = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <Intro />
            <WhyChooseUs />
            <Services />
            <Clients />
            <Footer />
        </>

    )
}

export default Home;

