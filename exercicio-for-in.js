const cardapio = {
  hamburguer: 10,
  batataFrita: 5,
  refrigerante: 2,
  milkshake: 7,
};

function listarOsItensDocardapio(cardapio) {
  for (const item in cardapio) {
    console.log(`${item}: R$${cardapio[item]}`);
  }
}

listarOsItensDocardapio(cardapio);

const pedidoCliente = {
  hamburguer: 2,
  batataFrita: 3,
  refrigerante: 3,
  milkshake: 6,
};

function calcularTotalConta(cardapio, pedidoCliente) {
  let totalConta = 0;

  for (const item in pedidoCliente) {
    if (item in cardapio) {
      totalConta += cardapio[item] * pedidoCliente[item];
    }
  }

  return totalConta;
}

const totalConta = calcularTotalConta(cardapio, pedidoCliente);
console.log(`Total da conta é de: R${totalConta}`);
