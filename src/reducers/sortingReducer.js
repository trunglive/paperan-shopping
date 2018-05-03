import { SORT_BY } from "../actions/actionTypes";

const initialSortingState = { value: "newest" };

const sortingReducer = (state = initialSortingState, action) => {
  switch (action.type) {
    case SORT_BY:
      return {
        ...state,
        value: action.value
      };
    default:
      return state;
  }
};

export default sortingReducer;
