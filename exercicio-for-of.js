const cardapioLanchonete = [
  "hamburguer",
  "batata frita",
  "refrigerante",
  "milkshake",
  "hot dog",
  "pizza",
  "nuggets",
];

const cardapio = {
  hamburguer: 10,
  batataFrita: 5,
  refrigerante: 2,
  milkshake: 7,
};

function listarItemDoCardapio(cardapio) {
  for (const item of cardapio) {
    console.log(item);
  }
}

listarItemDoCardapio(cardapioLanchonete);

const pedidoDocliente = [
  { nome: "hamburguer", quantidade: 2 },
  { nome: "batataFrita", quantidade: 1 },
  { nome: "refrigerante", quantidade: 3 },
];

function calcularTotalDaConta(cardapio, pedidoDocliente) {
  let totalConta = 0;
  for (const pedido of pedidoDocliente) {
    if (pedido.nome in cardapio) {
      totalConta += cardapio[pedido.nome] * pedido.quantidade;
    }
  }

  return totalConta;
}

const totalConta = calcularTotalDaConta(cardapio, pedidoDocliente);
console.log(totalConta);
