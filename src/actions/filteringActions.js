import {
  FILTER_BY_CATEGORY
} from "./actionTypes";

export const filterByCategory = (name, value) => ({
  type: FILTER_BY_CATEGORY,
  name,
  value
});

// export const filterByType = (name, value) => ({
//   type: FILTER_BY_TYPE,
//   name,
//   value
// });

// export const filterByPrice = (name, value) => ({
//   type: FILTER_BY_PRICE,
//   name,
//   value
// });

// export const filterByColor = (name, value) => ({
//   type: FILTER_BY_COLOR,
//   name,
//   value
// });

// export const filterBySheetStyle = (name, value) => ({
//   type: FILTER_BY_SHEET_STYLE,
//   name,
//   value
// });

// export const filterByCoverMaterial = (name, value) => ({
//   type: FILTER_BY_COVER_MATERIAL,
//   name,
//   value
// });

// export const filterByAudience = (name, value) => ({
//   type: FILTER_BY_AUDIENCE,
//   name,
//   value
// });
