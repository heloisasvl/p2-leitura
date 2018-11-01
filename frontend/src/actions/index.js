import * as LeituraAPI from '../utils/LeituraAPI'

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';

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

function requestCategories() {
  return {
    type: 'REQUEST_CATEGORIES',
    categories: []
  }
}

function receiveCategories(json) {
  return {
    type: 'RECEIVE_CATEGORIES',
    categories: json.map(data => data),
    receivedAt: Date.now()
  }
}

export function fetchCategories() {
  return dispatch => {
    dispatch(requestCategories())
    LeituraAPI.getAllCategories()
      .then(json => dispatch(receiveCategories(json)))
  }
}
