function adivinharNumeroSecreto() {
  const numeroSecreto = Math.floor(Math.random() * 100);
  let tentativa;
  let tentativas = 0;

  do {
    tentativa = Math.floor(Math.random() * 100);
    tentativas++;

    if (tentativa === numeroSecreto) {
      console.log(
        `Parabéns, você adivinhou o número secreto: ${numeroSecreto} em ${tentativas} tentativas.`
      );
    }
  } while (tentativa !== numeroSecreto);
}

adivinharNumeroSecreto();

const estoqueLanchonete = {
  hamburguer: 20,
  batataFrita: 15,
  refrigerante: 30,
  milkshake: 10,
};

function atualizarEstoque(estoque, itemFalta, qtdAdicionar) {
  if (estoque.hasOwnProperty(itemFalta)) {
    estoque[itemFalta] += qtdAdicionar;
    console.log(`Estoque foi atualizado: ${itemFalta}: ${estoque[itemFalta]}`);
  } else {
    console.log("O item não foi encontrado no estoque.");
  }
}

console.log("Estoque da lanchonete:");
console.log(estoqueLanchonete);

let continuarAdicionando = true;
let itemNaoEncontrado = false;

do {
  const itemFalta = "suco";
  const qtdAdicionar = 5;

  if (!estoqueLanchonete.hasOwnProperty(itemFalta)) {
    //se o item não existe no estoque exiba uma mensagem
    if (!itemNaoEncontrado) {
      console.log("Item não foi encontrado.");
      itemNaoEncontrado = true;
    }
  } else if (estoqueLanchonete[itemFalta] + qtdAdicionar > 50) {
    continuarAdicionando = false;
    console.log(
      `Limite do estoque:${itemFalta}: ${estoqueLanchonete[itemFalta]} foi atingido.`
    );
  } else {
    atualizarEstoque(estoqueLanchonete, itemFalta, qtdAdicionar);
  }
} while (continuarAdicionando);

console.log("Estoque final:");
console.log(estoqueLanchonete);
