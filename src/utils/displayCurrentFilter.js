export const displayCurrentFilter = filter => {
  const currentFilter = [];

  Object.keys(filter).map(key => {
    if (filter[key].length > 0) {
      currentFilter.push(key);
    }
  });

  const convertedFilter = currentFilter.map(filter => {
    switch (filter) {
      case "colors":
        return "color";
      case "priceRange":
        return "price";
      case "coverMaterial":
        return "cover material";
      case "sheetStyle":
        return "sheet style";
      default:
        return filter;
    }
  });

  if (convertedFilter.length !== 0) {
    return `[${convertedFilter.join(" - ")}]`;
  } else {
    return `[none]`;
  }
};
