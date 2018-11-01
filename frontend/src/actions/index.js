import * as LeituraAPI from '../utils/LeituraAPI'

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const REQUEST_POSTS = 'REQUEST_POSTS';

function requestPosts() {
  return {
    type: 'REQUEST_POSTS',
    posts: []
  }
}

function receivePosts(json) {
  return {
    type: 'RECEIVE_POSTS',
    posts: json.map(data => data),
    receivedAt: Date.now()
  }
}

export function fetchPosts() {
  return dispatch => {
    dispatch(requestPosts())
    LeituraAPI.getAllPosts()
      .then(json => dispatch(receivePosts(json)))
  }
}
