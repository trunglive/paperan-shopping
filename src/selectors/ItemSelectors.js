import { convertTextToPriceRange } from "../utils/convertTextToPriceRange";
import { calculateAverateRating } from "../utils/calculateAverageRating";

export const ItemSelectors = (items, filterBy, sortBy) => {
  const priceRange = convertTextToPriceRange(filterBy.price);

  return items
    .filter(
      item =>
        (filterBy.type.includes(item.type) || filterBy.type.length === 0) &&
        ((priceRange[0] <= item.price && item.price <= priceRange[1]) ||
          filterBy.price.length === 0) &&
        (filterBy.colors.some(color => item.colors.includes(color)) ||
          filterBy.colors.length === 0) &&
        (filterBy.sheetStyle.includes(item.sheet_style) ||
          filterBy.sheetStyle.length === 0) &&
        (filterBy.coverMaterial.includes(item.cover_material) ||
          filterBy.coverMaterial.length === 0) &&
        (filterBy.audience.includes(item.target_audience) ||
          filterBy.audience.length === 0)
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
          return calculateAverateRating(currentItem) <
            calculateAverateRating(nextItem)
            ? 1
            : -1;
        case "newest":
          return currentItem.updated_at < nextItem.updated_at ? 1 : -1;
        default:
          return null;
      }
    });
};
