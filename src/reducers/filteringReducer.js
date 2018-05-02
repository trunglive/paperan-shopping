import {
  ADD_FILTER,
  REMOVE_FILTER
} from "../actions/actionTypes";

const initialFilterState = {
  type: [],
  price: [],
  colors: [],
  sheetStyle: [],
  coverMaterial: [],
  audience: []
};

const filteringReducer = (state = initialFilterState, action) => {
  switch (action.type) {
    case ADD_FILTER:
      return {
        ...state,
        [action.name]: [...state[action.name], action.value]
      };
    case REMOVE_FILTER:
      return {
        ...state,
        [action.name]: [
          ...state[action.name].filter(item => item !== action.value)
        ]
      };
    default:
      return state;
  }
};

export default filteringReducer;
