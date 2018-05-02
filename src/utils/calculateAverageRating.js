export const calculateAverateRating = item => {
  const sum = item.reviews.reduce((prevReview, nextReview) => {
    return prevReview.rating + nextReview.rating;
  }, 0);
  return sum / item.length;
};
