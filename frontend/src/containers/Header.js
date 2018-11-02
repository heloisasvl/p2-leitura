import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to={'/'}>
            Leitura
          </Link>
        </nav>

        <div className="nav-scroller bg-white shadow-sm">
          <nav className="nav nav-underline">
            {categories.map((category, index) => (
              <NavLink className="nav-link" key={category.path} to={`/c/${category.path}`}>
                {category.name}
              </NavLink>
            ))}
          </nav>
        </div>
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
