import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

export const addToCart = (
  guid,
  type,
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
    productType: type,
    currentSize,
    currentColor,
    photo_url,
    fullItemName,
    price,
    quantity
  }
});

export const removeFromCart = (guid, variationId) => ({
  type: REMOVE_FROM_CART,
  guid,
  variationId
});
