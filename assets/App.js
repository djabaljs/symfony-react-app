import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Home from './pages/Home'

const App = () => {
    return (
        <Router>
           <Navbar/>
           <Switch>
               <Route exact path="/" component={Home}/>
           </Switch>
           <Footer/>
        </Router>
    )
}

export default App
