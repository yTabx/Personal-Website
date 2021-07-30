import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className = 'footer-container'>
            <h1 className= 'contact-info-text'>Contact infomation</h1>
            
            <section className="social-media">
                <section className="social-media-wrap">
                <a className='email-link' href = 'mailto:niyamabo@gmail.com'>
                    <div className = 'email-container'>
                            Email me
                    </div>
                </a>
                    <div className="social-icons">
                        <ul classname = 'link-list'>
                            
                            
                            
                            <a className="social-icon-link github"
                                href = 'https://github.com/yTabx'
                                target = "_blank"
                                aria-label = 'github'
                            >
                                <i className="fab fa-github"></i>
                            </a>
                            <a className="social-icon-link linkedin"
                                href = 'https://www.linkedin.com/in/nicholas-iyamabo/'
                                target = "_blank"
                                aria-label = 'Linkedin'
                            >
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </ul>
                       
                    </div>
                    
                </section>
            </section>
            <div className = 'website-rights'>
                <small className = 'website-rights' >©2021</small>
            </div>
        </div>
    );
}

export default Footer
