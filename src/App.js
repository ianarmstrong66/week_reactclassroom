import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

import HomePage from './HomePage';
import AboutUs from './AboutUs';
import MyPage from './MyPage';
import salaryPage from './AppSalaryArray';
import areaPage from './area';
import calcPage from './ttable';

class App extends Component  {
  render(){
  return(
    <div>
    <Router>
    <div>
    <ul className="navbar-nav">
        <li><Link className="nav-link" to="/home">Home</Link></li>
        <li><Link className="nav-link" to="/about">About</Link></li>
        <li><Link className="nav-link" to="/home/ian">Who be I</Link></li>        
        <li><Link className="nav-link" to="/salaryPage">Salary</Link></li>     
        <li><Link className="nav-link" to="/area">Area</Link></li>  
        <li><Link className="nav-link" to="/ttable">TimesTable</Link></li>
    </ul>
    </div>
    <div>
    <Route path="/" exact component={HomePage} />
    <Route path="/home" component={HomePage} />
    <Route path="/about" component={AboutUs} />
    <Route path="/home/ian" component={MyPage} />
    <Route path="/salaryPage" component={salaryPage} />
    <Route path="/area" component={areaPage} />
    <Route path="/ttable/:node" component={calcPage} />
    </div>
    </Router>
    </div>
    )
    }
};

export default App;