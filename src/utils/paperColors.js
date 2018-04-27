const color = {
  grey: "#393e46",
  black: "#29252c",
  green: "#2eb872",
  blue: "#118df0",
  purple: "#7045ff",
  pink: "#fc5185"
};

export const convertColorName = name =>
  Object.keys(color).includes(name) && color[name];
