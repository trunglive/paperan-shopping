import { FILTER_BY_CATEGORY } from "../actions/actionTypes";

const initialFilterState = {
  type: [],
  price: [],
  color: [],
  sheetStyle: [],
  coverMaterial: [],
  audience: []
};

const filteringReducer = (state = initialFilterState, action) => {
  switch (action.type) {
    case FILTER_BY_CATEGORY:
      return {
        ...state,
        [action.name]: [...state[action.name], action.value]
      };
    default:
      return state;
  }
};

// const filteringReducer = (state = initialFilterState, action) => {
//   switch (action.type) {
//     case FILTER_BY_TYPE:
//       return {
//         ...state,
//         [action.name]: [...state[action.name], action.value]
//       };
//     case FILTER_BY_PRICE:
//       return {
//         ...state,
//         [action.name]: [...state[action.name], action.value]
//       };
//     case FILTER_BY_COLOR:
//       return {
//         ...state,
//         [action.name]: [...state[action.name], action.value]
//       };
//     case FILTER_BY_SHEET_STYLE:
//       return {
//         ...state,
//         [action.name]: [...state[action.name], action.value]
//       };
//     case FILTER_BY_COVER_MATERIAL:
//       return {
//         ...state,
//         [action.name]: [...state[action.name], action.value]
//       };
//     case FILTER_BY_AUDIENCE:
//       return {
//         ...state,
//         [action.name]: [...state[action.name], action.value]
//       };
//     default:
//       return state;
//   }
// };

export default filteringReducer;
