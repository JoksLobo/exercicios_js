function verificaDesconto(valorDaCompra) {
  if (valorDaCompra >= 100) {
    console.log("Parabéns você tem direito a um cupom de 10% de desconto!");
    const valorComDesconto = valorDaCompra * 0.9;
    console.log(`O valor da compra ficou em R$${valorComDesconto},00`);
  } else {
    console.log(
      `O valor de R$${valorDaCompra},00 não alcança o valor de R$100,00 e não foi possível gerar cupom de desconto.`
    );
  }
}

verificaDesconto(56);

function verificarEstoque(quantidadeDisponivel) {
  if (quantidadeDisponivel === 0) {
    console.log("O produto informado está insdisponível!");
  } else {
    console.log(`Há ${quantidadeDisponivel} unidades no estoque.`);
  }
}

let skate = 15;
let boneca = 0;

verificarEstoque(skate);
verificarEstoque(boneca);

function categorizaCliente(pontosFidelidade) {
  console.log(`O total de pontos é de ${pontosFidelidade}.`);
  if (pontosFidelidade >= 85) {
    console.log("Esse é um cliente Premium!");
  } else if (pontosFidelidade >= 50) {
    console.log("Esse é um cliente regular");
  } else {
    console.log("Esse é um cliente comum.");
  }
}

let clienteA = 87;
let clienteB = 65;
let clienteC = 16;

categorizaCliente(clienteA);

function desempenhoIndividualDeVendas(vendasMensais, metaDeVendas) {
  const percentualAlcancado = (vendasMensais / metaDeVendas) * 100;

  if (percentualAlcancado >= 100) {
    return "Excelente desempenho";
  } else if (percentualAlcancado >= 90 && percentualAlcancado < 100) {
    return "Muito bom desempenho.";
  } else if (percentualAlcancado >= 80 && percentualAlcancado < 90) {
    return "Bom desempenho.";
  } else if (percentualAlcancado >= 61 && percentualAlcancado < 89) {
    return "Desempenho satisfatório.";
  } else {
    return "Péssimo desempenho.";
  }
}

console.log(desempenhoIndividualDeVendas(19000, 10000));
