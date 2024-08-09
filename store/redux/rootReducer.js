import { combineReducers } from 'redux';
import favReducer from './reducer';


const rootReducer = combineReducers({
  favourite: favReducer,
});

export default rootReducer;