import '../../App.css';
import HeroSection from '../HeroSection';
import React from 'react';
import Cards from '../Cards';
import Footer from '../Footer';
import ListsBlock from '../ListsBlock';
import CardItem from '../CardItem';
import './Home.css';
function Home(){
    return(
        <>
            <Typewriter 
                onInit = {(typewriter) => {
                    typewriter.typeString("hello world").start();
                } }       
            />
                
                   
        </>
    )
}
export default Home;