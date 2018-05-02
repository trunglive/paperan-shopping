import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

export const addToCart = (
  guid,
  currentSize,
  currentColor,
  photo_url,
  fullItemName,
  price,
  quantity
) => ({
  type: ADD_TO_CART,
  guid,
  details: {
    currentSize,
    currentColor,
    photo_url,
    fullItemName,
    price,
    quantity
  }
});

export const removeFromCart = (guid, currentSize, currentColor) => ({
  type: REMOVE_FROM_CART,
  guid,
  currentSize,
  currentColor
});
