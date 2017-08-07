import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';

import repositories from './repositories';
import readme from './readme';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  repositories,
  readme
});
