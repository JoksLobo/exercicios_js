// while(condição){
//bloco de código a ser repetido
//}
let numero = 1;
while (numero <= 5) {
  console.log("Número: ", numero);
  numero++;
}

console.log("Contagem com while concluída!");

let funcionariosRegistrados = 0;

while (funcionariosRegistrados < 3) {
  console.log(
    "Funcionário " +
      (funcionariosRegistrados + 1) +
      " registrou suas horas de trabalho."
  );
  funcionariosRegistrados++;
}
console.log("Fim de registro.");

//simulador de app de corrida
let nome = "João";
let partida = "Avenida Paulista";
let destino = "Parque do Ibirapuera";

function registrarUsuario(nome) {
  while (true) {
    if (nome === "") {
      console.log("Preencha com o nome.");
    } else if (typeof nome !== "string") {
      console.log("Nome está inválido, preencha novamente.");
    } else {
      console.log(`Usuário ${nome} registrado com sucesso.`);
    }
    break;
  }

  selecionar(partida, destino);
}

function selecionar(partida, destino) {
  console.log("Selecione o local de partida e destino");

  while (partida !== destino) {
    if (partida === "" || typeof partida !== "string") {
      console.log("O local de partida precisa ser informado!");
      break;
    } else if (destino === "" || typeof destino !== "string") {
      console.log("Destino inválido. Digite o destino correto.");
      break;
    } else {
      console.log(`Corrida com destino a ${destino} confirmada!`);
      break;
    }
  }
}

registrarUsuario(nome);
