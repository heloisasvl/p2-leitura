import { RECEIVE_CATEGORIES, REQUEST_CATEGORIES } from '../actions'

const initialState = {
  isFetching: false,
  categories: []
}

const categories = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CATEGORIES:
      return Object.assign({}, state, {
        isFetching: true,
        categories: action.categories
      })
    case RECEIVE_CATEGORIES:
      return Object.assign({}, state, {
        isFetching: false,
        categories: action.categories
      })
    default:
      return state
  }
}

export default categories;
