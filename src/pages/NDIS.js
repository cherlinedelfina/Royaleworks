import React from 'react';
import Footer from '../components/Footer';
import Intro from '../components/NDIS/Intro';
import NdisInclude from '../components/NDIS/NdisInclude';
import WhoWeWorkWith from '../components/NDIS/WhoWeWorkWith';
import NavBar from '../components/Navbar/NavBar';

const Home = () => {
    return (
        <>
            <NavBar />
            <Intro />
            <NdisInclude />
            <WhoWeWorkWith />
            <Footer />
        </>

    )
}

export default Home;

