// for (inicialização; condição; expressão_final){
//bloco de código a ser repitido
//}

// for (i = 1; i <= 5; i++) {
//   console.log(i);
// }

//lista de funcionários de um zoológico
let funcionarios = [
  { nome: "João", categoria: "Veterinário", salario: 3500, disponivel: true },
  { nome: "André", categoria: "Veterinário", salario: 3500, disponivel: true },
  {
    nome: "Maria",
    categoria: "Administrativo",
    salario: 1800,
    disponivel: true,
  },
  {
    nome: "Ana",
    categoria: "Administrativo",
    salario: 1800,
    disponivel: true,
  },
  { nome: "Ricardo", categoria: "Tratador", salario: 2500, disponivel: false },
];

//listar os funcionários por categoria
function listarFuncionariosPorCategoria(categoria) {
  console.log(`Funcionário na categoria ${categoria}`);
  for (let i = 0; i < funcionarios.length; i++) {
    if (funcionarios[i].categoria === categoria) {
      console.log(funcionarios[i].nome);
    }
  }
}

listarFuncionariosPorCategoria("Veterinário");

//calcular o total gasto em salário
function calcularSalarios() {
  let totalSalarios = 0;
  for (i = 0; i < funcionarios.length; i++) {
    totalSalarios += funcionarios[i].salario;
  }
  return totalSalarios;
}
console.log(calcularSalarios());

//função para contar os funcionários que estão disponíveis

function funcionariosDisponiveis() {
  let contador = 0;
  for (let i = 0; i < funcionarios.length; i++) {
    if (funcionarios[i].disponivel) {
      contador++;
    }
  }
  return contador;
}

console.log(funcionariosDisponiveis());

//loop infinito

//exemplo produtos
let produtos = ["camiseta", "calça", "boné", "meias"];
for (let i = 0; i <= 3; i++) {
  console.log("Produto " + (i + 1) + ": " + produtos[i]);
}

//loop For sem especificar tods os argumentos
