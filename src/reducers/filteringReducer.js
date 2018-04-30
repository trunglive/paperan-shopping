import {
  FILTER_BY_TYPE,
  FILTER_BY_PRICE,
  FILTER_BY_COLOR,
  FILTER_BY_SHEET_STYLE,
  FILTER_BY_COVER_MATERIAL,
  FILTER_BY_AUDIENCE
} from "../actions/actionTypes";

const initialFilterState = {
  type: [],
  price: [],
  color: [],
  sheetStyle: [],
  coverMaterial: [],
  audience: []
};

const filteringReducer = (state = initialFilterState, action) => {
  switch (action.type) {
    case FILTER_BY_TYPE:
      return {
        ...state,
        type: [...state.type, action.type]
      };
    case FILTER_BY_PRICE:
      return {
        ...state,
        price: [...state.price, action.price]
      };
    case FILTER_BY_COLOR:
      return {
        ...state,
        color: [...state.color, action.color]
      };
    case FILTER_BY_SHEET_STYLE:
      return {
        ...state,
        sheetStyle: [...state.sheetStyle, action.sheetStyle]
      };
    case FILTER_BY_COVER_MATERIAL:
      return {
        ...state,
        coverMaterial: [...state.coverMaterial, action.coverMaterial]
      };
    case FILTER_BY_AUDIENCE:
      return {
        ...state,
        audience: [...state.audience, action.audience]
      };
  }
};

export default filteringReducer;
