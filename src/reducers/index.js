import { combineReducers } from 'redux';
import filterBy from './filteringReducer';
import cart from './cartReducer';
import sortBy from './sortingReducer';
import modal from './modalReducer';
import search from './searchReducer';

const rootReducer = combineReducers({
  filterBy,
  cart,
  sortBy,
  modal,
  search
})

export default rootReducer;