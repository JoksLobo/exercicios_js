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
  time: "Palmeiras",
};

const mensagemDeBoasVindas1 = "Bem-vindo, torcedor Tricolor!";
const mensagemDeBoasVindas2 = "Bem-vindo, torcedor Rubro-Negro!";
const mensagemDeBoasVindasGeral = "Bem-vindo, amante dos esportes!";

if (usuario.time === "Fluminense") {
  console.log(mensagemDeBoasVindas1);
} else if (usuario.time === "Flamengo") {
  console.log(mensagemDeBoasVindas2);
} else {
  console.log(mensagemDeBoasVindasGeral);
}

const mensagemDeEscolha =
  "Clique no setor para o qual deseja comprar seu ingresso!";
const mensagemFinal = "Divirta-se no Maracanã!";

console.log(mensagemDeEscolha);
console.log(mensagemFinal);
