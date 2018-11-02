import { RECEIVE_POST, REQUEST_POST, RECEIVE_POSTS, REQUEST_POSTS } from '../actions'

const initialState = {
  isFetching: false,
  post: {},
  posts: []
}

const posts = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POST:
      return Object.assign({}, state, {
        isFetching: true,
        post: action.post
      })
    case RECEIVE_POST:
      return Object.assign({}, state, {
        isFetching: false,
        post: action.post
      })
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        posts: action.posts
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        posts: action.posts.filter(item => {
          return !item.deleted // Marcado se o post foi 'deletado' (sem acesso no front end), (default: false)
        })
      })
    default:
      return state
  }
}

export default posts;
