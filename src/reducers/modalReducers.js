import { FETCH_CART } from "../actions/actionTypes";

const initialModalState = { isCartOpen: false };

const modalReducer = (state = initialModalState, action) => {
  switch (action.type) {
    case FETCH_CART:
      return {
        ...state,
        isCartOpen: true
      };
    default:
      return state;
  }
};

export default modalReducer;
