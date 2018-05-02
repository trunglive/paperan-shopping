export const calculateAverageRating = reviews => {
  const all = reviews.reduce((acc, currentRating) => {
    return acc + currentRating.rating;
  }, 0);
  return all / reviews.length;
};
 