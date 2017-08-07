const LOAD = 'repositories/LOAD';
const LOAD_SUCCESS = 'repositories/LOAD_SUCCESS';
const LOAD_FAIL = 'repositories/LOAD_FAIL';

const initialState = {
  loaded: false,
  username: null
};

export default function Repositories(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true,
        username: action.username
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result,
        error: null
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error,
        data: []
      };
    default:
      return state;
  }
}

export function isLoaded(globalState, username) {
  return globalState.repositories && globalState.repositories.loaded && !!username && globalState.repositories.username === username;
}

export function load(username) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get(`/repositories/all/${username}`),
    username: username
  };
}
