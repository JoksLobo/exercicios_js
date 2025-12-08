//operador ternário - estrutura alternativa e mais enxuta
//para o caso de um bloco operador if else

// condição booleana ? execute caso verdadeiro : execute caso falso

const usuario = {
  nome: "Antônio",
  idade: 19,
  time: "Flamengo",
};

const mensagemDeBoasVindas1 = "Bem-vindo, torcedor Tricolor!";
const mensagemDeBoasVindas2 = "Bem-vindo, torcedor Rubro-Negro!";
const mensagemDeBoasVindasGeral = "Bem-vindo, amante do esporte!";

// if (usuario.time === "Fluminense") {
//   console.log(mensagemDeBoasVindas1);
// } else {
//   console.log(mensagemDeBoasVindas2);
// }

usuario.time === "Fluminense" && usuario.idade >= 18
  ? console.log(mensagemDeBoasVindas1)
  : usuario.time === "Flamengo" && usuario.idade >= 18
  ? console.log(mensagemDeBoasVindas2)
  : usuario.idade >= 18
  ? console.log(mensagemDeBoasVindasGeral)
  : console.log("Não vendemos ingressos para menores de 18 anos");

const mensagemDeEscolha =
  "Clique no setor para o qual deseja comprar seu ingresso!";
const mensagemFinal = "Divirta-se no Maracanã!";

console.log(mensagemDeEscolha);
console.log(mensagemFinal);
