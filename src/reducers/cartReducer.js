import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/actionTypes";
import uuid from "uuid";

const initialCartState = {};

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (!Object.keys(state).includes(action.guid)) {
        return {
          ...state,
          [action.guid]: [
            {
              variationId: uuid(),
              ...action.details
            }
          ]
        };
      } else {
        const sameItemFound = state[action.guid];
        sameItemFound.push({ variationId: uuid(), ...action.details });

        return {
          ...state,
          [action.guid]: sameItemFound
        };
      }

    case REMOVE_FROM_CART:
      

    default:
      return state;
  }
};

export default cartReducer;
