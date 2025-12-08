const cardapioLanchonete = [
  "hamburguer",
  "batata frita",
  "refrigerante",
  "milkshake",
  "hot dog",
  "pizza",
];

function contarItensDoCardapio(cardapio) {
  if (cardapio.length === 0) {
    return 0;
  } else {
    cardapio.pop();

    return 1 + contarItensDoCardapio(cardapio);
  }
}

const totalItens = contarItensDoCardapio(cardapioLanchonete);
console.log(totalItens);

const vendasDiarias = [
  20, 33, 21, 13, 19, 24, 14, 22, 26, 23, 20, 33, 21, 13, 19, 24, 14, 22, 26,
  23, 20, 33, 21, 13, 19, 24, 14, 22, 26, 23, 24, 14, 22, 26, 23,
];

const precoPorHamburguer = 23;

function calcularValorTotalDeVendas(vendasDiarias, precoPorHamburguer, dia) {
  //caso base - ponto de parada

  if (dia >= vendasDiarias.length) {
    return 0;
  }

  //caso recursivo
  const valorVendaDiaAtual = vendasDiarias[dia] * precoPorHamburguer;
  const valorDoProximoDia = calcularValorTotalDeVendas(
    vendasDiarias,
    precoPorHamburguer,
    dia + 1
  );

  return valorVendaDiaAtual + valorDoProximoDia;
}

const totalDevendas = calcularValorTotalDeVendas(
  vendasDiarias,
  precoPorHamburguer,
  0
);

console.log(totalDevendas);
