import '../../App.css';
import HeroSection from '../HeroSection';
import React from 'react';
import Cards from '../Cards';
import Footer from '../Footer';
import ListsBlock from '../ListsBlock';
import CardItem from '../CardItem';
import './Home.css';
import Typewriter from "typewriter-effect";
function Home(){
    return(
        <>
            <Typewriter />
            
            <HeroSection />
            <ListsBlock />
            
            <Cards />
                
                   
        </>
    )
}
export default Home;