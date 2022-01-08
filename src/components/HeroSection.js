import React from 'react';
import { Button } from './Button';

import '../App.css';
import ImageCard from './ImageCard'
import CardItem from './CardItem';


import Typewriter from 'typewriter-effect';

import './HeroSection.scss';

function HeroSection() {
    return (
        <>
            <div className='type-writer-block'>
                <div className='type-writer'>
                    <Typewriter options={{
                        delay: 10,
                        skipAddStyles: false
                    }}
                        onInit={(typewriter) => {
                            typewriter.typeString("<pre> <span, style = 'color: peachpuff;'>Var</span> <span style = 'color: black;'> developer =</span><br>        <span style = 'color: black;'> name: </span><span style = 'color: rgba(253, 149, 90, 0.8);'> 'Nicholas Iyamabo'</span><span style = 'color: black;'>,</span><br>        <span style = 'color: black;'> type: </span><span style = 'color: rgba(253, 149, 90, 0.8);'> 'Student'</span><span style = 'color: black;'>,</span><br>       <span style = 'color: black;'> location: </span><span style = 'color: rgba(253, 149, 90, 0.8);'> 'University of Birmingham'</span><span style = 'color: black;'>,</span><br>      <span style = 'color: black;'> properties: [</span><span style = 'color: rgba(253, 149, 90, 0.8);'> 'Web Development'</span><span style = 'color: black;'>,</span><br>                         <span style = 'color: rgba(253, 149, 90, 0.8);'> 'Software Development'</span><span style = 'color: black;'>] </span></pre> <div> welcome</div> ").start();
                        }}

                    />
                </div>
            </div>
            <div className = 'about-card' id = 'about'>
               
                <div className = 'About-Text'>
                    <p>
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
        </>
    );
}
export default HeroSection