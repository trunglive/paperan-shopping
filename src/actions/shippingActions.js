import { FETCH_SHIPPING_COST } from "./actionTypes";

export const fetchShippingCost = cost => ({
  type: FETCH_SHIPPING_COST,
  cost: Number(cost)
});
