import { combineReducers } from 'redux';
import filterBy from './filteringReducer';
import cart from './cartReducer';
import sortBy from './sortingReducer';
import modal from './modalReducers';

const rootReducer = combineReducers({
  filterBy,
  cart,
  sortBy,
  modal
})

export default rootReducer;