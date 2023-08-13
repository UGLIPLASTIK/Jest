const { calculateTotal } = require('../src/calculate.js');

test('basic test', () => {
  const result = 4;
  expect(result).toBe(4);
});

test('calculateTotal sum', () => {
  const list = [
    {
      id: 456,
      name: 'Война и мир',
      count: 3,
      price: 400
    },
    {
      id: 77,
      name: 'JavaSctipt',
      count: 1,
      price: 1300,
    },
  ];
});

const result = calculateTotal(list);