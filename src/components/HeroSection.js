import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';
import ImageCard from './ImageCard'
import CardItem from './CardItem';
//type writer function 
function setupTypewriter(t) {
    var HTML = t.innerHTML;

    t.innerHTML = "";

    var cursorPosition = 0,
        tag = "",
        writingTag = false,
        tagOpen = false,
        typeSpeed = 100,
      tempTypeSpeed = 0;

    var type = function() {
      
        if (writingTag === true) {
            tag += HTML[cursorPosition];
        }

        if (HTML[cursorPosition] === "<") {
            tempTypeSpeed = 0;
            if (tagOpen) {
                tagOpen = false;
                writingTag = true;
            } else {
                tag = "";
                tagOpen = true;
                writingTag = true;
                tag += HTML[cursorPosition];
            }
        }
        if (!writingTag && tagOpen) {
            tag.innerHTML += HTML[cursorPosition];
        }
        if (!writingTag && !tagOpen) {
            if (HTML[cursorPosition] === " ") {
                tempTypeSpeed = 0;
            }
            else {
                tempTypeSpeed = (Math.random() * typeSpeed) + 50;
            }
            t.innerHTML += HTML[cursorPosition];
        }
        if (writingTag === true && HTML[cursorPosition] === ">") {
            tempTypeSpeed = (Math.random() * typeSpeed) + 50;
            writingTag = false;
            if (tagOpen) {
                var newSpan = document.createElement("span");
                t.appendChild(newSpan);
                newSpan.innerHTML = tag;
                tag = newSpan.firstChild;
            }
        }

        cursorPosition += 1;
        if (cursorPosition < HTML.length - 1) {
            setTimeout(type, tempTypeSpeed);
        }

    };

    return {
        type: type
    };
}

var typer = document.getElementById('typewriter');

typewriter = setupTypewriter(typewriter);

typewriter.type();





function HeroSection() {
    return (
        
        <div className = 'about-card' id = 'about'>
            <pre id="typewriter">
                <span class="var-highlight">var</span> 
                object = 
                    name: <span class="string-highlight">'Foo'</span>,
                    type: <span class="string-highlight">'Bar'</span>,
                    location: <span class="string-highlight">'Earth'</span>,
                    properties:[<span class="string-highlight">'Javascript'</span>,
                                <span class="string-highlight">'HTML'</span>,
                                <span class="string-highlight">'CSS'</span>];
                 
            </pre>
            <div className = 'About-Text'>
                <p >
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