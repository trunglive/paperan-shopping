export const calculateSubtotal = cart => {
  const val = Object.keys(cart)
    .map(id => {
      return cart[id].map(item => Number(item.quantity) * item.price);
    })
    .reduce((acc, next) => {
      return [...acc, ...next];
    }, [])
    .reduce((acc, next) => {
      return acc + next;
    }, 0);

  return val.toFixed(2);
};
