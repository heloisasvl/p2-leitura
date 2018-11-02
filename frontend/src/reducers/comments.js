import { RECEIVE_COMMENTS, REQUEST_COMMENTS } from '../actions'

const initialState = {
  isFetching: false,
  comment: {},
  comments: []
}

const comments = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_COMMENTS:
      return Object.assign({}, state, {
        isFetching: true,
        comments: action.comments
      })
    case RECEIVE_COMMENTS:
      return Object.assign({}, state, {
        isFetching: false,
        comments: action.comments
      })
    default:
      return state
  }
}

export default comments;
