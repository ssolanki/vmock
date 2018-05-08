// ------------------------------------
// Constants
// ------------------------------------
export const SEARCH_USER = 'SEARCH_USER'

export const searchUser = (val) => {
  return (dispatch, getState) => {
    const api = "https://api.github.com/search/users" + '?q=' + val
    return fetch(api)
    .then(function(response) {
      return response.json()
    }).then(function(json) {
      dispatch({
        type    : SEARCH_USER,
        payload : json.items
      })
    })
    
  }
}
export const actions = {
  searchUser
}

const initialState = { items: [] }
export default function homeReducer (state = initialState, action) {
  switch (action.type) {
    case SEARCH_USER:
      return {...state, items: action.payload}
      break;
    default:
      return state
  }
}
