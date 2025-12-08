const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2023,
  color: "Silver",
  fuelType: "Gasoline",
  engineCapacity: "2.5L",
  transmition: "Automatic",
  power: "203 horsepower",
  seatingCapacity: 5,
  price: "R$25,000",
};

for (info in car) {
  //infor in cara pega todas as chaves e valores dentro do objeto
  console.log(`${info}:${car[info]}`); //${info} imprime a chave, ${car[info]} imprime o valor
}
