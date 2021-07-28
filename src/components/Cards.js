import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
function Cards() {
    return (
        <div className = 'Cards'>
            <h1>Portfolio</h1>
            <h2>(feel free to offer any advice or critisism)</h2>
            <div className= "cards__container">
                <div className = "cards__wrapper">
                    
                    <ul className = "cards__items">
                        <CardItem 
                            src = 'images/web-screenshot.jpg' 
                            alt = 'portfolio image' 
                            label = 'github'
                            path = '' /*TODO*/
                            text = 'Personal Website creted with Javasript and  React'
                        />
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
