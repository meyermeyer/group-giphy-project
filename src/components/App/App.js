import React, { Component } from 'react';
import Search from '../Search/Search';
import Favorites from '../Favorites/Favorites'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import '../App/App.css'

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <header>
            <li><Link to = '/'>SEARCH</Link></li>
            <li><Link to = '/api/favorite'>FAVORITES</Link></li>
          </header>
        <h1>Giphy Search!</h1>
        <Route exact path = '/' component = { Search }/>
        <Route path = '/api/favorite' component = { Favorites }/>
        </Router>
      </div>
    );
  }
  
}

export default App;
