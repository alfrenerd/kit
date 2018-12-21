import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import StockPage from './components/StockPage';
import Trending from './components/Trending';

import Landing from './components/Landing';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            {/* <Route path='/' component={Home} exact/> */}
            <Route path='/' component={Landing} exact/>
            <Route path='/trending' component={Trending}/>
            {/* <Route path='/:id' component={StockPage}/> */}
            <Route path='/:id' render={props => <StockPage key={Date.now()} {...props} />}/>
          </Switch>
        </div>
      </Router>


    );
  }
}

export default App;
