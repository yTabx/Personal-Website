import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';
import ImageCard from './ImageCard'
import CardItem from './CardItem';
function HeroSection() {
    return (
        <div className = 'about-card'>
            <div className = 'About-Text'>
                <p >
                    Motivated by growth and innovation,
                </p> 
                <p>
                    I aim to pursue a career within the tech industry. 
                
                    My name is Nicholas Iyamabo and I am a second-year computer science student at the University of Birmingham. 
                    Feel free to explore this website and contact me on any of the socials below.
                        
                </p>
            </div>
            <div className = 'image-container'>
                <div className= 'image-wrapper'>
                    <ul className='image-trio'>
                    <ImageCard src = 'images/UoB-clock.jpg' alt = 'image' href = 'https://commons.wikimedia.org/wiki/File:The_University_of_Birmingham_Clocktower_-_geograph.org.uk_-_444013.jpg' />
                    <ImageCard src = 'images/img-8.jpg' alt = 'image' href =''/>
                    <ImageCard src = 'images/img-9.png' alt = 'image' href = ''/>
                        
                    </ul>
                </div>
            </div>
            
        </div>
    );
}
export default HeroSection