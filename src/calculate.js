/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
export function calculateTotal(purchases) {
  return purchases.reduce((total, item) => total + (item.count * item.price), 0);
}
