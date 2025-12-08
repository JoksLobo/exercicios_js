//if(condição 1){
// Código que será executado
//se a condição
//for verdadeira
//}else if (condição 2){
//Código que será execiutado
//se a segunda condição
//for verdadeira
//}
// else {
//código que será executado
// apenas se a condição
// não for verdadeira
//}

const usuario = {
  nome: "Antônio",
  idade: 40,
  time: "",
};

const mensagemDeBoasVindas1 = "Bem-vindo, torcedor Tricolor!";
const mensagemDeBoasVindas2 = "Bem-vindo, torcedor Rubro-Negro!";
const mensagemDeBoasVindas3 = "Bem-vindo, torcedor Vascaíno!";
const mensagemDeBoasVindas4 = "Bem-vindo, torcedor Santista!";
const mensagemDeBoasVindas5 = "Bem-vindo, torcedor Palmeirense!";
const mensagemDeBoasVindas6 = "Bem-vindo, torcedor Corinthiano!";
const mensagemDeBoasVindas7 = "Bem-vindo, torcedor São Paulino!";
const mensagemDeBoasVindas8 = "Bem-vindo, torcedor Baiano!";

const mensagemDeBoasVindasGeral = "Bem-vindo, amante do esporte!";

// if (usuario.time === "Fluminense") {
//   console.log(mensagemDeBoasVindas1);
// } else if (usuario.time === "Flamengo") {
//   console.log(mensagemDeBoasVindas2);
// } else if (usuario.time === "Vasco") {
//   console.log(mensagemDeBoasVindas3);
// } else if (usuario.time === "Santos") {
//   console.log(mensagemDeBoasVindas4);
// } else if (usuario.time === "Palmeiras") {
//   console.log(mensagemDeBoasVindas5);
// } else if (usuario.time === "Corínthians") {
//   console.log(mensagemDeBoasVindas6);
// } else if (usuario.time === "São Paulo") {
//   console.log(mensagemDeBoasVindas7);
// } else if (usuario.time === "Bahia") {
//   console.log(mensagemDeBoasVindas8);
// } else {
//   console.log(mensagemDeBoasVindasGeral);
// }
switch (usuario.time) {
  case "Fluminense":
    console.log(mensagemDeBoasVindas1);
    break;
  case "Flamengo":
    console.log(mensagemDeBoasVindas2);
    break;
  case "Vasco":
    console.log(mensagemDeBoasVindas3);
    break;
  case "Santos":
    console.log(mensagemDeBoasVindas4);
    break;
  case "Palmeiras":
    console.log(mensagemDeBoasVindas5);
    break;
  case "Corínthians":
    console.log(mensagemDeBoasVindas6);
    break;
  case "São Paulo":
    console.log(mensagemDeBoasVindas7);
    break;
  case "Bahia":
    console.log(mensagemDeBoasVindas8);
    break;
  default:
    console.log(mensagemDeBoasVindasGeral);
}

const mensagemDeEscolha =
  "Clique no setor para o qual deseja comprar seu ingresso!";
const mensagemFinal = "Divirta-se no Maracanã!";

console.log(mensagemDeEscolha);
console.log(mensagemFinal);
