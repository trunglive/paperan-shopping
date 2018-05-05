import { HANDLE_WAYPOINT } from './actionTypes';

export const handleWaypoint = (section) => ({
  type: HANDLE_WAYPOINT,
  section
})