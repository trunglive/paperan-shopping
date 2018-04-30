import {
  FILTER_BY_TYPE,
  FILTER_BY_PRICE,
  FILTER_BY_COLOR,
  FILTER_BY_SHEET_STYLE,
  FILTER_BY_COVER_MATERIAL,
  FILTER_BY_AUDIENCE
} from "./actionTypes";

export const filterByType = () => ({
  type: FILTER_BY_TYPE
});

export const filterByPrice = () => ({
  type: FILTER_BY_PRICE
});

export const filterByColor = () => ({
  type: FILTER_BY_COLOR
});

export const filterBySheetStyle = () => ({
  type: FILTER_BY_SHEET_STYLE
});

export const filterByCoverMaterial = () => ({
  type: FILTER_BY_COVER_MATERIAL
});

export const filterByAudience = () => ({
  type: FILTER_BY_AUDIENCE
});
