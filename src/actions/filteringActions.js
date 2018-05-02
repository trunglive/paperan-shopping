import { ADD_FILTER, REMOVE_FILTER, ADD_TO_CART } from "./actionTypes";

export const addFilter = (name, value) => ({
  type: ADD_FILTER,
  name,
  value
});

export const removeFilter = (name, value) => ({
  type: REMOVE_FILTER,
  name,
  value
});
