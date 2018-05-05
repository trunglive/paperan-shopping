import { DISPLAY_CURRENT_ROUTE } from "./actionTypes";

export const displayCurrentRoute = route => ({
  type: DISPLAY_CURRENT_ROUTE,
  route
});
