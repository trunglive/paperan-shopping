export const calculateAverageRating = reviews => {
  if (reviews.length > 0) {
    const sum = reviews.reduce((acc, currentRating) => {
      return acc + currentRating.rating;
    }, 0);
    return sum / reviews.length;
  } else {
    return 0;
  }
};

