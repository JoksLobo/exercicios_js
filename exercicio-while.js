// while(condiçao){}
function realizarVendas(totalDeVendas) {
  let dinheiroRecebido = 0;
  let vendasRealizadas = 0;
  let vendasConcluidas = false;

  while (!vendasConcluidas) {
    const valorDaVenda = 20;

    //simular a venda
    dinheiroRecebido += valorDaVenda;
    vendasRealizadas++;

    //verificação se as vendas atingiram o parametro
    if (vendasRealizadas >= totalDeVendas) {
      vendasConcluidas = true;
    }
  }
  console.log(`Total do dinheiro recebido: R$${dinheiroRecebido.toFixed(2)}`);
}

realizarVendas(15);

const pedidosPendentes = [
  "Burguer",
  "Bata frita",
  "Coxinha",
  "Milkshake",
  "Nuggets",
];

function realizarEntregas(pedidosPendentes) {
  let pedidoAtual = 0;
  console.log("Iniciando entregas:");
  while (pedidosPendentes.length > 0) {
    pedidoAtual = pedidosPendentes.shift();
    console.log(`Entregando: ${pedidoAtual}`);
  }
  console.log("Todos os pedidos foram entregues!");
}

realizarEntregas(pedidosPendentes);
