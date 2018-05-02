import { convertTextToPriceRange } from "../utils/convertTextToPriceRange";

export const ItemSelectors = (items, filterBy) => {
  const priceRange = convertTextToPriceRange(filterBy.price);

  return items.filter(
    item =>
      filterBy.type.includes(item.type) ||
      (priceRange[0] <= Number(item.price) && item.price <= priceRange[1]) ||
      filterBy.colors.some(color => item.colors.includes(color)) ||
      filterBy.sheetStyle.includes(item.sheet_style) ||
      filterBy.coverMaterial.includes(item.cover_material) ||
      filterBy.audience.includes(item.target_audience) ||
      Object.values(filterBy).every(property => property.length === 0)
  );
};
