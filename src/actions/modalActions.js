import { FETCH_CART, TOGGLE_FILTER_ICON, IS_ALL_FIELDS_SELECTED } from "./actionTypes";

export const fetchCart = isCartOpen => ({
  type: FETCH_CART,
  isCartOpen
});

export const toggleFilterIcon = route => ({
  type: TOGGLE_FILTER_ICON,
  route
})

export const toggleCartAlert = val => ({
  type: IS_ALL_FIELDS_SELECTED,
  val
})