function fatorial(n) {
  // caso base = se n for 0 ou 1, retornar 1
  if (n === 0 || n === 1) {
    return 1;
  } else {
    //chamada recursiva: se n for maior que 1, chamar a função fatorial novamente
    return n * fatorial(n - 1);
  }
}

console.log(fatorial(100));

function recursividade(string) {
  if (string === "") {
    return 0;
  }
  return 1 + recursividade(string.substring(1));
}

console.log(recursividade("Joks Lobo"));

const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2024,
  pecas: {
    portas: 4,
    pneus: "Sistema abs",
    airbag: true,
  },
};

//função recursiva para imprimir propriedades de um objeto simples
function imprimirObj(objeto) {
  //obter as chaves do objeto
  const keys = Object.keys(objeto);

  //caso base - se o objeto estiver vazio
  if (keys.length === 0) {
    return;
  }

  //iteração sobre as chaves do objeto
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = objeto[key];

    //verificação se o valor é um objeto
    if (typeof value === "object") {
      //se for um obejto, chama recursivamente a função
      imprimirObj(value);
    } else {
      //se não for objeto imprime chave e valor
      console.log(`${key}:${value}`);
    }
  }
}

//chamada função
imprimirObj(carro);
