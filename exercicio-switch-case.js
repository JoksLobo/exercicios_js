function coresDoSemaforo(corSemaforo) {
  let mensagem = "";

  switch (corSemaforo) {
    case "vermelho":
      mensagem = "Pare o veículo imediatamente.";
      break;

    case "amarelo":
      mensagem = "Reduza a velocidade com cautela e pare se seguro.";
      break;

    case "verde":
      mensagem = "Você pode continuar com cuidado.";
      break;

    default:
      mensagem = "Cordo semaforo desconhecida, siga com cuidado.";
  }

  return mensagem;
}
const cor = "vermelho";
console.log(coresDoSemaforo(cor));

function verificarPlaca(ultimoDigitoDaPlaca) {
  let diaDeRodizio = "";
  switch (ultimoDigitoDaPlaca) {
    case 1:
    case 2:
      diaDeRodizio = "Segunda-feira";
      break;

    case 3:
    case 4:
      diaDeRodizio = "Terça-feira";
      break;

    case 5:
    case 6:
      diaDeRodizio = "Quarta-feira";
      break;

    case 7:
    case 8:
      diaDeRodizio = "Quinta-feira";
      break;

    case 9:
    case 0:
      diaDeRodizio = "Sexta-feira";
      break;

    default:
      diaDeRodizio = "Placa Inválida ou dia sem rodízio.";
  }

  return `O dia de rodízio é na ${diaDeRodizio}`;
}

const finalPlaca = "l";
console.log(verificarPlaca(finalPlaca));
