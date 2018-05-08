// ------------------------------------
// Constants
// ------------------------------------
export const SEARCH_USER_BASIC_INFO = 'SEARCH_USER_BASIC_INFO'
export const SEARCH_USER_REPO_INFO = 'SEARCH_USER_REPO_INFO'

export const fetchUserBasicInfo = (user) => {
  return (dispatch, getState) => {
    const api = "https://api.github.com/users/" + user
    return fetch(api)
    .then(function(response) {
      return response.json()
    }).then(function(json) {
      dispatch({
        type    : SEARCH_USER_BASIC_INFO,
        payload : json
      })
    })
  }
}

export const fetchUserRepos = (user) => {
  return (dispatch, getState) => {
    const api = "https://api.github.com/users/" + user + "/repos"
    return fetch(api)
    .then(function(response) {
      return response.json()
    }).then(function(json) {
      dispatch({
        type    : SEARCH_USER_REPO_INFO,
        payload : json
      })
    })
  }
}

const initialState = { name: '', avatar_url: '', repos: [], location: '' }
export default function userReducer (state = initialState, action) {
  switch (action.type) {
    case SEARCH_USER_BASIC_INFO:
      return {...state, ...action.payload}
    case SEARCH_USER_REPO_INFO:
      return {...state, repos: action.payload}
    default:
      return state
  }
}
