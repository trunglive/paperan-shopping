import { SORT_BY } from "../actions/actionTypes";

const initialSortingState = { sortBy: "newest" };

const sortingReducer = (state = initialSortingState, action) => {
  switch (action.type) {
    case SORT_BY:
      return {
        ...state,
        sortBy: action.value
      };
    default:
      return state;
  }
};

export default sortingReducer;
