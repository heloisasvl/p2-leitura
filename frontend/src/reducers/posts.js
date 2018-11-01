import { RECEIVE_POSTS, REQUEST_POSTS } from '../actions'

const initialState = {
  isFetching: false,
  posts: []
}

const posts = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        posts: action.posts
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        posts: action.posts
      })
    default:
      return state
  }
}

export default posts;
