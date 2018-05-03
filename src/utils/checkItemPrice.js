export const checkItemPrice = (priceRanges, itemPrice) => {
  const prices = [];
  priceRanges.map(priceRange => {
    if (priceRange === "less-than-ten") {
      prices.push([0, 10]);
    } else if (priceRange === "between-ten-and-thirty") {
      prices.push([10, 30]);
    } else if (priceRange === "between-thirty-and-fifty") {
      prices.push([30, 50]);
    } else if (priceRange === "more-than-fifty") {
      prices.push([50, Infinity]);
    }
  });

  return prices.some(price => price[0] < itemPrice && itemPrice < price[1]);
};
