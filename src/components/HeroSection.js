import React from 'react';
import { Button } from './Button';

import '../App.css';
import ImageCard from './ImageCard'
import CardItem from './CardItem';


import Typewriter from 'typewriter-effect';

import './HeroSection.scss';

function HeroSection() {
    return (
        
        <div className = 'about-card' id = 'about'>
            <pre id="typewriter">
                <span classname ="var-highlight">Var</span> 
                developer = 
                    name: <span class="string-highlight">'Nicholas Iyamabo'</span>,
                    type: <span class="string-highlight">'Student'</span>,
                    location: <span class="string-highlight">'University of Birmingham'</span>,
                    properties:[<span class="string-highlight">'Javascript'</span>,
                                <span class="string-highlight">'HTML'</span>,
                                <span class="string-highlight">'CSS'</span>];
                 
            </pre>
            <div className = 'About-Text'>
                <p>

                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("<div className = Container>  <div>Var</div> <div> developer </div> <div> = </div> </div>").start();
                            
                        }}
                        
                    />
                    Motivated by growth and innovation,
                </p> 
                <p>
                    I aim to pursue a career within the tech industry. 
                
                    My name is Nicholas Iyamabo and I am a second-year Computer Science student at the University of Birmingham. 
                    Feel free to explore this website and contact me on any of the socials below.
                        
                </p>
            </div>
            {/*
            <div className = 'image-container'>
                <div className= 'image-wrapper'>
                    <ul className='image-trio'>
                    <ImageCard src = 'images/UoB-clock.jpg' alt = 'image' href = 'https://commons.wikimedia.org/wiki/File:The_University_of_Birmingham_Clocktower_-_geograph.org.uk_-_444013.jpg' />
                    <ImageCard src = 'images/img-8.jpg' alt = 'image' href =''/>
                    <ImageCard src = 'images/img-9.png' alt = 'image' href = ''/>
                        
                    </ul>
                </div>
            </div>
            */}
        </div>
    );
}
export default HeroSection