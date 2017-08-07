const LOAD = 'readme/LOAD';
const LOAD_SUCCESS = 'readme/LOAD_SUCCESS';
const LOAD_FAIL = 'readme/LOAD_FAIL';

const initialState = {
  loaded: false,
  username: null,
  project: null
};

export default function Readme(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true,
        username: action.username,
        project: action.project
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
        data: null
      };
    default:
      return state;
  }
}

export function isLoaded(globalState, username, project) {
  return globalState.readme && globalState.readme.loaded
    && !!username && !!project
    && globalState.readme.username === username
    && globalState.readme.project === project
    ;
}

export function load(username, project) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get(`/repositories/readme/${username}/${project}`),
    username: username,
    project: project
  };
}
