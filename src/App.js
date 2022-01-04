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
    <div classname = "page">
      
      <Router>
        <Navbar />
        
        <Switch>
          <Route path = '/' exact component = {Home}/>
          <Route path = '/services' component = {Services}/>
          <Route path = '/sign-up' component = {SignUp}/>
          <Route path = '/products' component = {Products}/>

        </Switch>
        <Footer />
      </Router>
        
    </div>
  );
}

export default App;
