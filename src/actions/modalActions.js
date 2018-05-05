import { FETCH_CART, ARE_ALL_FIELDS_SELECTED } from "./actionTypes";

export const fetchCart = isCartOpen => ({
  type: FETCH_CART,
  isCartOpen
});

export const toggleCartAlert = val => ({
  type: ARE_ALL_FIELDS_SELECTED,
  val
})