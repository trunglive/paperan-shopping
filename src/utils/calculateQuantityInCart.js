export const calculateQuantityInCart = cart => {
  return Object.keys(cart)
    .map(id => {
      return cart[id].map(item => item.quantity);
    })
    .reduce((acc, next) => {
      return [...acc, ...next];
    }, [])
    .reduce((acc, next) => {
      return acc + next;
    }, 0);
};