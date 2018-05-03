import { FETCH_CART } from "./actionTypes";

export const fetchCart = isCartOpen => ({
  type: FETCH_CART,
  isCartOpen
});