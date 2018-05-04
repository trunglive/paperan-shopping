import {
  FETCH_CART,
  TOGGLE_FILTER_ICON,
  IS_ALL_FIELDS_SELECTED
} from "../actions/actionTypes";

const initialModalState = {
  isCartOpen: false,
  isFilterShown: false,
  isAllFieldsSelected: false
};

const modalReducer = (state = initialModalState, action) => {
  switch (action.type) {
    case FETCH_CART:
      return {
        ...state,
        isCartOpen: action.isCartOpen
      };

    case TOGGLE_FILTER_ICON:
      return {
        ...state,
        isFilterShown:
          action.route === "/collection/all" ||
          action.route === "/collection/all/"
      };
    case IS_ALL_FIELDS_SELECTED:
      return {
        ...state,
        isAllFieldsSelected: action.val
      };
    default:
      return state;
  }
};

export default modalReducer;
