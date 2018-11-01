import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPosts, fetchCategories } from '../actions';

import Posts from '../components/Posts'
import Category from '../components/Category'

import './App.css';

class App extends Component {

  /**
    * @description Carrega todos as categorias e posts imediatamente após a montagem do App
    */
  componentDidMount() {
    this.props.fetchCategories()
    this.props.fetchPosts()
  }

  render() {
    const { categories, posts } = this.props

    return (
      <Router>
        <div className="App">
          <ul className="categories">
            <li>
              <Link to={'/'}>
                All
              </Link>
            </li>
            {categories.map((category, index) => (
              <li key={category.path}>
                <Link to={`/${category.path}`}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
          <Route exact path='/' render={() => (
            <Posts posts={posts} />
          )}/>
          <Route exact path='/:id' component={Category} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
    posts: state.posts.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchPosts: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
