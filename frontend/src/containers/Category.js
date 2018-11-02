import React, { Component} from 'react'
import { connect } from "react-redux";
import { fetchPostsByCategory } from '../actions';

import Posts from '../components/Posts'

class Category extends Component {

  /**
    * @description Carrega todos os posts de uma categoria especifica
    * imediatamente após uma atualização de Category
    */
  componentDidMount() {
    this.props.fetchPostsByCategory(this.props.match.params.categoryId);
  }

  /**
    * @description Carrega todos os posts de uma categoria especifica
    * imediatamente após uma atualização de Category
    */
  componentDidUpdate(prevProps) {
    if (this.props.match.params.categoryId !== prevProps.match.params.categoryId) {
      this.props.fetchPostsByCategory(this.props.match.params.categoryId);
    }
  }

  render() {
    const { posts, match } = this.props

    return (
      <div className="category">
        <div className="jumbotron jumbotron-fluid py-4">
          <div className="container-fluid">
            <h1 className="display-5">c/{match.params.categoryId}</h1>
            <p>Idêntica à view padrão, mas filtrada para incluir somente postagens com a categoria selecionada</p>
          </div>
        </div>
        <main className="container-fluid">
          <Posts posts={posts} />
        </main>
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
    fetchPostsByCategory: (categoryId) => dispatch(fetchPostsByCategory(categoryId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
