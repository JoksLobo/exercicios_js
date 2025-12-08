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
