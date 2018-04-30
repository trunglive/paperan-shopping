import {
  SORT_BY_LOWEST_PRICE,
  SORT_BY_HIGHEST_PRICE,
  SORT_BY_POPULAR,
  SORT_BY_NEW_ARRIVALS,
  SORT_BY_MOST_REVIEWS
} from "./actionTypes";

export const sortByLowestPrice = () => ({
  type: SORT_BY_LOWEST_PRICE
});

export const sortByHighestPrice = () => ({
  type: SORT_BY_HIGHEST_PRICE
});

export const sortByPopular = () => ({
  type: SORT_BY_POPULAR
});

export const sortByNewArrivals = () => ({
  type: SORT_BY_NEW_ARRIVALS
});

export const sortByMostReviews = () => ({
  type: SORT_BY_MOST_REVIEWS
});
