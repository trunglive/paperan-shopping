export const convertTextToPriceRange = arr => {
  const allPrices = [];
  arr.map(item => {
    if (item === "less-than-ten") {
      allPrices.push(0, 10);
    } else if (item === "between-ten-and-thirty") {
      allPrices.push(10, 30);
    } else if (item === "between-thirty-and-fifty") {
      allPrices.push(30, 50);
    } else if (item === "more-than-fifty") {
      allPrices.push(50, Infinity);
    }
  });

  const minNum = Math.min(...allPrices);
  const maxNum = Math.max(...allPrices);
  return [minNum, maxNum];
};
