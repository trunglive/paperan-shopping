import { combineReducers } from 'redux';
import filtering from './filteringReducer';
import cart from './cartReducer';
import sorting from './sortingReducer';

const rootReducer = combineReducers({
  filterBy: filtering,
  cart,
  sorting
})

export default rootReducer;