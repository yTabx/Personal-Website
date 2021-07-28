import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className = 'footer-container'>
            <section className="footer-subsription">
                <p className="footer-subscription-heading">
                    Join the adventure newsletter to recieve our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    you can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name = "email" placeholder = "Your Email" className="footer-input" />
                        <Button buttonStyle = 'btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About us</h2>
                        <Link to = '/sign-up'>How it works</Link>
                        <Link to = '/'>Testimonials</Link>
                        <Link to = '/'>Careers</Link>
                        <Link to = '/'>Investors</Link>
                        <Link to = '/'>Terms of services</Link>
            
                    </div>
                    <div className="footer-link-items">
                        <h2>About us</h2>
                        <Link to = '/sign-up'>How it works</Link>
                        <Link to = '/'>Testimonials</Link>
                        <Link to = '/'>Careers</Link>
                        <Link to = '/'>Investors</Link>
                        <Link to = '/'>Terms of services</Link>
            
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About us</h2>
                        <Link to = '/sign-up'>How it works</Link>
                        <Link to = '/'>Testimonials</Link>
                        <Link to = '/'>Careers</Link>
                        <Link to = '/'>Investors</Link>
                        <Link to = '/'>Terms of services</Link>
            
                    </div>
                    <div className="footer-link-items">
                        <h2>About us</h2>
                        <Link to = '/sign-up'>How it works</Link>
                        <Link to = '/'>Testimonials</Link>
                        <Link to = '/'>Careers</Link>
                        <Link to = '/'>Investors</Link>
                        <Link to = '/'>Terms of services</Link>
            
                    </div>
                </div>
            </div>
            <section className="social-media">
                <section className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to = "/" className="social-logo">
                            TRVL <i className="fab fa-typo3"> </i>

                        </Link>
                    </div>
                    <small className="website-rights">TRVLC@2021</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                            to = "/"
                            target = "_blank"
                            aria-label = 'Facebook'
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link instagram"
                            to = "/"
                            target = "_blank"
                            aria-label = 'Instagram'
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-linkfacebook"
                            to = "/"
                            target = "_blank"
                            aria-label = 'Facebook'
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-linkfacebook"
                            to = "/"
                            target = "_blank"
                            aria-label = 'Facebook'
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                    </div>
                </section>
            </section>

        </div>
    );
}

export default Footer
