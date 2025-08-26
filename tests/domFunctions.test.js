// tests/mudarTexto.test.js
function mudarTexto() {
  document.getElementById('mensagem').innerText = 'Texto alterado com sucesso!';
}

test('muda o texto do parágrafo', () => {
  document.body.innerHTML = `<p id="mensagem">Texto original</p>`;
  mudarTexto();
  expect(document.getElementById('mensagem').innerText).toBe('Texto alterado com sucesso!');
});
