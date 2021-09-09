import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
function Cards() {
    return (
        <div className = 'Cards' id = 'portfolio'>
            <h1>Portfolio</h1>
            <h2>(Feel free to offer any advice or criticism)</h2>
            <div className= "cards__container">
                <div className = "cards__wrapper">
                    
                    <ul className = "cards__items">
                        <CardItem 
                            src = 'images/web-screenshot.jpg' 
                            alt = 'portfolio image' 
                            label = 'github'
                            path = 'https://github.com/yTabx/Personal-Website' 
                            text = 'Personal Website created with JavaScript and React'
                        />
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
