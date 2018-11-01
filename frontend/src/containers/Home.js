import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPosts } from '../actions';

import Posts from '../components/Posts'

class Home extends Component {

  /**
    * @description Carrega todos os posts imediatamente
    * após a montagem da Home
    */
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    const { posts } = this.props

    return (
      <div className="home">
        <Posts posts={posts} />
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
