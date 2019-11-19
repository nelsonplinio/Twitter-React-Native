import {combineReducers} from 'redux';

import tweets from './tweets';
import user from './user';

export default combineReducers({
  tweets,
  user,
});
