import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AdvertDetails from './pages/AdvertDetails';
import Adverts from './pages/Adverts';

import Home from './pages/Home'

const App = () => {
    return (
        <Router>
           <Navbar/>
           <Switch>
               <Route exact path="/" component={Home}/>
               <Route path="/annonces/details/" component={AdvertDetails}/>
               <Route path="/annonces" component={Adverts}/>
           </Switch>
           <Footer/>
        </Router>
    )
}

export default App
