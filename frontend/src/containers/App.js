import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './Header'
import Home from './Home'
import Category from './Category'
import Single from './Single'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/c/:categoryId" component={Category} />
        <Route exact path="/c/:categoryId/p/:postId" component={Single} />
      </div>
    );
  }
}

export default App;
