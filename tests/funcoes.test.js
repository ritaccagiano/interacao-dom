// arquivo: funcoes.test.js
const soma = require('../funcoes');

test('soma 2 + 3 deve ser 5', () => {
  expect(soma(2, 3)).toBe(5);
});
