import Navbar from './components/Navbar'
import React, { useEffect } from 'react';
import{ BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Products from './components/pages/Products';
import Footer from './components/Footer';



function App() {
  // This effect runs once, after the first render
  useEffect(() => {
    document.title = "Nicholas Iyamabo"
  }, [])
  return (
    <>
      <Typewriter 
          onInit = {(typewriter) => {
              typewriter.typeString("hello world").start();
          } }       
      />
      
    </>
  );
}

export default App;
