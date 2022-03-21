// criei uma função que recebe vários parâmetros, e retorna um array onde percorro cada item e faço a soma
function sum(...params) { // utilizei rest pois n sei quantos parâmetros vão ser passados;
  return params.reduce((number1, number2) => number1 + number2)
}
console.log(sum(1,3,4,5,6,7,7,8));