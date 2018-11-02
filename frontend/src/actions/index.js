import * as LeituraAPI from '../utils/LeituraAPI'

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const RECEIVE_POSTS_BY_CATEGORY = 'RECEIVE_POSTS_BY_CATEGORY';
export const REQUEST_POSTS_BY_CATEGORY = 'REQUEST__POSTS_BY_CATEGORY';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REQUEST_POST = 'REQUEST_POST';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const REQUEST_COMMENTS = 'REQUEST_COMMENTS';

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

function requestPost() {
  return {
    type: 'REQUEST_POST',
    post: {}
  }
}

function receivePost(json) {
  return {
    type: 'RECEIVE_POST',
    post: json,
    receivedAt: Date.now()
  }
}

export function fetchPost(id) {
  return dispatch => {
    dispatch(requestPost())
    LeituraAPI.getPost(id)
      .then(json => dispatch(receivePost(json)))
  }
}

export function fetchPostsByCategory(id) {
  return dispatch => {
    dispatch(requestPosts())
    LeituraAPI.getPostsByCategory(id)
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

function requestComments() {
  return {
    type: 'REQUEST_COMMENTS',
    comments: []
  }
}

function receiveComments(json) {
  return {
    type: 'RECEIVE_COMMENTS',
    comments: json.map(data => data),
    receivedAt: Date.now()
  }
}

export function fetchComments(postId) {
  return dispatch => {
    dispatch(requestComments())
    LeituraAPI.getComments(postId)
      .then(json => dispatch(receiveComments(json)))
  }
}
