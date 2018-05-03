import { combineReducers } from 'redux';
import filterBy from './filteringReducer';
import cart from './cartReducer';
import sortBy from './sortingReducer';

const rootReducer = combineReducers({
  filterBy,
  cart,
  sortBy
})

export default rootReducer;