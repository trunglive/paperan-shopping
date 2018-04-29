export const capitalizeFirstLetter = words =>
  words
    .split(" ")
    .map(word => word[0].toUpperCase() + word.substring(1))
    .join(" ");