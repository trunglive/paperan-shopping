import {
  FETCH_CART,
  ARE_ALL_FIELDS_SELECTED
} from "../actions/actionTypes";

const initialModalState = {
  isCartOpen: false,
  areAllFieldsSelected: false
};

const modalReducer = (state = initialModalState, action) => {
  switch (action.type) {
    case FETCH_CART:
      return {
        ...state,
        isCartOpen: action.isCartOpen
      };

    case ARE_ALL_FIELDS_SELECTED:
      return {
        ...state,
        areAllFieldsSelected: action.val
      };
    default:
      return state;
  }
};

export default modalReducer;
