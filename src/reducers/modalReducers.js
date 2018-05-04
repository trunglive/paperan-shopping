import { FETCH_CART, TOGGLE_FILTER_ICON } from "../actions/actionTypes";

const initialModalState = { isCartOpen: false, isFilterShown: false };

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
    default:
      return state;
  }
};

export default modalReducer;
