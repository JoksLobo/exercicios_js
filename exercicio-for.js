// for(i = 0, i >= 10, i++){}
const vendasPorDia = [20, 15, 25, 18, 22, 30, 28];
const precoPorHamburguer = 10;

function calcularFaturamentoSemanal(vendasPorDia, precoPorHamburguer) {
  let faturamentoSemanal = 0;
  for (let i = 0; i < vendasPorDia.length; i++) {
    faturamentoSemanal += vendasPorDia[i] * precoPorHamburguer;
  }

  return faturamentoSemanal;
}

const faturamentoTotal = calcularFaturamentoSemanal(
  vendasPorDia,
  precoPorHamburguer
);

console.log(`O faturamento semanal foi de R$${faturamentoTotal},00`);

const cardapio = [
  { nome: "Hamburguer", preco: 10 },
  { nome: "Batata frita", preco: 5 },
  { nome: "Refrigerante", preco: 3 },
  { nome: "Milkshake", preco: 7 },
];

function exibirCardapio(cardapio) {
  console.log("Cardápio da lanchonete:");
  for (let c = 0; c < cardapio.length; c++) {
    console.log(`${cardapio[c].nome}: ${cardapio[c].preco}`);
  }
}

exibirCardapio(cardapio);
