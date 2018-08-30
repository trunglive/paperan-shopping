import { FETCH_SHIPPING_COST } from "../actions/actionTypes";

const initialShippingState = { cost: 3.97 };

const shippingReducer = (state = initialShippingState, action) => {
  if (action.type === FETCH_SHIPPING_COST) {
    return {
      ...state,
      cost: action.cost
    };
  } else {
    return state;
  }
};

export default shippingReducer;
