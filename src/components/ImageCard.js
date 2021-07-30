import React from 'react';
import { Button } from './Button';
import './ImageCard.css';
import '../App.css';
function ImageCard(props) {
    return (
        <>
        
            <a href = {props.href}  target = '_blank' rel="noreferrer" rel='noopener noreferrer'>
                
                    <img className = 'image' src = {props.src} alt = {props.alt}  />
                
            </a>
        
        </>
    );
}
export default ImageCard;