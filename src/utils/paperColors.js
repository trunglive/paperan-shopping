const color = {
  grey: "#606470",
  black: "#393939",
  green: "#627d60",
  blue: "#429ffd",
  purple: "#7045ff",
  pink: "#f73859"
};

export const convertColorName = name =>
  Object.keys(color).includes(name) && color[name];