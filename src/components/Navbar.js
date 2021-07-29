import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
function Navbar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick (false);

    const showButton = () => {
        if (window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    };

    //have the sign up button not show up every time we refresh
    useEffect(() => {
        showButton()
    },[])

    window.addEventListener('resize',showButton);
   return (
        <>
            <nav className = "navbar">
               <div className ="navbar-container">
                    
                   
                    <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                        <li className = 'nav-item'>
                            <Link to='/' className ='nav-links' onClick = {closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='/services' className ='nav-links' onClick = {closeMobileMenu}>
                                <img className='logo-image' src = 'images/logo-circle.png' alt = 'logo' />
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='/products' className ='nav-links' onClick = {closeMobileMenu}>
                                Portfolio
                            </Link>
                        </li>
                        
                    </ul>
                   
                </div>

            </nav>

        </>
   )
}

export default Navbar