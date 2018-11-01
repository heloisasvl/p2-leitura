import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchCategories } from '../actions';

class Header extends Component {

  /**
    * @description Carrega todos as categorias
    * imediatamente após a montagem da Header
    */
  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {
    const { categories } = this.props

    return (
      <div className="header">
        <ul className="header-categories">
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => dispatch(fetchCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
