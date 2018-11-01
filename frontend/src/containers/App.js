import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './Header'
import Home from './Home'
import Category from './Category'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={Category} />
      </div>
    );
  }
}

export default App;
