import React, { Component} from 'react'

class Category extends Component {
  render() {
    const { match } = this.props

    return (
      <div className="category">
        <div className="category-name">{match.params.id}</div>
      </div>
    )
  }
}

export default Category
