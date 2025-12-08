function verificaVelocidade(velocidade) {
  const dentroDoLimite = velocidade <= 80 ? true : false;
  return dentroDoLimite;
}

const velocidadeExemplo = 50;
const dentroDoLimite = verificaVelocidade(velocidadeExemplo);

console.log(dentroDoLimite);

function mensagemSemaforo(corSemaforo) {
  const mensagem =
    corSemaforo === "vermelho"
      ? "Pare o veículo"
      : corSemaforo === "amarelo"
      ? "Reduzir a velocidade e pare se for seguro."
      : corSemaforo === "verde"
      ? "Você pode continuar."
      : "Cor do semaforo desconhecida, siga com atenção.";

  return mensagem;
}

const semaforo = "preto";
console.log(mensagemSemaforo(semaforo));
