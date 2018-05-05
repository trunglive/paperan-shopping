import { DISPLAY_CURRENT_ROUTE } from "../actions/actionTypes";

const initialRoutingState = {};

const routingReducer = (state = initialRoutingState, action) => {
  switch (action.type) {
    case DISPLAY_CURRENT_ROUTE:
      return {
        ...state,
        currentRoute: action.route
      };

    default:
      return state;
  }
};

export default routingReducer;
