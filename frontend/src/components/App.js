import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPosts } from '../actions';

import './App.css';

class App extends Component {

  /**
    * @description Carrega todos os posts imediatamente após a montagem do App
    */
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    return (
      <div className="App"></div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
