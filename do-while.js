// do {
// bloco de código a ser repetido
//} while(condição);

// let i = 6;

// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

let funcionariosParaRegistrar = 6;

do {
  console.log(
    "Registrando a entrada do funcionário " + funcionariosParaRegistrar
  );
  funcionariosParaRegistrar--;
} while (funcionariosParaRegistrar > 0);
console.log("Nenhum funcionário restante para registrar.");

//simulador de reprodução de filmes
let reproduzindo = true;
let entrada = "";

function reproduzirFilme() {
  console.log("Apertou o play.");
}

function pausarOFilme() {
  console.log("Filme pausado.");
}

function sairDoFilme() {
  console.log("Saindo do filme.");
}

function opcoesConfiguracao(entrada) {
  do {
    console.log("Opções de configuração: 1 - Pausar e 2 - Sair");
    console.log(`Opção ${entrada}`);

    if (entrada === 1) {
      pausarOFilme();
      reproduzindo = false;
    } else if (entrada === 2) {
      sairDoFilme();
      reproduzindo = false;
    } else {
      console.log(
        "A opção é inválida, escolha: 1 - para Pausar ou 2 - Para sair do filme"
      );
      break;
    }
  } while (reproduzindo);
}

reproduzirFilme();
opcoesConfiguracao(entrada);
