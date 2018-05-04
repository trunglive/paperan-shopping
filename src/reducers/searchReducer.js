import { SEARCH_PRODUCTS } from "../actions/actionTypes";

const initialSearchState = { keyword: "" };

const searchReducer = (state = initialSearchState, action) => {
  switch (action.type) {
    case SEARCH_PRODUCTS:
      return {
        ...state,
        keyword: action.value
      };
    default:
      return state;
  }
};

export default searchReducer;
