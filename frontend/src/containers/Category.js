import React, { Component} from 'react'
import { connect } from "react-redux";
import { fetchPostsByCategory } from '../actions';

import Posts from '../components/Posts'

class Category extends Component {

  /**
    * @description Carrega todos os posts de uma categoria especifica
    * imediatamente após uma atualização de Category
    */
  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.fetchPostsByCategory(this.props.match.params.id);
    }
  }

  render() {
    const { posts } = this.props

    return (
      <div className="category">
        <Posts posts={posts} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostsByCategory: (id) => dispatch(fetchPostsByCategory(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
