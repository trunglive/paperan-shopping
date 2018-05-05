import { HANDLE_WAYPOINT } from "../actions/actionTypes";

const initialWaypointState = {
  section: ""
};

const waypointReducer = (state = initialWaypointState, action) => {
  if (action.type === HANDLE_WAYPOINT) {
    return {
      ...state,
      ...action.section
    };
  } else {
    return initialWaypointState;
  }
};

export default waypointReducer;
