import {
  SORT_BY_LOWEST_PRICE,
  SORT_BY_HIGHEST_PRICE,
  SORT_BY_POPULAR,
  SORT_BY_NEW_ARRIVALS,
  SORT_BY_MOST_REVIEWS
} from "../actions/actionTypes";

const initialSortingState = { sortBy: "New Arrivals" };

const sortingReducer = (state = initialSortingState, action) => {
  switch (action.type) {
    case SORT_BY_LOWEST_PRICE:
      return {
        ...state,
        sortBy: "Lowest Price"
      };
    case SORT_BY_HIGHEST_PRICE:
      return {
        ...state,
        sortBy: "Highest Price"
      };
    case SORT_BY_POPULAR:
      return {
        ...state,
        sortBy: "Popular"
      };
    case SORT_BY_NEW_ARRIVALS:
      return {
        ...state,
        sortBy: "New Arrivals"
      };
    case SORT_BY_MOST_REVIEWS:
      return {
        ...state,
        sortBy: "Most Reviews"
      };
  }
};

export default sortingReducer;
