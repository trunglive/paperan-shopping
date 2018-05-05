import { checkItemPrice } from "../utils/checkItemPrice";
import { calculateAverageRating } from "../utils/calculateAverageRating";

export const ItemSelectors = (
  items,
  { type, priceRange, colors, sheetStyle, coverMaterial, audience },
  sortBy,
  searchVal
) => {
  return items
    .filter(
      item =>
        (type.includes(item.type) || type.length === 0) &&
        (checkItemPrice(priceRange, item.price) || priceRange.length === 0) &&
        (colors.some(color => item.colors.includes(color)) ||
          colors.length === 0) &&
        (sheetStyle.includes(item.sheet_style) || sheetStyle.length === 0) &&
        (coverMaterial.includes(item.cover_material) ||
          coverMaterial.length === 0) &&
        (audience.includes(item.target_audience) || audience.length === 0)
    )
    .filter(
      item =>
        item.name.includes(searchVal.toLowerCase()) ||
        item.type.includes(searchVal.toLowerCase()) ||
        item.colors.includes(searchVal.toLowerCase()) ||
        item.sheet_style.includes(searchVal.toLowerCase()) ||
        item.cover_material.includes(searchVal.toLowerCase()) ||
        item.target_audience.includes(searchVal.toLowerCase())
    )
    .sort((currentItem, nextItem) => {
      switch (sortBy) {
        case "best_sellers":
          return currentItem.quantity_sold < nextItem.quantity_sold ? 1 : -1;
        case "lowest_price":
          return currentItem.price > nextItem.price ? 1 : -1;
        case "highest_price":
          return currentItem.price < nextItem.price ? 1 : -1;
        case "top_rated":
          return calculateAverageRating(currentItem.reviews) <
            calculateAverageRating(nextItem.reviews)
            ? 1
            : -1;
        case "most_reviews":
          return currentItem.reviews.length < nextItem.reviews.length ? 1 : -1;
        case "newest":
          return currentItem.updated_at < nextItem.updated_at ? 1 : -1;
        default:
          return null;
      }
    });
};
