import { FETCH_CART, TOGGLE_FILTER_ICON } from "./actionTypes";

export const fetchCart = isCartOpen => ({
  type: FETCH_CART,
  isCartOpen
});

export const toggleFilterIcon = route => ({
  type: TOGGLE_FILTER_ICON,
  route
})