/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
export function calculateTotal(purchases, applyDiscount) {
  const sum = purchases.reduce((total, item) => {
    return total + (item.count * item.price);
  }, 0);
  if (applyDiscount) {
    return sum * 0.891;
  }
  return sum;
}
