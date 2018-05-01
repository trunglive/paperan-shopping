import { combineReducers } from 'redux';
import filtering from './filteringReducer';
import sorting from './sortingReducer';

const rootReducer = combineReducers({
  filterBy: filtering,
  sorting
})

export default rootReducer;